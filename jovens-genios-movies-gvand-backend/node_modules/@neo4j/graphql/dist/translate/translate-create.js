"use strict";
/*
 * Copyright (c) "Neo4j"
 * Neo4j Sweden AB [http://neo4j.com]
 *
 * This file is part of Neo4j.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_projection_and_params_1 = __importDefault(require("./create-projection-and-params"));
const create_create_and_params_1 = __importDefault(require("./create-create-and-params"));
const constants_1 = require("../constants");
const utils_1 = require("../utils/utils");
const CallbackBucket_1 = require("../classes/CallbackBucket");
const cypher_builder_1 = __importDefault(require("@neo4j/cypher-builder"));
const unwind_create_1 = __importDefault(require("./unwind-create"));
const types_1 = require("./batch-create/types");
async function translateCreate({ context, node, }) {
    try {
        return await (0, unwind_create_1.default)({ context, node });
    }
    catch (error) {
        if (!(error instanceof types_1.UnsupportedUnwindOptimization)) {
            throw error;
        }
    }
    const { resolveTree } = context;
    const mutationInputs = resolveTree.args.input;
    const connectionStrs = [];
    const interfaceStrs = [];
    const projectionWith = [];
    const callbackBucket = new CallbackBucket_1.CallbackBucket(context);
    let connectionParams;
    let interfaceParams;
    const mutationResponse = resolveTree.fieldsByTypeName[node.mutationResponseTypeNames.create];
    const nodeProjection = Object.values(mutationResponse).find((field) => field.name === node.plural);
    const metaNames = [];
    const { createStrs, params } = mutationInputs.reduce((res, input, index) => {
        const varName = `this${index}`;
        const create = [`CALL {`];
        const withVars = [varName];
        projectionWith.push(varName);
        if (context.subscriptionsEnabled) {
            create.push(`WITH [] AS ${constants_1.META_CYPHER_VARIABLE}`);
            withVars.push(constants_1.META_CYPHER_VARIABLE);
        }
        const createAndParams = (0, create_create_and_params_1.default)({
            input,
            node,
            context,
            varName,
            withVars,
            includeRelationshipValidation: true,
            topLevelNodeVariable: varName,
            callbackBucket,
        });
        create.push(`${createAndParams[0]}`);
        if (context.subscriptionsEnabled) {
            const metaVariable = `${varName}_${constants_1.META_CYPHER_VARIABLE}`;
            create.push(`RETURN ${varName}, ${constants_1.META_CYPHER_VARIABLE} AS ${metaVariable}`);
            metaNames.push(metaVariable);
        }
        else {
            create.push(`RETURN ${varName}`);
        }
        create.push(`}`);
        res.createStrs.push(create.join("\n"));
        res.params = { ...res.params, ...createAndParams[1] };
        return res;
    }, { createStrs: [], params: {}, withVars: [] });
    let replacedProjectionParams = {};
    let projectionStr;
    let authCalls;
    if (metaNames.length > 0) {
        projectionWith.push(`${metaNames.join(" + ")} AS meta`);
    }
    let projectionSubquery;
    if (nodeProjection) {
        let projAuth = "";
        const projection = (0, create_projection_and_params_1.default)({
            node,
            context,
            resolveTree: nodeProjection,
            varName: "REPLACE_ME",
        });
        projectionSubquery = cypher_builder_1.default.concat(...projection.subqueriesBeforeSort, ...projection.subqueries);
        if (projection.meta?.authValidateStrs?.length) {
            projAuth = `CALL apoc.util.validate(NOT (${projection.meta.authValidateStrs.join(" AND ")}), "${constants_1.AUTH_FORBIDDEN_ERROR}", [0])`;
        }
        replacedProjectionParams = Object.entries(projection.params).reduce((res, [key, value]) => {
            return { ...res, [key.replace("REPLACE_ME", "projection")]: value };
        }, {});
        projectionStr = createStrs
            .map((_, i) => `\nthis${i} ${projection.projection
            // First look to see if projection param is being reassigned
            // e.g. in an apoc.cypher.runFirstColumn function call used in createProjection->connectionField
            .replace(/REPLACE_ME(?=\w+: \$REPLACE_ME)/g, "projection")
            .replace(/\$REPLACE_ME/g, "$projection")
            .replace(/REPLACE_ME/g, `this${i}`)}`)
            .join(", ");
        authCalls = createStrs
            .map((_, i) => projAuth.replace(/\$REPLACE_ME/g, "$projection").replace(/REPLACE_ME/g, `this${i}`))
            .join("\n");
    }
    const replacedConnectionStrs = connectionStrs.length
        ? createStrs.map((_, i) => {
            return connectionStrs
                .map((connectionStr) => {
                return connectionStr.replace(/REPLACE_ME/g, `this${i}`);
            })
                .join("\n");
        })
        : [];
    const replacedInterfaceStrs = interfaceStrs.length
        ? createStrs.map((_, i) => {
            return interfaceStrs
                .map((interfaceStr) => {
                return interfaceStr.replace(/REPLACE_ME/g, `this${i}`);
            })
                .join("\n");
        })
        : [];
    const replacedConnectionParams = connectionParams
        ? createStrs.reduce((res1, _, i) => {
            return {
                ...res1,
                ...Object.entries(connectionParams).reduce((res2, [key, value]) => {
                    return { ...res2, [key.replace("REPLACE_ME", `this${i}`)]: value };
                }, {}),
            };
        }, {})
        : {};
    const replacedInterfaceParams = interfaceParams
        ? createStrs.reduce((res1, _, i) => {
            return {
                ...res1,
                ...Object.entries(interfaceParams).reduce((res2, [key, value]) => {
                    return { ...res2, [key.replace("REPLACE_ME", `this${i}`)]: value };
                }, {}),
            };
        }, {})
        : {};
    const returnStatement = generateCreateReturnStatement(projectionStr, context.subscriptionsEnabled);
    const projectionWithStr = context.subscriptionsEnabled ? `WITH ${projectionWith.join(", ")}` : "";
    const createQuery = new cypher_builder_1.default.RawCypher((env) => {
        const projectionSubqueryStr = projectionSubquery ? `\n${projectionSubquery.getCypher(env)}` : "";
        // TODO: avoid REPLACE_ME
        const replacedProjectionSubqueryStrs = createStrs.length
            ? createStrs.map((_, i) => {
                return projectionSubqueryStr
                    .replace(/REPLACE_ME(?=\w+: \$REPLACE_ME)/g, "projection")
                    .replace(/\$REPLACE_ME/g, "$projection")
                    .replace(/REPLACE_ME/g, `this${i}`);
            })
            : [];
        const cypher = (0, utils_1.filterTruthy)([
            `${createStrs.join("\n")}`,
            projectionWithStr,
            authCalls,
            ...replacedConnectionStrs,
            ...replacedInterfaceStrs,
            ...replacedProjectionSubqueryStrs,
            returnStatement,
        ])
            .filter(Boolean)
            .join("\n");
        return [
            cypher,
            {
                ...params,
                ...replacedProjectionParams,
                ...replacedConnectionParams,
                ...replacedInterfaceParams,
            },
        ];
    });
    const createQueryCypher = createQuery.build("create_");
    const { cypher, params: resolvedCallbacks } = await callbackBucket.resolveCallbacksAndFilterCypher({
        cypher: createQueryCypher.cypher,
    });
    return {
        cypher,
        params: {
            ...createQueryCypher.params,
            resolvedCallbacks,
        },
    };
}
exports.default = translateCreate;
function generateCreateReturnStatement(projectionStr, subscriptionsEnabled) {
    const statements = [];
    if (projectionStr) {
        statements.push(`[${projectionStr}] AS data`);
    }
    if (subscriptionsEnabled) {
        statements.push(constants_1.META_CYPHER_VARIABLE);
    }
    if (statements.length === 0) {
        statements.push("'Query cannot conclude with CALL'");
    }
    return `RETURN ${statements.join(", ")}`;
}
//# sourceMappingURL=translate-create.js.map
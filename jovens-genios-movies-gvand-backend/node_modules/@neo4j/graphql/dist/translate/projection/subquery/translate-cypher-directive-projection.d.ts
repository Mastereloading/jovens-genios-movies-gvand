import type { ResolveTree } from "graphql-parse-resolve-info";
import type { Node } from "../../../classes";
import type { Context, CypherField } from "../../../types";
import Cypher from "@neo4j/cypher-builder";
import { ProjectionMeta } from "../../create-projection-and-params";
interface Res {
    projection: string[];
    params: any;
    meta: ProjectionMeta;
    subqueries: Array<Cypher.Clause>;
    subqueriesBeforeSort: Array<Cypher.Clause>;
}
export declare function translateCypherDirectiveProjection({ context, cypherField, field, node, alias, param, chainStr, res, }: {
    context: Context;
    cypherField: CypherField;
    field: ResolveTree;
    node: Node;
    chainStr: string;
    alias: string;
    param: string;
    res: Res;
}): Res;
export {};
//# sourceMappingURL=translate-cypher-directive-projection.d.ts.map
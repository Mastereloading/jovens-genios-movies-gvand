import type { Node } from "../classes";
import type { CallbackBucket } from "../classes/CallbackBucket";
import type { Context } from "../types";
declare function createCreateAndParams({ input, varName, node, context, callbackBucket, withVars, insideDoWhen, includeRelationshipValidation, topLevelNodeVariable, }: {
    input: any;
    varName: string;
    node: Node;
    context: Context;
    callbackBucket: CallbackBucket;
    withVars: string[];
    insideDoWhen?: boolean;
    includeRelationshipValidation?: boolean;
    topLevelNodeVariable?: string;
}): [string, any];
export default createCreateAndParams;
//# sourceMappingURL=create-create-and-params.d.ts.map
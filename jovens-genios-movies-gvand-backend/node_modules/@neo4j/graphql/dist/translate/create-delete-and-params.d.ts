import type { Node } from "../classes";
import type { Context } from "../types";
declare function createDeleteAndParams({ deleteInput, varName, node, parentVar, chainStr, withVars, context, insideDoWhen, parameterPrefix, recursing, }: {
    parentVar: string;
    deleteInput: any;
    varName: string;
    chainStr?: string;
    node: Node;
    withVars: string[];
    context: Context;
    insideDoWhen?: boolean;
    parameterPrefix: string;
    recursing?: boolean;
}): [string, any];
export default createDeleteAndParams;
//# sourceMappingURL=create-delete-and-params.d.ts.map
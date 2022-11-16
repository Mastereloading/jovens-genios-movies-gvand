import type { Auth, AuthOperations, AuthRule } from "../types";
/** Helper class for a node auth directive */
export declare class NodeAuth implements Auth {
    readonly rules: AuthRule[];
    readonly type: "JWT";
    constructor({ rules, type }: Auth);
    getRules(operations: AuthOperations[] | AuthOperations | undefined): AuthRule[];
    private operationsMatchRule;
}
//# sourceMappingURL=NodeAuth.d.ts.map
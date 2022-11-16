import type { AuthRule } from "../../../types";
import type { SubscriptionContext } from "./types";
export declare class SubscriptionAuth {
    static validateAuthenticationRule(rule: AuthRule, context: SubscriptionContext): boolean;
    static validateRolesRule(rule: AuthRule, context: SubscriptionContext): boolean;
    private static isAuthenticated;
    private static validateAuthenticated;
    private static validateUnauthenticated;
}
//# sourceMappingURL=subscription-auth.d.ts.map
import type { SubscriptionContext } from "./subscriptions/types";
import type { Context, JwtPayload, Neo4jGraphQLAuthPlugin } from "../../types";
export declare function decodeToken(token: string | undefined, plugin: Neo4jGraphQLAuthPlugin | undefined): Promise<JwtPayload | undefined>;
export declare function verifyGlobalAuthentication(context: SubscriptionContext | Context, plugin: Neo4jGraphQLAuthPlugin | undefined): void;
//# sourceMappingURL=wrapper-utils.d.ts.map
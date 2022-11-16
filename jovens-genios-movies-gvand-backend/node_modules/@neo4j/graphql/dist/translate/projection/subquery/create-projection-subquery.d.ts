import type { Node } from "../../../classes";
import type { Context, GraphQLOptionsArg, GraphQLWhereArg, RelationField } from "../../../types";
import Cypher from "@neo4j/cypher-builder";
import type { RelationshipDirection } from "../../../utils/get-relationship-direction";
export declare function createProjectionSubquery({ parentNode, whereInput, node, context, alias, nestedProjection, nestedSubqueries, relationField, relationshipDirection, optionsInput, authValidateStrs, addSkipAndLimit, collect, }: {
    parentNode: Cypher.Node;
    whereInput?: GraphQLWhereArg;
    node: Node;
    context: Context;
    alias: string;
    nestedProjection: string;
    nestedSubqueries: Cypher.Clause[];
    relationField: RelationField;
    relationshipDirection: RelationshipDirection;
    optionsInput: GraphQLOptionsArg;
    authValidateStrs: string[] | undefined;
    addSkipAndLimit?: boolean;
    collect?: boolean;
}): Cypher.Clause;
//# sourceMappingURL=create-projection-subquery.d.ts.map
import type { ResolveTree } from "graphql-parse-resolve-info";
import type { ConnectionField, Context } from "../../types";
import type { Node } from "../../classes";
import Cypher from "@neo4j/cypher-builder";
export declare function createEdgeProjection({ resolveTree, field, relationshipRef, relatedNodeVariableName, context, relatedNode, resolveType, extraFields, }: {
    resolveTree: ResolveTree;
    field: ConnectionField;
    relationshipRef: Cypher.Relationship;
    relatedNodeVariableName: string;
    context: Context;
    relatedNode: Node;
    resolveType?: boolean;
    extraFields?: Array<string>;
}): {
    projection: Cypher.Map;
    subqueries: Cypher.Clause[];
};
//# sourceMappingURL=connection-projection.d.ts.map
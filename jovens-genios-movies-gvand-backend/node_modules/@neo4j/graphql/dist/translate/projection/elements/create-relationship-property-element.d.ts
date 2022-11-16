import type Cypher from "@neo4j/cypher-builder";
import type { ResolveTree } from "graphql-parse-resolve-info";
import type Relationship from "../../../classes/Relationship";
export declare function createRelationshipPropertyElement({ resolveTree, relationship, relationshipVariable, }: {
    resolveTree: ResolveTree;
    relationship: Relationship;
    relationshipVariable: string;
}): string;
export declare function createRelationshipPropertyValue({ resolveTree, relationship, relationshipVariable, }: {
    resolveTree: ResolveTree;
    relationship: Relationship;
    relationshipVariable: Cypher.Relationship;
}): Cypher.Variable | Cypher.Expr;
//# sourceMappingURL=create-relationship-property-element.d.ts.map
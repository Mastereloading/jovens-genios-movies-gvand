import type { ResolveTree } from "graphql-parse-resolve-info";
import type { RelationField } from "../../types";
import type Cypher from "@neo4j/cypher-builder";
/** Returns a CypherBuilder pattern taking field direction params into account */
export declare function getPattern({ relationship, resolveTree, field, }: {
    relationship: Cypher.Relationship;
    resolveTree: ResolveTree;
    field: RelationField;
}): Cypher.Pattern;
//# sourceMappingURL=get-pattern.d.ts.map
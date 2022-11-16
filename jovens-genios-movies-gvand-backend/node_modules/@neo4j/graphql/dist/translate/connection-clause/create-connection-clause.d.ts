import type { ResolveTree } from "graphql-parse-resolve-info";
import Cypher from "@neo4j/cypher-builder";
import type { ConnectionField, Context } from "../../types";
export declare function createConnectionClause({ resolveTree, field, context, nodeVariable, returnVariable, }: {
    resolveTree: ResolveTree;
    field: ConnectionField;
    context: Context;
    nodeVariable: string;
    returnVariable: Cypher.Variable;
}): Cypher.Clause;
//# sourceMappingURL=create-connection-clause.d.ts.map
import type { ResolveTree } from "graphql-parse-resolve-info";
import type { Context, RelationField } from "../types";
import Cypher from "@neo4j/cypher-builder";
export default function createInterfaceProjectionAndParams({ resolveTree, field, context, nodeVariable, withVars, }: {
    resolveTree: ResolveTree;
    field: RelationField;
    context: Context;
    nodeVariable: string;
    withVars?: string[];
}): Cypher.Clause;
//# sourceMappingURL=create-interface-projection-and-params.d.ts.map
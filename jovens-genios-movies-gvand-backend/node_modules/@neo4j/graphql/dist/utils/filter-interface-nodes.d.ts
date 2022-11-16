import type { GraphQLWhereArg, Node } from "../types";
/**
 *
 * We want to project implementation if there is either:
 *   * No where input
 *   * There is at least one root filter in addition to _on
 *   * There is no _on filter
 *   * _on is the only filter and the current implementation can be found within it
 */
export declare function filterInterfaceNodes({ node, whereInput }: {
    node: Node;
    whereInput?: GraphQLWhereArg;
}): boolean;
//# sourceMappingURL=filter-interface-nodes.d.ts.map
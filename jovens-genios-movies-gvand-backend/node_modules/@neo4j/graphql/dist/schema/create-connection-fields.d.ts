import type { InterfaceTypeComposer, ObjectTypeComposer, SchemaComposer } from "graphql-compose";
import type { Node } from "../classes";
import { Relationship } from "../classes";
import type { ConnectionField } from "../types";
import type { ObjectFields } from "./get-obj-field-meta";
declare function createConnectionFields({ connectionFields, schemaComposer, composeNode, nodes, relationshipPropertyFields, }: {
    connectionFields: ConnectionField[];
    schemaComposer: SchemaComposer;
    composeNode: ObjectTypeComposer | InterfaceTypeComposer;
    nodes: Node[];
    relationshipPropertyFields: Map<string, ObjectFields>;
}): Relationship[];
export default createConnectionFields;
//# sourceMappingURL=create-connection-fields.d.ts.map
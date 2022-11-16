import type { SchemaComposer } from "graphql-compose";
import { InterfaceTypeComposer, ObjectTypeComposer } from "graphql-compose";
import { Node } from "../../classes";
import type { RelationField } from "../../types";
import type { ObjectFields } from "../get-obj-field-meta";
declare function createRelationshipFields({ relationshipFields, schemaComposer, composeNode, sourceName, nodes, relationshipPropertyFields, }: {
    relationshipFields: RelationField[];
    schemaComposer: SchemaComposer;
    composeNode: ObjectTypeComposer | InterfaceTypeComposer;
    sourceName: string;
    nodes: Node[];
    relationshipPropertyFields: Map<string, ObjectFields>;
}): void;
export default createRelationshipFields;
//# sourceMappingURL=index.d.ts.map
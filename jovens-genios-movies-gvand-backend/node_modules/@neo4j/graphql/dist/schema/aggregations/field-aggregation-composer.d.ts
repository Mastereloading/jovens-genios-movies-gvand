import type { ObjectTypeComposer, SchemaComposer } from "graphql-compose";
import type { ObjectFields } from "../get-obj-field-meta";
import type { Node } from "../../classes";
export declare enum FieldAggregationSchemaTypes {
    field = "AggregationSelection",
    node = "NodeAggregateSelection",
    edge = "EdgeAggregateSelection"
}
export declare class FieldAggregationComposer {
    private aggregationTypesMapper;
    private composer;
    constructor(composer: SchemaComposer);
    createAggregationTypeObject(baseTypeName: string, refNode: Node, relFields: ObjectFields | undefined): ObjectTypeComposer;
    private getAggregationFields;
    private createAggregationField;
}
//# sourceMappingURL=field-aggregation-composer.d.ts.map
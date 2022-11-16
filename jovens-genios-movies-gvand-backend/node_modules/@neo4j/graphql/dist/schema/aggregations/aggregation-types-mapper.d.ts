import type { ObjectTypeComposer, SchemaComposer } from "graphql-compose";
export declare class AggregationTypesMapper {
    private requiredAggregationSelectionTypes;
    private nullableAggregationSelectionTypes;
    constructor(composer: SchemaComposer);
    getAggregationType({ fieldName, nullable, }: {
        fieldName: string;
        nullable: boolean;
    }): ObjectTypeComposer<unknown, unknown> | undefined;
    private getOrCreateAggregationSelectionTypes;
    private createType;
    private makeNullable;
}
//# sourceMappingURL=aggregation-types-mapper.d.ts.map
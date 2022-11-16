import { ClauseMixin } from "./ClauseMixin";
import { With, WithProjection } from "../With";
export declare abstract class WithWith extends ClauseMixin {
    protected withStatement: With | undefined;
    with(...columns: ("*" | WithProjection)[]): With;
}
//# sourceMappingURL=WithWith.d.ts.map
import { BaseClass } from "../../../../../builds/class/base";
import { WOTBTankResolve } from '../interfaces/tank/tank-resolve';
declare class WOTBTank extends BaseClass {
    app: {
        id: string;
        lang?: string;
    };
    constructor(app_id: string, lang?: string);
    get(tankID: string | number): Promise<WOTBTankResolve | null>;
}
export { WOTBTank };

import { BaseClass } from "../../../../../builds/class/base";
import { WOTBTankResolve } from '../interfaces/tank/tank-resolve';
declare class WOTBTank extends BaseClass {
    app: {
        id: string;
        lang?: string;
    };
    constructor(app_id: string, lang?: string);
    /**
     * @description Get the tank by ID.
     * @param {string | number} tankID
     * @returns {Promise<WOTBTankResolve | null>}
     */
    get(tankID: string | number): Promise<WOTBTankResolve | null>;
}
export { WOTBTank };

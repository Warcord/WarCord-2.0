import { BaseClass } from "../../../../../builds/class/base";
import { WOTBTankResolve } from '../interfaces/tank/tank-resolve';
import { AllRealms } from "../../../../..";
declare class WOTBTank extends BaseClass {
    app: {
        id: string;
        realm?: AllRealms;
    };
    constructor(app_id: string, realm?: AllRealms);
    /**
     * @description Get the tank by ID.
     * @param {string | number} tankID
     * @returns {Promise<WOTBTankResolve | null>}
     */
    get(tankID: string | number): Promise<WOTBTankResolve | null>;
}
export { WOTBTank };

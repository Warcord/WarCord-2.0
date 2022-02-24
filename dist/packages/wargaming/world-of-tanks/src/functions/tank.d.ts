import { WOTTanksResolve } from '../interfaces/tank/tank-resolve';
import { BaseClass } from '../../../../../builds/class/base';
declare class WorldOfTanksTank extends BaseClass {
    app: {
        id: string;
        lang?: string;
    };
    constructor(app_id: string, lang?: string);
    /**
     * Get a tank by ID.
     * @param tankID ID of Tank.
     * @returns {Object} Object with Tank Data.
     */
    get(tankID: number | string): Promise<WOTTanksResolve | null>;
}
export { WorldOfTanksTank };

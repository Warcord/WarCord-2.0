import { WOTTanksResolve } from '../interfaces/tank/tank-resolve';
import { BaseClass } from '../../../../../builds/class/base';
declare class WorldOfTanksTank extends BaseClass {
    app: {
        id: string;
        lang?: string;
    };
    constructor(app_id: string, lang?: string);
    /**
     * @description Get a tank by ID.
     * @param {number | string} tankID ID of Tank.
     * @returns {Promise<WOTTanksResolve | null>} Object with Tank Data.
     * @example
     * ...
     * const tank = await warcord.wargaming.blitz.tank.get('ID of Tank')
     */
    get(tankID: number | string): Promise<WOTTanksResolve | null>;
}
export { WorldOfTanksTank };

import { WOTTanksResolve } from '../interfaces/tank/tank-resolve';
import { BaseClass } from '../../../../../builds/class/base';
declare class WorldOfTanksTank extends BaseClass {
    app: {
        id: string;
        lang?: string;
    };
    constructor(app_id: string, lang?: string);
    /**
     * @description Get all tanks of parameters.
     * @param {?string} type type of tank.
     * @param {?string} nation The nation of tank.
     * @param {?string} tier The tier of tank.
     * @param {?Object} options - The options object.
     * @property {?number} [options.limit=100] Limit of returned data.
     * @property {?string} [options.lang=en] The language of Texts.
     * @returns {Promise(<WOTTanksResolve | null>)} Returns all tanks finded.
     * @exemple
     * ...
     *
     * const getTank = await <Warcord>.wg.tank.find('heavyTank')
     */
    find(type?: string, nation?: string, tier?: string, options?: {
        limit?: number;
        lang?: string;
    }): Promise<WOTTanksResolve[] | null>;
    /**
     * @description Get a tank by ID.
     * @param {number | string} tankID ID of Tank.
     * @returns {Promise<WOTTanksResolve | null>} Object with Tank Data.
     * @example
     * ...
     * const tank = await .wg.blitz.tank.get('ID of Tank')
     */
    get(tankID: number | string): Promise<WOTTanksResolve | null>;
}
export { WorldOfTanksTank };

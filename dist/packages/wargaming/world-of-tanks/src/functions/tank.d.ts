import { WOTTanksResolve } from '../interfaces/tank/tank-resolve';
import { BaseClass } from '../../../../../builds/class/base';
import { AllRealms } from '../../../../..';
export declare type WOTLangs = "cs" | "de" | "en" | "es" | "fr" | "pl" | "ru" | "th" | "zh-tw" | "tr" | "zh-cn" | "ko" | "vi";
export declare type WOTNations = 'japan' | 'germany' | 'sweden' | 'poland' | 'czech' | 'usa' | 'france' | 'ussr' | 'uk' | 'china' | 'italy';
export declare type WOTTankTypes = "heavyTank" | "AT-SPG" | "mediumTank" | "lightTank" | "SPG";
declare class WOTTank extends BaseClass {
    app: {
        id: string;
        realm?: AllRealms;
    };
    constructor(app_id: string, realm?: AllRealms);
    /**
     * @description Get all tanks of parameters.
     * @param {?string} type type of tank.
     * @param {?WOTNations} nation The nation of tank.
     * @param {?string} tier The tier of tank.
     * @param {?Object} options - The options object.
     * @property {?number} [options.limit=100] Limit of returned data.
     * @property {?WOTLangs} [options.lang=en] The language of Texts.
     * @returns {Promise(<WOTTanksResolve | null>)} Returns all tanks finded.
     * @exemple
     * ...
     *
     * const getTank = await <Warcord>.wg.tank.find('heavyTank')
     */
    find(type?: WOTTankTypes, nation?: WOTNations, tier?: string | number, options?: {
        limit?: number;
        lang?: WOTLangs;
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
export { WOTTank };

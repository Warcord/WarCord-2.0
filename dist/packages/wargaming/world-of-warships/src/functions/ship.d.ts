import { BaseClass } from "../../../../../builds/class/base";
import { WOWSShipResolve } from '../interfaces/ships/resolve';
import { WOWSLongShipResolve } from "../interfaces/ships/resolve-long";
declare class WOWSShip extends BaseClass {
    app: {
        id: string;
        lang?: string;
    };
    constructor(app_id: string, lang?: string);
    /**
     * @description Get the ships status of an user.
     * @param {string} userID the ID of user.
     * @returns {Promise<WOWSShipResolve[] | null>}
     * @example
     * ...
     * const ships = await <Warcord>.wg.wows.ship.get('ID of User')
     */
    get(userID: string | number): Promise<WOWSShipResolve[] | null>;
    /**
     * @param {Object} ops
     * @property {?string} ops.nation The nation of ship.
     * @property {?string} ops.string The type of ship.
     * @property {?Object} ops.options Options of query.
     * @property {?number} [ops.options.limit=100] The limit of ships finded.
     * @property {?string} [ops.options.lang=en] The Language of Texts.
     * @returns {Promise<(WOWSShipResolve & WOWSLongShipResolve)[] | WOWSLongShipResolve[] | WOWSShipResolve[] | null>}
     * @example
     * ...
     * const getShip = await <WarCord>.wg.wows.ship.find({ nation: 'japan', options: { lang: 'pt-br', limit: 100 } })
     */
    find(ops: {
        nation?: string;
        type?: string;
        options?: {
            limit?: number;
            lang?: string;
        };
    }): Promise<(WOWSShipResolve & WOWSLongShipResolve)[] | WOWSLongShipResolve[] | WOWSShipResolve[] | null>;
}
export { WOWSShip };

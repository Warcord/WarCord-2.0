import { BaseClass } from "../../../../../builds/class/base";
import { WOWSShipResolve } from '../interfaces/ships/data';
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
     * const ships = await warcord.wargaming.wows.ship.get('ID of User')
     */
    get(userID: string | number): Promise<WOWSShipResolve[] | null>;
}
export { WOWSShip };

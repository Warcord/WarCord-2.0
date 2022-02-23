import { BaseClass } from "../../../../../builds/class/base";
import { WOWSShipResolve } from '../interfaces/ships/data';
declare class WOWSShip extends BaseClass {
    app: {
        id: string;
        lang?: string;
    };
    constructor(app_id: string, lang?: string);
    get(userID: string | number): Promise<WOWSShipResolve[] | null>;
}
export { WOWSShip };

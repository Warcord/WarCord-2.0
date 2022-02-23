import { BaseClass } from "../../../../../builds/class/base";
import { WOWSShipResolve } from '../interfaces/ships/data';
declare class WOWSShip extends BaseClass {
    app: {
        id: string;
    };
    constructor(app_id: string);
    get(tankID: string | number): Promise<WOWSShipResolve[] | null>;
}
export { WOWSShip };

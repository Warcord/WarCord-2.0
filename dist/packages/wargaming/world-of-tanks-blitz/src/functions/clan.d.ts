import { BaseClass } from "../../../../../builds/class/base";
import { WOTBClanResolve } from '../interfaces/clan/clan-resolve';
declare class WOTBClan extends BaseClass {
    app: {
        id: string;
    };
    constructor(app_id: string);
    get(clanID: string | number): Promise<WOTBClanResolve | null>;
    search(clanNameOrTag: string): Promise<any | null>;
}
export { WOTBClan };

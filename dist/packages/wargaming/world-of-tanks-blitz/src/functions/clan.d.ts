import { BaseClass } from "../../../../../builds/class/base";
import { WOTBClanResolve } from '../interfaces/clan/clan-resolve';
declare class WOTBClan extends BaseClass {
    app: {
        id: string;
        lang?: string;
    };
    constructor(app_id: string, lang?: string);
    get(clanID: string | number): Promise<WOTBClanResolve | null>;
    search(clanNameOrTag: string): Promise<any | null>;
}
export { WOTBClan };

import { BaseClass } from "../../../../../builds/class/base";
import { WOTBUserResolve } from '../interfaces/user/user-return';
import { UserSearchResolve } from '../../../build/interfaces/search-resolve';
import { WOTBTankTop } from '../interfaces/tank/tank-top';
declare class WOTBUser extends BaseClass {
    app: {
        id: string;
        lang?: string;
    };
    constructor(app_id: string, lang?: string);
    get(userID: string | number): Promise<WOTBUserResolve | null>;
    search(userName: string): Promise<UserSearchResolve | null>;
    topTanks(userID: string | number): Promise<WOTBTankTop | null>;
}
export { WOTBUser };

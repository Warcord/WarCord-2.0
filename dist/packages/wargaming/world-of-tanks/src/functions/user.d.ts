import { WOTUserResolve } from '../interfaces/user/user-return';
import { UserSearchResolve } from '../../../build/interfaces/search-resolve';
import { WOTTopTanksResolve } from '../interfaces/tank/top-tanks';
import { BaseClass } from '../../../../../builds/class/base';
declare class WorldOfTanksUser extends BaseClass {
    app: {
        id: string;
    };
    constructor(app_id: string);
    /**
     * Search users with respective name.
     * @param userName Name of user.
     * @returns {Object[]} Object Array with users data.
     */
    search(userName: string): Promise<UserSearchResolve[] | null>;
    /**
     * Get an user by ID.
     * @param userID ID of user.
     * @returns {Object} Object of user data.
     */
    get(userID: number | string): Promise<WOTUserResolve | null>;
    /**
     * Get the 5 best tanks of user.
     * @param userID ID of user.
     * @returns {Object[]} Object Array with tanks data.
     */
    topTanks(userID: number | string): Promise<WOTTopTanksResolve[] | null>;
}
export { WorldOfTanksUser };

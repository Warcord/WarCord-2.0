import { UserSearchResolve } from '../../../build/interfaces/search-resolve';
import { BaseClass } from '../../../../../builds/class/base';
import { WOWSUserResolve } from '../interfaces/user/result';
declare class WOWSUser extends BaseClass {
    app: {
        id: string;
        lang?: string;
    };
    constructor(app_id: string, lang?: string);
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
    get(userID: number | string): Promise<WOWSUserResolve | null>;
}
export { WOWSUser };

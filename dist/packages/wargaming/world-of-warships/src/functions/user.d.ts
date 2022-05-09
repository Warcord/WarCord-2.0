import { UserSearchResolve } from '../../../build/interfaces/search-resolve';
import { BaseClass } from '../../../../../builds/class/base';
import { WOWSUserResolve } from '../interfaces/user/result';
import { AllRealms } from '../../../../..';
declare class WOWSUser extends BaseClass {
    app: {
        id: string;
        realm?: AllRealms;
    };
    constructor(app_id: string, realm?: AllRealms);
    /**
     * @description Search users with respective name.
     * @param {string} userName Name of user.
     * @returns {Promise<UserSearchResolve[] | null>} Object Array with users data.
     */
    search(userName: string): Promise<UserSearchResolve[] | null>;
    /**
     * @description Get an user by ID.
     * @param {number | string} userID ID of user.
     * @returns {Promise<WOWSUserResolve | null>} Object of user data.
     */
    get(userID: number | string): Promise<WOWSUserResolve | null>;
}
export { WOWSUser };

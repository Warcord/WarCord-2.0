import { WOTUserResolve } from '../interfaces/user/user-return';
import { UserSearchResolve } from '../../../build/interfaces/search-resolve';
import { WOTTopTanksResolve } from '../interfaces/tank/top-tanks';
import { BaseClass } from '../../../../../builds/class/base';
import { AllRealms } from '../../../../..';
declare class WOTUser extends BaseClass {
    app: {
        id: string;
        realm?: AllRealms;
    };
    constructor(app_id: string, realm?: AllRealms);
    /**
     * @description Search users with respective name.
     * @param {string} userName Name of user.
     * @returns {Promise<UserSearchResolve[] | null>} Object Array with users data.
     * @example
     * ...
     * const searchingUser = await <Warcord>.wg.wot.user.search('Wargaming NickName of User')
     * //this returns an array of the users found.
     *
     * const user = await <Warcord>.wg.wot.user.get(searchingUser[0].id)
     * //this returns the first user data.
     */
    search(userName: string): Promise<UserSearchResolve[] | null>;
    /**
     * @description Get an user by ID.
     * @param {number | string} userID ID of user.
     * @returns {Promise<WOTUserResolve | null>} Object of user data.
     * @example
     * ...
     * const user = await <Warcord>.wg.wot.user.get('Wargaming ID of User')
     */
    get(userID: number | string): Promise<WOTUserResolve | null>;
    /**
     * @description Get the 5 best tanks of user.
     * @param {number | string} userID ID of user.
     * @returns {Promise<WOTTopTanksResolve[] | null>} Object Array with tanks data.
     * @example
     * ...
     * const topTanks = await <Warcord>.wg.wot.user.topTanks('Wargaming ID of User')
     */
    topTanks(userID: number | string): Promise<WOTTopTanksResolve[] | null>;
}
export { WOTUser };

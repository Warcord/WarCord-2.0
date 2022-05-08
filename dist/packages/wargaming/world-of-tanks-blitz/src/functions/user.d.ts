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
    /**
     * @description Get the user data by ID.
     * @param {string | number} userID
     * @returns {Promise<WOTBUserResolve | null>}
     * @example
     * ...
     * const user = await <Warcord>.wg.blitz.user.get('Wargaming ID of User')
     */
    get(userID: string | number): Promise<WOTBUserResolve | null>;
    /**
     * @description Get all users with the putted name.
     * @param {string} userName
     * @returns {Promise<UserSearchResolve | null>}
     * @example
     * ...
     * const searchingUser = await <Warcord>.wg.blitz.user.search('Wargaming NickName of User')
     * //this returns an array of the users found.
     *
     * const user = await <Warcord>.wg.blitz.user.get(searchingUser[0].id)
     * //this returns the first user data.
     */
    search(userName: string): Promise<UserSearchResolve | null>;
    /**
     * @description Get the best 5 tanks of an user.
     * @param {string | number} userID
     * @returns {Promise<WOTBTankTop | null>}
     * @example
     * ...
     * const tank = await <Warcord>.wg.blitz.user.topTanks('Wargaming ID of User')
     */
    topTanks(userID: string | number): Promise<WOTBTankTop | null>;
}
export { WOTBUser };

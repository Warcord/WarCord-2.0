import { BaseClass } from "../../../../../builds/class/base";
import { AcceptedLangs, SearchType } from "../interfaces/general/types";
export declare class WOTCUser extends BaseClass {
    private app;
    private errorController;
    constructor(app_id: string);
    /**
     *
     * @param {String} search Player name search string. Parameter "type" defines minimum length and type of search. Using the exact search type, you can enter several names, separated with commas. Maximum length: 24.
     * @param {Object} options Options Object
     * @property {AcceptedLangs | string} options.language Localization language.
     * @property {Number} [options.limit="None."] Number of returned entries (fewer can be returned, but not more than 100). If the limit sent exceeds 100, a limit of None is applied (by default).
     * @property {SearchType | string} [options.type="startswith"] Search type.
     * @returns
     */
    search(search: string, options?: {
        language?: AcceptedLangs;
        limit?: number;
        type?: SearchType;
    }): Promise<({
        nickname: string;
        account_id: number;
    }[] | null) | void>;
}

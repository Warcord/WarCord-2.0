"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WOWSUser = void 0;
const axios_1 = __importDefault(require("axios"));
const console_1 = require("console");
const base_1 = require("../../../../../builds/class/base");
class WOWSUser extends base_1.BaseClass {
    constructor(app_id, realm) {
        super(app_id);
        this.app = { id: app_id, realm: realm };
    }
    /**
     * @description Search users with respective name.
     * @param {string} userName Name of user.
     * @returns {Promise<UserSearchResolve[] | null>} Object Array with users data.
     */
    search(userName) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const searchUser = yield ((yield axios_1.default.get(`https://api.worldofwarships.${this.app.realm}/wows/account/list/?application_id=${(_a = this.app) === null || _a === void 0 ? void 0 : _a.id}&search=${userName}`)).data).data;
            if (!searchUser || searchUser.length <= 0)
                return null;
            return searchUser;
        });
    }
    /**
     * @description Get an user by ID.
     * @param {number | string} userID ID of user.
     * @returns {Promise<WOWSUserResolve | null>} Object of user data.
     */
    get(userID) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield (yield axios_1.default.get(`https://api.worldofwarships.${this.app.realm}/wows/account/info/?application_id=${(_a = this.app) === null || _a === void 0 ? void 0 : _a.id}&account_id=${userID}`)).data;
            if (data.status == "error")
                return data.error;
            data = data.data[userID];
            return data;
        });
    }
    /**
     * @description Get all achievements of an user.
     * @param account_id Player account ID.
     * @param {Object} options Options Object
     * @property {AcceptedLangs} options.language Localization language.
     * @returns {Promise<{ battle: any, progress: any } | null>} The achievements of user.
     */
    achievements(account_id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let option = '';
            if (options && options.language) {
                const acceptedLangs = [
                    "cs",
                    "de",
                    "en",
                    "es",
                    "fr",
                    "ja",
                    "pl",
                    "ru",
                    "th",
                    "zh-tw",
                    "tr",
                    "zh-cn",
                    "pt-br",
                    "es-mx" /** Español (México) */
                ];
                if (!acceptedLangs.includes(options.language)) {
                    (0, console_1.warn)("[WARCORD] The language is invalid. Using the default...");
                    options.language = "en";
                }
            }
            (options === null || options === void 0 ? void 0 : options.language) ? option += '&language=' + (options === null || options === void 0 ? void 0 : options.language) : '';
            const data = (yield axios_1.default.get(`https://api.worldofwarships.${this.app.realm}/wows/account/achievements/?application_id=${this.app.id}&account_id=${account_id}${option}`)).data;
            if (data.status == "error")
                return data.error;
            return data.data;
        });
    }
    /**
     * @description Get the ships status of an user.
     * @param {string} account_id the ID of user.
     * @returns {Promise<WOWSPediaResolve[] | null>}
     * @example
     * ...
     * const ships = await <Warcord>.wg.wows.user.shipStats('ID of User')
     */
    shipStats(account_id) {
        return __awaiter(this, void 0, void 0, function* () {
            var data = yield (yield axios_1.default.get(`https://api.worldofwarships.${this.app.realm}/wows/ships/stats/?application_id=${this.app.id}&account_id=${account_id}`)).data;
            if (data.status == "error")
                return data.error;
            return data.data[account_id];
        });
    }
}
exports.WOWSUser = WOWSUser;

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
exports.WOTUser = void 0;
const axios_1 = __importDefault(require("axios"));
const base_1 = require("../../../../../builds/class/base");
class WOTUser extends base_1.BaseClass {
    constructor(app_id, realm) {
        super(app_id);
        this.app = { id: app_id, realm: realm };
    }
    /**
     * @description Search users with respective name.
     * @param {string} userName Name of user.
     * @param {Object} options Options Object.
     * @property {AllRealms} options.realm The realm of query.
     * @returns {Promise<UserSearchResolve[] | null>} Object Array with users data.
     * @example
     * ...
     * const searchingUser = await <Warcord>.wg.wot.user.search('Wargaming NickName of User')
     * //this returns an array of the users found.
     *
     * const user = await <Warcord>.wg.wot.user.get(searchingUser[0].id)
     * //this returns the first user data.
     */
    search(userName, options) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const real = options && (options === null || options === void 0 ? void 0 : options.realm) ? options.realm : this.app.realm;
            const searchUser = yield ((yield axios_1.default.get(`https://api.worldoftanks.${real}/wot/account/list/?application_id=${(_a = this.app) === null || _a === void 0 ? void 0 : _a.id}&search=${userName}`)).data).data;
            if (!searchUser || searchUser.length <= 0)
                return null;
            return searchUser;
        });
    }
    /**
     * @description Get an user by ID.
     * @param {number | string} userID ID of user.
     * @param {Object} options Options Object.
     * @property {AllRealms} options.realm The realm of query.
     * @returns {Promise<WOTUserResolve | null>} Object of user data.
     * @example
     * ...
     * const user = await <Warcord>.wg.wot.user.get('Wargaming ID of User')
     */
    get(userID, options) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const real = options && (options === null || options === void 0 ? void 0 : options.realm) ? options.realm : this.app.realm;
            let data = yield (yield axios_1.default.get(`https://api.worldoftanks.${real}/wot/account/info/?application_id=${(_a = this.app) === null || _a === void 0 ? void 0 : _a.id}&account_id=${userID}`)).data;
            if (data.status == "error")
                return data.error;
            data = data.data[userID];
            return data;
        });
    }
    /**
     * @description Get the 5 best tanks of user.
     * @param {number | string} userID ID of user.
     * @param {?Object} options Options Object.
     * @property {?AllRealms} options.realm The realm of query.
     * @returns {Promise<WOTTopTanksResolve[] | null>} Object Array with tanks data.
     * @example
     * ...
     * const topTanks = await <Warcord>.wg.wot.user.topTanks('Wargaming ID of User')
     */
    topTanks(userID, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const real = options && (options === null || options === void 0 ? void 0 : options.realm) ? options.realm : this.app.realm;
            let data = yield (yield axios_1.default.get(`https://api.worldoftanks.${real}/wot/account/tanks/?application_id=${this.app.id}&account_id=${userID}`)).data;
            if (data.status == "error")
                return data.error;
            data = data.data[userID];
            data.length = 5;
            return data;
        });
    }
}
exports.WOTUser = WOTUser;

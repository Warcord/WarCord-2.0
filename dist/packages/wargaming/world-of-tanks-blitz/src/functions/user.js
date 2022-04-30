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
exports.WOTBUser = void 0;
const base_1 = require("../../../../../builds/class/base");
const axios_1 = __importDefault(require("axios"));
class WOTBUser extends base_1.BaseClass {
    constructor(app_id, lang) {
        super(app_id);
        this.app = { id: app_id, lang: lang };
    }
    /**
     * @description Get the user data by ID.
     * @param {string | number} userID
     * @returns {Promise<WOTBUserResolve | null>}
     * @example
     * ...
     * const user = await warcord.wargaming.blitz.user.get('Wargaming ID of User')
     */
    get(userID) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield (yield axios_1.default.get(`https://api.wotblitz.${this.app.lang}/wotb/account/info/?application_id=${this.app.id}&account_id=${userID}`)).data;
            if (data.status == "error")
                return null;
            data = data.data[userID];
            return {
                statistics: {
                    clan: data.statistics.clan,
                    all: data.statistics.all
                },
                account_id: data.account_id,
                created_at: data.created_at,
                last_battle_time: data.last_battle_time,
                nickname: data.nickname
            };
        });
    }
    /**
     * @description Get all users with the putted name.
     * @param {string} userName
     * @returns {Promise<UserSearchResolve | null>}
     * @example
     * ...
     * const searchingUser = await warcord.wargaming.blitz.user.search('Wargaming NickName of User')
     * //this returns an array of the users found.
     *
     * const user = await warcord.wargaming.blitz.user.get(searchingUser[0].id)
     * //this returns the first user data.
     */
    search(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield (yield axios_1.default.get(`https://api.wotblitz.${this.app.lang}/wotb/account/list/?application_id=${this.app.id}&search=${userName}`)).data;
            if (data.status == "error" || data.data.length <= 0)
                return null;
            return data.data;
        });
    }
    /**
     * @description Get the best 5 tanks of an user.
     * @param {string | number} userID
     * @returns {Promise<WOTBTankTop | null>}
     * @example
     * ...
     * const tank = await warcord.wargaming.blitz.user.topTanks('Wargaming ID of User')
     */
    topTanks(userID) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield (yield axios_1.default.get(`https://api.wotblitz.${this.app.lang}/wotb/tanks/stats/?application_id=${this.app.id}&account_id=${userID}`)).data;
            if (data.status == "error" || data.data.length <= 0)
                return null;
            data = data.data[userID];
            data.length = 5;
            return data;
        });
    }
}
exports.WOTBUser = WOTBUser;

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
    search(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield (yield axios_1.default.get(`https://api.wotblitz.${this.app.lang}/wotb/account/list/?application_id=${this.app.id}&search=${userName}`)).data;
            if (data.status == "error" || data.data.length <= 0)
                return null;
            return data.data;
        });
    }
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

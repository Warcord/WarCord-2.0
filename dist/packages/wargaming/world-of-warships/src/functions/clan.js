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
exports.WOWSClans = void 0;
const axios_1 = __importDefault(require("axios"));
const base_1 = require("../../../../../builds/class/base");
class WOWSClans extends base_1.BaseClass {
    constructor(app_id, lang) {
        super(app_id);
        this.app = { id: app_id, lang: lang };
    }
    /**
     * @description Get a clan in World of WarShips.
     * @param {number | string} clanID ID of clan.
     * @returns {Promise<WOWSClansResolve | null>} Clan data.
     */
    get(clanID) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield (yield axios_1.default.get(`https://api.worldofwarships.${this.app.lang}/wows/clans/info/?application_id=${this.app.id}&clan_id=${clanID}`)).data;
            if (data.status == "error")
                return null;
            data = data.data[clanID];
            return data;
        });
    }
    /**
     * @description Get a array with clans data of respective name.
     * @param {string} clanNameOrTag Name or Tag of clan.
     * @returns {Promise<WOWSClansSearchResolve | null>} Array with clan data.
     */
    search(clanNameOrTag) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield (yield axios_1.default.get(`https://api.worldofwarships.${this.app.lang}/wows/clans/list/?application_id=${this.app.id}&search=${clanNameOrTag}`)).data;
            if (data.status == "error")
                return null;
            data = data.data;
            if (!data || data.length <= 0)
                return null;
            return data;
        });
    }
}
exports.WOWSClans = WOWSClans;

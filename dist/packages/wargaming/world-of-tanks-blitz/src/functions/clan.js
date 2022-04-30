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
exports.WOTBClan = void 0;
const base_1 = require("../../../../../builds/class/base");
const axios_1 = __importDefault(require("axios"));
class WOTBClan extends base_1.BaseClass {
    constructor(app_id, lang) {
        super(app_id);
        this.app = { id: app_id, lang: lang };
    }
    /**
     * @description Get a clan in World of Tanks Blitz.
     * @param {string | number} clanID ID of clan.
     * @returns {Promise<WOTBClanResolve | null>} Clan data.
     * @example
     * ...
     * const clan = await warcord.wargaming.blitz.clan.get('ID of Clan')
     */
    get(clanID) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield (yield axios_1.default.get(`https://api.wotblitz.${this.app.lang}/wotb/clans/info/?application_id=${this.app.id}&clan_id=${clanID}`)).data;
            if (data.status == "error")
                return null;
            return data.data[clanID];
        });
    }
    /**
     * @description Get the ID's and Name of the putted name.
     * @param {string} clanNameOrTag ID or Tag of the clan.
     * @returns {Promise<any | null>} The clan ID's and Name.
     * @example
     * ...
     * const searchingClan = await warcord.wargaming.blitz.clan.search('Name or Tag of Clan')
     * //this returns an array of the clans found
     *
     * const clan = await warcord.wargaming.blitz.clan.get(searchingClan[0].clan_id)
     * //this returns the first clan data.
     */
    search(clanNameOrTag) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield (yield axios_1.default.get(`https://api.wotblitz.${this.app.lang}/wotb/clans/list/?application_id=${this.app.id}&search=${clanNameOrTag}`)).data;
            if (data.status == "error" || data.data.length <= 0)
                return null;
            return data.data;
        });
    }
}
exports.WOTBClan = WOTBClan;

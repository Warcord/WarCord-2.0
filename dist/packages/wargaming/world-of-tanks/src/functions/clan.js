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
exports.WOTClan = void 0;
const axios_1 = __importDefault(require("axios"));
const base_1 = require("../../../../../builds/class/base");
class WOTClan extends base_1.BaseClass {
    constructor(app_id, realm) {
        super(app_id);
        this.app = { id: app_id, realm: realm };
    }
    /**
     * @description Get a clan in World of Tanks.
     * @param {string} clanID ID of clan.
     * @returns {Promise<WOTClanResolve | null>} Clan data.
     * @example
     * ...
     * const clan = await <Warcord>.wg.wot.clan.get('ID of Clan')
     */
    get(clanID) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield (yield axios_1.default.get(`https://api.worldoftanks.${this.app.realm}/wot/clans/info/?application_id=${this.app.id}&clan_id=${clanID}`)).data;
            if (data.status == "error")
                return null;
            data = data.data[clanID];
            return {
                leader_id: data.leader_id,
                color: data.color,
                updated_at: data.updated_at,
                tag: data.tag,
                members_count: data.members_count,
                description_html: data.description_html,
                accepts_join_requests: data.accepts_join_requests,
                leader_name: data.leader_name,
                emblems: data.emblems,
                clan_id: data.clan_id,
                renamed_at: data.renamed_at,
                old_tag: data.old_tag,
                description: data.description,
                members: data.members,
                old_name: data.old_name,
                is_clan_disbanded: data.is_clan_disbanded,
                motto: data.motto,
                name: data.name,
                creator_name: data.creator_name,
                created_at: data.created_at,
                creator_id: data.creator_id
            };
        });
    }
    /**
     * @description Get a array with clans data of respective name.
     * @param {string} clanNameOrTag Name or Tag of clan.
     * @returns {Promise<WOTClanSearchResolve[] | null>} Array with clan data.
     * @example
     * ...
     * const searchingClan = await <Warcord>.wg.wot.clan.search('Name or Tag of Clan')
     * //this returns an array of the clans found.
     *
     * const clan = await <Warcord>.wg.wot.clan.get(searchingClan[0].clan_id)
     * //this returns the first clan data.
     */
    search(clanNameOrTag) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield (yield axios_1.default.get(`https://api.worldoftanks.${this.app.realm}/wot/clans/list/?application_id=${this.app.id}&search=${clanNameOrTag}`)).data;
            if (data.status == "error")
                return null;
            data = data.data;
            if (!data || data.length <= 0)
                return null;
            return data;
        });
    }
    /**
     * @description Get the rating of an Clan.
     * @param {string | number} clanID ID of Clan.
     * @returns {Object} Clan rating.
     * @example
     * ...
     * const ratingOfClan = await <Warcord>.wg.wot.clan.rating('ID of Clan')
     */
    rating(clanID) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield (yield axios_1.default.get(`https://api.worldoftanks.${this.app.realm}/wot/clanratings/clans/?application_id=${this.app.id}&clan_id=${clanID}`)).data;
            if (data.status == "error")
                return null;
            data = data.data[clanID];
            return data;
        });
    }
    /**
     * @description Get the clan member data.
     * @param {string | number} memberID ID of Clan Member.
     * @returns {Promise<WOTMember | null>} Clan Member data.
     * @example
     * const memberOfClan = await <Warcord>.wg.wot.clan.member('ID of Member')
     */
    member(memberID) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield (yield axios_1.default.get(`https://api.worldoftanks.${this.app.realm}/wot/clans/accountinfo/?application_id=${this.app.id}&account_id=${memberID}`)).data;
            if (data.status == "error")
                return null;
            return data.data[memberID];
        });
    }
}
exports.WOTClan = WOTClan;

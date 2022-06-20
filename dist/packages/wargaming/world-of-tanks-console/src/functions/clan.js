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
exports.WOTCClan = void 0;
const base_1 = require("../../../../../builds/class/base");
const axios_1 = __importDefault(require("axios"));
const error_1 = require("../../../../warcord/functions/error");
class WOTCClan extends base_1.BaseClass {
    constructor(app_id) {
        super(app_id);
        this.app = { id: app_id };
        this.errorController = new error_1.WarCordError();
    }
    /**
     * @description Method returns partial list of clans in alphabetical order by clan name or tag.
     * @param {Object} options Options Object
     * @property {AcceptedLangs | string} options.language Localization language.
     * @property {number} [options.limit=100] Number of returned entries (fewer can be returned, but not more than 100). If the limit sent exceeds 100, a limit of 100 is applied (by default).
     * @property {string} options.search Part of name or tag for clan search. Minimum 2 characters
     * @returns {Promise<WOTCClanSearch[] | void>} Array of clans.
     */
    search(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let option = '';
            if (options) {
                let { language, limit, search } = options;
                const acceptedLangs = ["en", "ru", "pl", "de", "fr", "es", "tr"];
                if (language && !acceptedLangs.includes(language)) {
                    this.errorController.createWarn("The language is invalid. Using default...", "WARCORD");
                    language = "en";
                }
                if (limit && (limit > 100 || limit < 1)) {
                    this.errorController.createWarn("The limit is invalid. Using default...", "WARCORD");
                    limit = 100;
                }
                if (search && search.length < 2) {
                    return this.errorController.createError("The search length is invalid. The minimum is 2 characters.", "WARCORD");
                }
                language ? option += '&language=' + language : '';
                limit ? option += '&limit=' + limit : '';
                search ? option += '&search=' + search : '';
            }
            const data = (yield axios_1.default.get(`https://api-console.worldoftanks.com/wotx/clans/list/?application_id=${this.app.id}${option}`)).data;
            if (data.status == "error")
                return this.errorController.createError(data.error, "API");
            return data.data;
        });
    }
    /**
     * @description Method returns detailed clan information.
     * @param clan_id Clan ID
     * @param {Object} options Options Object
     * @property {AcceptedLangs | string} options.language Localization language.
     * @property {boolean} options.members Return with the members info.
     * @returns {Promise<WOTCClanGet | void>} Clan data.
     */
    get(clan_id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let option = '';
            if (options) {
                let { members, language } = options;
                const acceptedLangs = ["en", "ru", "pl", "de", "fr", "es", "tr"];
                if (language && !acceptedLangs.includes(language)) {
                    this.errorController.createWarn("The language is invalid. Using default...", "WARCORD");
                    language = "en";
                }
                language ? option += '&language=' + language : '';
                members ? option += '&extra=members' : '';
            }
            if (clan_id.length > 100 || clan_id.length < 1)
                return this.errorController.createError("Invalid clan_id", "WARCORD");
            const data = (yield axios_1.default.get(`https://api-console.worldoftanks.com/wotx/clans/info/?application_id=${this.app.id}&clan_id=${clan_id}${option}`)).data;
            if (data.status == "error")
                return this.errorController.createError(data.error, "API");
            return data.data;
        });
    }
}
exports.WOTCClan = WOTCClan;

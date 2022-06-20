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
exports.WOTBTournaments = void 0;
const axios_1 = __importDefault(require("axios"));
const base_1 = require("../../../../../builds/class/base");
const console_1 = require("console");
class WOTBTournaments extends base_1.BaseClass {
    constructor(app_id, realm) {
        super(app_id);
        this.teams = {
            /**
             * @description Get the teams of an tournament.
             * @param tourID ID of Tournament.
             * @param {Object} options The options Object.
             * @property {string} options.account_id ID of the account that belongs to the team.
             * @property {string} options.clan_id ID of the clan that owns the team.
             * @property {AcceptedLanguagesWOTBTournaments | string} [options.language="en"] Localization language.
             * @property {number} [options.limit=10] Number of returned entries. Min value is 1. Maximum value: 100.
             * @property {string} options.search First letters in team name for search. Minimum length: 2 characters. Maximum length: 50 characters.
             * @property {StatusTeams | StatusTeams[]} options.status Team status.
             * @property {number | number[]} options.team Team ID. Maximum limit: 25.
             * @returns {Promise<WOTBGetTeam | null>} The team data.
             */
            get: (tourID, options) => __awaiter(this, void 0, void 0, function* () {
                let option = '';
                if (options) {
                    let { account_id, clan_id, language, limit, search, status, team } = options;
                    if (limit && !(limit > 100 || limit < 1)) {
                        (0, console_1.warn)("[WARCORD] The minimum or maximum of the limit is invalid. Using the default...");
                        limit = 100;
                    }
                    const langs = ['en', 'es', 'pt'];
                    if (language && !langs.includes(language)) {
                        (0, console_1.warn)("[WARCORD] The language is invalid. Using the default...");
                        language = "en";
                    }
                    if (search && !(search.length < 2 || search.length > 50)) {
                        throw Error("[WARCORD] The maximum of an search query is 50 characters and the minimum is 2 characters.");
                    }
                    account_id ? option += `&account_id=${account_id}` : '';
                    clan_id ? option += `&clan_id=${clan_id}` : '';
                    language ? option += `&language=${language}` : '';
                    limit ? option += `&limit=${limit}` : '';
                    search ? option += `&search=${search}` : '';
                    status ? option += `&status=${status}` : '';
                    team ? option += `&team=${team}` : '';
                }
                const data = (yield axios_1.default.get(`https://api.wotblitz.${this.app.realm}/wotb/tournaments/teams/?application_id=${this.app.id}&tournament_id=${tourID}${option}`)).data;
                if (data.status == "error")
                    return data.error;
                return data.data;
            })
        };
        this.app = { id: app_id, realm: realm };
    }
    /**
     * @description Search tournaments in API.
     * @param {Object} options Options Object
     * @property {AcceptedLanguagesWOTBTournaments | string} [options.language="en"] Localization language.
     * @property {number} [options.limit=10] Number of returned entries. Min value is 1. Maximum value: 25.
     * @property {string} options.search First letters in tournament name for search. Minimum length: 2 characters. Maximum length: 50 characters.
     * @property {StautsTournaments | StautsTournaments[]} options.status Tournament status.
     * @returns {Promise<WOTBTournamentsSearch[] | null>} The search data.
     */
    find(options) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let option = '';
            if (options && options.limit) {
                if (options.limit > 25 || options.limit <= 0) {
                    options.limit = 25;
                }
                option += '&limit=' + options.limit;
            }
            const langs = ['en', 'es', 'pt'];
            if (options && options.lang) {
                if (!langs.includes(options.lang)) {
                    options.lang = "en";
                    (0, console_1.warn)("[WARCORD WARNING] This language is not supported. Using the default language...");
                }
                option += '&language=' + options.lang;
            }
            (options === null || options === void 0 ? void 0 : options.search) ? option += '&search=' + (options === null || options === void 0 ? void 0 : options.search) : '';
            if ((options === null || options === void 0 ? void 0 : options.status) && ((_a = options === null || options === void 0 ? void 0 : options.status) === null || _a === void 0 ? void 0 : _a.length) > 1) {
                option += '&status=' + options.status.join('%2C+');
            }
            else {
                (options === null || options === void 0 ? void 0 : options.status) ? option += '&status=' + (options === null || options === void 0 ? void 0 : options.status) : '';
            }
            var data = yield (yield axios_1.default.get(`https://api.wotblitz.${this.app.realm}/wotb/tournaments/list/?application_id=${this.app.id}${option}`)).data;
            if (data.status == "error")
                return data.error;
            return data.data;
        });
    }
    /**
     * @description Get a tournamente by ID.
     * @param {string} tourID Tournament ID that can be retrieved from the {@link find} method.
     * @param {Object} options The Options Object
     * @property {AcceptedLanguagesWOTBTournaments | string} options.language Localization language.
     * @returns {Promise<WOTBTournamentsGet | null>} The tournament data.
     */
    get(tourID, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let option = '';
            if (options && (options === null || options === void 0 ? void 0 : options.language)) {
                option += `&language=${options.language}`;
            }
            const data = yield (yield axios_1.default.get(`https://api.wotblitz.${this.app.realm}/wotb/tournaments/info/?application_id=${this.app.id}&tournament_id=${tourID}${option}`)).data;
            if (data.status == "error")
                return data.error;
            return data.data;
        });
    }
    /**
     * @description Used to get the tournament result.
     * @param tourID Tournament ID that can be retrieved from the {@link find} method.
     * @param {Object} options Options Object
     * @property {AcceptedLanguagesWOTBTournaments} language Localization language.
     * @property {number} [limit=10] Number of returned entries.
     * @property {string} team_id Team ID.
     * @returns {Promise<WOTBTourResult | null>} Tournament Result.
     */
    getResult(tourID, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let option = '';
            if (options) {
                let { language, limit, team_id } = options;
                const acceptedLangs = ['en', 'es', 'pt'];
                if (language && !acceptedLangs.includes(language)) {
                    (0, console_1.warn)("[WARCORD] The language is invalid. Using the default...");
                    language = "en";
                }
                if (limit && (limit < 1 || limit > 25)) {
                    (0, console_1.warn)("[WARCORD] The minimum or maximum of the limit is invalid. Using the default...");
                    limit = 10;
                }
                if (team_id) {
                    team_id.length > 1 ? option += '&team_id=' + team_id.join('+') : option += '&team_id=' + team_id;
                }
                language ? option += '&language=' + language : '';
                limit ? option += '&limit=' + limit : '';
            }
            const data = (yield axios_1.default.get(`https://api.wotblitz.${this.app.realm}/wotb/tournaments/standings/?application_id=${this.app.id}&tournament_id=${tourID}${option}`)).data;
            if (data.status == "error")
                return data.error;
            return data.data;
        });
    }
}
exports.WOTBTournaments = WOTBTournaments;

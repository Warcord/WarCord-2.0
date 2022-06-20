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
exports.WOTCUser = void 0;
const base_1 = require("../../../../../builds/class/base");
const axios_1 = __importDefault(require("axios"));
const error_1 = require("../../../../warcord/functions/error");
class WOTCUser extends base_1.BaseClass {
    constructor(app_id) {
        super(app_id);
        this.app = { id: app_id };
        this.errorController = new error_1.WarCordError();
    }
    /**
     *
     * @param {String} search Player name search string. Parameter "type" defines minimum length and type of search. Using the exact search type, you can enter several names, separated with commas. Maximum length: 24.
     * @param {Object} options Options Object
     * @property {AcceptedLangs | string} options.language Localization language.
     * @property {Number} [options.limit="None."] Number of returned entries (fewer can be returned, but not more than 100). If the limit sent exceeds 100, a limit of None is applied (by default).
     * @property {SearchType | string} [options.type="startswith"] Search type.
     * @returns
     */
    search(search, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (search.length > 24)
                return this.errorController.createError("The maximum of a search length is 24.", "WARCORD");
            let option = '';
            if (options) {
                let { language, limit, type } = options;
                const acceptedLangs = ["en", "ru", "pl", "de", "fr", "es", "tr"];
                if (language && !acceptedLangs.includes(language)) {
                    this.errorController.createWarn("The language is invalid. Using the default...", "WARCORD");
                    language = "en";
                }
                if (limit && (limit > 100 || limit < 1)) {
                    this.errorController.createWarn("The limit is invalid. Using none...", "WARCORD");
                    limit = undefined;
                }
                if (type && type.includes("startswith") && type.includes("exact")) {
                    return this.errorController.createError("Only one type is valid.", "WARCORD");
                }
                language ? option += '&language=' + language : '';
                limit ? option += '&limit=' + limit : '';
                type ? option += '&type=' + type : '';
            }
            const data = (yield axios_1.default.get(`https://api-console.worldoftanks.com/wotx/account/list/?application_id=${this.app.id}&search=${search}${option}`)).data;
            if (data.status == "error")
                return this.errorController.createError(`${data.error}`, "API");
            return data.data;
        });
    }
}
exports.WOTCUser = WOTCUser;

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
exports.WOTCTankopedia = void 0;
const base_1 = require("../../../../../builds/class/base");
const axios_1 = __importDefault(require("axios"));
const error_1 = require("../../../../warcord/functions/error");
class WOTCTankopedia extends base_1.BaseClass {
    constructor(app_id) {
        super(app_id);
        this.app = { id: app_id };
        this.errorController = new error_1.WarCordError();
    }
    /**
     * @description Method returns list of available vehicles.
     * @param options Options Object
     * @property {?AcceptedLangs | AcceptedLangs[]} options.language Localization language.
     * @property {?AcceptedNations | AcceptedNations[]} options.nation Nation.
     * @property {?number | number[]} options.tank_id Vehicle ID.
     * @property {?number | number[]} options.tier Tier.
     * @returns {Promise<WOTCTank[] | void>} An array with search data.
     */
    search(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let option = '';
            if (options) {
                let { language, nation, tank_id, tier } = options;
                const acceptedLangs = ["en", "ru", "pl", "de", "fr", "es", "tr"];
                if (language && !acceptedLangs.includes(language)) {
                    this.errorController.createWarn("The language is invalid. Using default...", "WARCORD");
                    language = "en";
                }
                if (nation && nation.length > 100)
                    nation = undefined;
                if (tank_id && tank_id > 100)
                    tank_id = 100;
                if (tier && tier > 100)
                    tier = 100;
                if (tier && typeof tier == "object" && tier.length > 1) {
                    option += '&tier=' + tier.join('%2C');
                }
                else {
                    tier ? option += '&tier=' + tier : '';
                }
                if (nation && typeof nation == "object" && nation.length > 1) {
                    option += '&nation=' + nation.join('%2C');
                }
                else {
                    nation ? option += '&nation=' + nation : '';
                }
                if (tank_id && typeof tank_id == "object" && tank_id.length > 1) {
                    option += '&tank_id=' + tank_id.join('%2C');
                }
                else {
                    tank_id ? option += '&tank_id=' + tank_id : '';
                }
                language ? option += '&language=' + language : '';
                tier ? option += '&tier=' + tier : '';
                nation ? option += '&nation=' + nation : '';
                tank_id ? option += '&tank_id=' + tank_id : '';
            }
            const data = (yield axios_1.default.get(`https://api-console.worldoftanks.com/wotx/encyclopedia/vehicles/?application_id=${this.app.id}${option}`)).data;
            if (data.status == "error")
                return this.errorController.createError(data.error, "API");
            return data.data;
        });
    }
}
exports.WOTCTankopedia = WOTCTankopedia;

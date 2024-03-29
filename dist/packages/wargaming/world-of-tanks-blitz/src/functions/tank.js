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
exports.WOTBTankopedia = void 0;
const base_1 = require("../../../../../builds/class/base");
const axios_1 = __importDefault(require("axios"));
class WOTBTankopedia extends base_1.BaseClass {
    constructor(app_id, realm) {
        super(app_id);
        this.app = { id: app_id, realm: realm };
    }
    /**
     * @description Get the tank by ID.
     * @param {string | number} tankID
     * @returns {Promise<WOTBTankResolve | null>}
     */
    get(tankID) {
        return __awaiter(this, void 0, void 0, function* () {
            var data = yield (yield axios_1.default.get(`https://api.wotblitz.${this.app.realm}/wotb/encyclopedia/vehicles/?application_id=${this.app.id}&tank_id=${tankID}`)).data;
            if (data.status == "error")
                return data.error;
            return data.data[tankID];
        });
    }
}
exports.WOTBTankopedia = WOTBTankopedia;

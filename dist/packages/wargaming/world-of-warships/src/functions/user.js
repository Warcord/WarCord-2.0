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
exports.WorldOfWarShipsUser = void 0;
const axios_1 = __importDefault(require("axios"));
const base_1 = require("../../../../../builds/class/base");
class WorldOfWarShipsUser extends base_1.BaseClass {
    constructor(app_id) {
        super(app_id);
        this.app = { id: app_id };
    }
    /**
     * Search users with respective name.
     * @param userName Name of user.
     * @returns {Object[]} Object Array with users data.
     */
    search(userName) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const searchUser = yield ((yield axios_1.default.get(`https://api.worldofwarships.com/wows/account/list/?application_id=${(_a = this.app) === null || _a === void 0 ? void 0 : _a.id}&search=${userName}`)).data).data;
            if (!searchUser || searchUser.length <= 0)
                return null;
            return searchUser;
        });
    }
    /**
     * Get an user by ID.
     * @param userID ID of user.
     * @returns {Object} Object of user data.
     */
    get(userID) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield (yield axios_1.default.get(`https://api.worldofwarships.com/wows/account/info/?application_id=${(_a = this.app) === null || _a === void 0 ? void 0 : _a.id}&account_id=${userID}`)).data;
            if (data.status == "error")
                return null;
            data = data.data[userID];
            return data;
        });
    }
}
exports.WorldOfWarShipsUser = WorldOfWarShipsUser;

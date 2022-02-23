"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarCord = void 0;
const base_1 = require("./packages/wargaming/build/class/base");
const base_2 = require("./builds/class/base");
class WarCord extends base_2.BaseClass {
    constructor(app_id) {
        super(app_id);
        this.app = { id: this.checker(app_id) };
        this.wargaming = new base_1.WargamingBase(app_id);
    }
    checker(id) {
        if (!id || id.length <= 0) {
            console.log('[WarCord] Your API ID is empty. (using Wargaming API)');
            return '';
        }
        else {
            return id;
        }
    }
}
exports.WarCord = WarCord;

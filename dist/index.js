"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarCord = void 0;
const base_1 = require("./packages/wargaming/build/class/base");
const base_2 = require("./builds/class/base");
const console_1 = require("console");
class WarCord extends base_2.BaseClass {
    /**
     * @param {string} app_id The ID of your WarGaming App.
     * @param {string} [realm=na] The followed types are an option: .
     */
    constructor(app_id, realm) {
        super(app_id);
        this.app = { id: this.idChecker(app_id), realm: this.realmChecker(realm) };
        this.wg = new base_1.WargamingBase(this.idChecker(app_id), this.realmChecker(realm));
    }
    idChecker(id) {
        if (!id || id.length <= 0) {
            (0, console_1.warn)('[WarCord] Your API ID is empty. (using Wargaming API)');
            return '';
        }
        else {
            return id;
        }
    }
    realmChecker(realm) {
        if (!realm)
            return 'com';
        const langs = [
            'na',
            'eu',
            'ru',
            'asia'
        ];
        if (!langs.includes(realm)) {
            (0, console_1.warn)('[WarCord] Your API Lang is not valid. (using Wargaming API)');
            return 'com';
        }
        if (realm == 'na') {
            realm = 'com';
        }
        return realm;
    }
}
exports.WarCord = WarCord;

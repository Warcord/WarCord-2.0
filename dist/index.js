"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarCord = void 0;
const base_1 = require("./packages/wargaming/build/class/base");
const base_2 = require("./builds/class/base");
class WarCord extends base_2.BaseClass {
    /**
     * @param {string} app_id The ID of your WarGaming App.
     * @param {string} lang The followed types are an option: 'na' | 'eu' |'ru' | 'asia', the default is "na".
     */
    constructor(app_id, lang) {
        super(app_id);
        this.app = { id: this.idChecker(app_id), lang: this.langChecker(lang) };
        this.wargaming = new base_1.WargamingBase(this.idChecker(app_id), this.langChecker(lang));
    }
    idChecker(id) {
        if (!id || id.length <= 0) {
            console.log('[WarCord] Your API ID is empty. (using Wargaming API)');
            return '';
        }
        else {
            return id;
        }
    }
    langChecker(lang) {
        if (!lang)
            return 'com';
        const langs = [
            'na',
            'eu',
            'ru',
            'asia'
        ];
        if (!langs.includes(lang)) {
            console.log('[WarCord] Your API Lang is not valid. (using Wargaming API)');
            return 'com';
        }
        if (lang == 'na') {
            lang = 'com';
        }
        return lang;
    }
}
exports.WarCord = WarCord;

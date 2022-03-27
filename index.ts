import { WargamingBase } from './packages/wargaming/build/class/base'
import { WOTClanResolve } from './packages/wargaming/world-of-tanks/src/interfaces/clan/clan-resolve'
import { WOTClanSearchResolve } from './packages/wargaming/world-of-tanks/src/interfaces/clan/search-resolve'
import { WOTTanksResolve } from './packages/wargaming/world-of-tanks/src/interfaces/tank/tank-resolve'
import { WOTTopTanksResolve } from './packages/wargaming/world-of-tanks/src/interfaces/tank/top-tanks'
import { WOTUserResolve } from './packages/wargaming/world-of-tanks/src/interfaces/user/user-return'
import { UserSearchResolve } from './packages/wargaming/build/interfaces/search-resolve'
import { BaseClass } from './builds/class/base'

class WarCord extends BaseClass {

    app: {
        id: string,
        lang?: string
    }
    wargaming: WargamingBase

    constructor(app_id: string, lang?: string) {
        super(app_id)
        this.app = { id: this.idChecker(app_id), lang: this.langChecker(lang) }
        this.wargaming = new WargamingBase(this.idChecker(app_id), this.langChecker(lang))
    }

    private idChecker(id: string): string {
        if (!id || id.length <= 0) {
            console.log('[WarCord] Your API ID is empty. (using Wargaming API)')
            return ''
        } else {
            return id
        }
    }

    private langChecker(lang: string | undefined): string {
        if (!lang) return 'com'
        const langs = [
            'na',
            'eu',
            'ru',
            'asia'
        ]

        if (!langs.includes(lang)) { console.log('[WarCord] Your API Lang is not valid. (using Wargaming API)'); return 'com' }
        if (lang == 'na') { lang = 'com' }

        return lang
    }
}

//Main class export
export { WarCord }

//Interfaces export
export { WOTClanResolve, WOTClanSearchResolve, WOTTanksResolve, WOTTopTanksResolve, WOTUserResolve, UserSearchResolve }
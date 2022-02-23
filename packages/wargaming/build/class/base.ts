import { BaseClass } from '../../../../builds/class/base'
import { WargamingApp } from '../interfaces/app'

import { WorldOfTanksUser } from '../../world-of-tanks/src/functions/user'
import { WorldOfTanksTank } from '../../world-of-tanks/src/functions/tank'
import { WorldOfTanksClan } from '../../world-of-tanks/src/functions/clan'

import { WOTBUser } from '../../world-of-tanks-blitz/src/functions/user'
import { WOTBTank } from '../../world-of-tanks-blitz/src/functions/tank'
import { WOTBClan } from '../../world-of-tanks-blitz/src/functions/clan'

import { WOWSUser } from '../../world-of-warships/src/functions/user'
import { WOWSShip } from '../../world-of-warships/src/functions/ship'
import { WOWSClans } from '../../world-of-warships/src/functions/clan'
class WargamingBase extends BaseClass implements WargamingApp {

    app: {
        id: string,
        lang?: string
    }
    wot: {
        user: WorldOfTanksUser,
        tank: WorldOfTanksTank,
        clan: WorldOfTanksClan
    }
    blitz: {
        user: WOTBUser,
        tank: WOTBTank,
        clan: WOTBClan
    }
    wows: {
        user: WOWSUser,
        ship: WOWSShip,
        clan: WOWSClans
    }

    constructor(app_id: string, lang?: string) {
        super(app_id)
        this.app = { id: app_id, lang: lang }
        this.wot = {
            user: new WorldOfTanksUser(app_id, lang),
            tank: new WorldOfTanksTank(app_id, lang),
            clan: new WorldOfTanksClan(app_id, lang)
        }
        this.blitz = {
            user: new WOTBUser(app_id, lang),
            tank: new WOTBTank(app_id, lang),
            clan: new WOTBClan(app_id, lang)
        }
        this.wows = {
            user: new WOWSUser(app_id, lang),
            ship: new WOWSShip(app_id, lang),
            clan: new WOWSClans(app_id, lang)
        }
    }
}

export { WargamingBase }
import { WorldOfTanksUser } from '../../world-of-tanks/src/functions/user'
import { WargamingApp } from '../interfaces/app'
import { WorldOfTanksTank } from '../../world-of-tanks/src/functions/tank'
import { WorldOfTanksClan } from '../../world-of-tanks/src/functions/clan'
import { BaseClass } from '../../../../builds/class/base'
import { WOTBUser } from '../../world-of-tanks-blitz/src/functions/user'
import { WOTBTank } from '../../world-of-tanks-blitz/src/functions/tank'
import { WOTBClan } from '../../world-of-tanks-blitz/src/functions/clan'

class WargamingBase extends BaseClass implements WargamingApp {

    app: { id: string }
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

    constructor(app_id: string) {
        super(app_id)
        this.app = { id: app_id }
        this.wot = {
            user: new WorldOfTanksUser(app_id),
            tank: new WorldOfTanksTank(app_id),
            clan: new WorldOfTanksClan(app_id)
        }
        this.blitz = {
            user: new WOTBUser(app_id),
            tank: new WOTBTank(app_id),
            clan: new WOTBClan(app_id)
        }
    }
}

export { WargamingBase }
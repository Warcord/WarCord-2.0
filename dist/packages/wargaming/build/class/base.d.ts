import { BaseClass } from '../../../../builds/class/base';
import { WargamingApp } from '../interfaces/app';
import { WorldOfTanksUser } from '../../world-of-tanks/src/functions/user';
import { WorldOfTanksTank } from '../../world-of-tanks/src/functions/tank';
import { WorldOfTanksClan } from '../../world-of-tanks/src/functions/clan';
import { WOTBUser } from '../../world-of-tanks-blitz/src/functions/user';
import { WOTBTank } from '../../world-of-tanks-blitz/src/functions/tank';
import { WOTBClan } from '../../world-of-tanks-blitz/src/functions/clan';
import { WOWSUser } from '../../world-of-warships/src/functions/user';
import { WOWSShip } from '../../world-of-warships/src/functions/ship';
declare class WargamingBase extends BaseClass implements WargamingApp {
    app: {
        id: string;
        lang?: string;
    };
    wot: {
        user: WorldOfTanksUser;
        tank: WorldOfTanksTank;
        clan: WorldOfTanksClan;
    };
    blitz: {
        user: WOTBUser;
        tank: WOTBTank;
        clan: WOTBClan;
    };
    wows: {
        user: WOWSUser;
        ship: WOWSShip;
    };
    constructor(app_id: string, lang?: string);
}
export { WargamingBase };

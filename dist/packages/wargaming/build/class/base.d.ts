import { WorldOfTanksUser } from '../../world-of-tanks/src/functions/user';
import { WargamingApp } from '../interfaces/app';
import { WorldOfTanksTank } from '../../world-of-tanks/src/functions/tank';
import { WorldOfTanksClan } from '../../world-of-tanks/src/functions/clan';
import { BaseClass } from '../../../../builds/class/base';
import { WOTBUser } from '../../world-of-tanks-blitz/src/functions/user';
import { WOTBTank } from '../../world-of-tanks-blitz/src/functions/tank';
import { WOTBClan } from '../../world-of-tanks-blitz/src/functions/clan';
declare class WargamingBase extends BaseClass implements WargamingApp {
    app: {
        id: string;
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
    constructor(app_id: string);
}
export { WargamingBase };

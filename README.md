# WarCord

This is a package to simplify use of Wargaming API.

[![BUILD](https://img.shields.io/github/workflow/status/Warcord/WarCord-Lib/CodeQL)](https://github.com/Warcord/WarCord-Lib/actions/workflows/codeql-analysis.yml)    [![NPM_DOWNLOADS](https://img.shields.io/npm/dm/warcord)](https://nodei.co/npm/warcord/)    [![NPM_LICENSE](https://img.shields.io/npm/l/warcord)](https://nodei.co/npm/warcord/)     [![NPM_VERSION](https://img.shields.io/npm/v/warcord)](https://nodei.co/npm/warcord/)     [![PULL_REQUESTS](https://img.shields.io/github/issues-pr/Warcord/WarCord-Lib)](https://github.com/Warcord/WarCord-Lib/pulls)

[![NPM](https://nodei.co/npm/warcord.png)](https://nodei.co/npm/warcord/)

## Initial Files:
```js
const { WarCord } = require('warcord')
const warcord = new WarCord('your-app-id')
```

# Credits

- [GardZock](https://github.com/GardZock) (Owner).

> World of Tanks

- [User](#WOTUser)
- [Clan](#WOTClan)
- [Tank](#WOTTank)

> World of Tanks Blitz
- [User](#WOTBUser)
- [Clan](#WOTBClan)
- [Tank](#WOTBTank)
- [Tournaments](#WOTBTournaments)

> World of WarShips
- [User](#WOWSUser)
- [Clans](#WOWSClans)
- [Ships](#WOWSShip)
- [Encyclopedia](#WOWSEncyclopedia)

> World of Tanks Console
- [Clan](#WOTCClan)
- [Tankopedia](#WOTCTankopedia)

<a name="WOTCClan"></a>

## WOTCClan
**Kind**: global class  

* [WOTCClan](#WOTCClan)
    * [new WOTCClan(app_id, [realm])](#new_WOTCClan_new)
    * [.search(options)](#WOTCClan+search) ⇒ <code>Promise.&lt;(Array.&lt;WOTCClanSearch&gt;\|void)&gt;</code>
    * [.get(clan_id, options)](#WOTCClan+get) ⇒ <code>Promise.&lt;(WOTCClanGet\|void)&gt;</code>

<a name="WOTCClan+search"></a>

### wotcClan.search(options) ⇒ <code>Promise.&lt;(Array.&lt;WOTCClanSearch&gt;\|void)&gt;</code>
Method returns partial list of clans in alphabetical order by clan name or tag.

**Kind**: instance method of [<code>WOTCClan</code>](#WOTCClan)  
**Returns**: <code>Promise.&lt;(Array.&lt;WOTCClanSearch&gt;\|void)&gt;</code> - Array of clans.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options Object |

**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options.language | <code>AcceptedLangs</code> \| <code>string</code> |  | Localization language. |
| [options.limit] | <code>number</code> | <code>100</code> | Number of returned entries (fewer can be returned, but not more than 100). If the limit sent exceeds 100, a limit of 100 is applied (by default). |
| options.search | <code>string</code> |  | Part of name or tag for clan search. Minimum 2 characters |

<a name="WOTCClan+get"></a>

### wotcClan.get(clan_id, options) ⇒ <code>Promise.&lt;(WOTCClanGet\|void)&gt;</code>
Method returns detailed clan information.

**Kind**: instance method of [<code>WOTCClan</code>](#WOTCClan)  
**Returns**: <code>Promise.&lt;(WOTCClanGet\|void)&gt;</code> - Clan data.  

| Param | Type | Description |
| --- | --- | --- |
| clan_id |  | Clan ID |
| options | <code>Object</code> | Options Object |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options.language | <code>AcceptedLangs</code> \| <code>string</code> | Localization language. |
| options.members | <code>boolean</code> | Return with the members info. |

<a name="WOWSClans"></a>

## WOWSClans
**Kind**: global class  

* [WOWSClans](#WOWSClans)
    * [new WOWSClans(app_id, [realm])](#new_WOWSClans_new)
    * [.get(clanID)](#WOWSClans+get) ⇒ <code>Promise.&lt;(WOWSClansResolve\|null)&gt;</code>
    * [.search(clanNameOrTag)](#WOWSClans+search) ⇒ <code>Promise.&lt;(WOWSClansSearchResolve\|null)&gt;</code>

<a name="WOWSClans+get"></a>

### wowsClans.get(clanID) ⇒ <code>Promise.&lt;(WOWSClansResolve\|null)&gt;</code>
Get a clan in World of WarShips.

**Kind**: instance method of [<code>WOWSClans</code>](#WOWSClans)  
**Returns**: <code>Promise.&lt;(WOWSClansResolve\|null)&gt;</code> - Clan data.  

| Param | Type | Description |
| --- | --- | --- |
| clanID | <code>number</code> \| <code>string</code> | ID of clan. |

<a name="WOWSClans+search"></a>

### wowsClans.search(clanNameOrTag) ⇒ <code>Promise.&lt;(WOWSClansSearchResolve\|null)&gt;</code>
Get a array with clans data of respective name.

**Kind**: instance method of [<code>WOWSClans</code>](#WOWSClans)  
**Returns**: <code>Promise.&lt;(WOWSClansSearchResolve\|null)&gt;</code> - Array with clan data.  

| Param | Type | Description |
| --- | --- | --- |
| clanNameOrTag | <code>string</code> | Name or Tag of clan. |

<a name="WOTBClan"></a>

## WOTBClan
**Kind**: global class  

* [WOTBClan](#WOTBClan)
    * [new WOTBClan(app_id, [realm])](#new_WOTBClan_new)
    * [.get(clanID)](#WOTBClan+get) ⇒ <code>Promise.&lt;(WOTBClanResolve\|null)&gt;</code>
    * [.search(clanNameOrTag)](#WOTBClan+search) ⇒ <code>Promise.&lt;(Array.&lt;ClanSearchBlitz&gt;\|null)&gt;</code>

<a name="WOTBClan+get"></a>

### wotbClan.get(clanID) ⇒ <code>Promise.&lt;(WOTBClanResolve\|null)&gt;</code>
Get a clan in World of Tanks Blitz.

**Kind**: instance method of [<code>WOTBClan</code>](#WOTBClan)  
**Returns**: <code>Promise.&lt;(WOTBClanResolve\|null)&gt;</code> - Clan data.  

| Param | Type | Description |
| --- | --- | --- |
| clanID | <code>string</code> \| <code>number</code> | ID of clan. |

**Example**  
```js
...
const clan = await <Warcord>.blitz.clan.get('ID of Clan')
```
<a name="WOTBClan+search"></a>

### wotbClan.search(clanNameOrTag) ⇒ <code>Promise.&lt;(Array.&lt;ClanSearchBlitz&gt;\|null)&gt;</code>
Get the ID's and Name of the putted name.

**Kind**: instance method of [<code>WOTBClan</code>](#WOTBClan)  
**Returns**: <code>Promise.&lt;(Array.&lt;ClanSearchBlitz&gt;\|null)&gt;</code> - The clan ID's and Name.  

| Param | Type | Description |
| --- | --- | --- |
| clanNameOrTag | <code>string</code> | ID or Tag of the clan. |

**Example**  
```js
...
const searchingClan = await <Warcord>.blitz.clan.search('Name or Tag of Clan')
//this returns an array of the clans found

const clan = await <Warcord>.blitz.clan.get(searchingClan[0].clan_id)
//this returns the first clan data.
```
<a name="WOTClan"></a>

## WOTClan
**Kind**: global class  

* [WOTClan](#WOTClan)
    * [new WOTClan(app_id, [realm])](#new_WOTClan_new)
    * [.get(clanID, options)](#WOTClan+get) ⇒ <code>Promise.&lt;(WOTClanResolve\|null)&gt;</code>
    * [.search(clanNameOrTag, options)](#WOTClan+search) ⇒ <code>Promise.&lt;(Array.&lt;WOTClanSearchResolve&gt;\|null)&gt;</code>
    * [.rating(clanID, options)](#WOTClan+rating) ⇒ <code>Object</code>
    * [.member(memberID, options)](#WOTClan+member) ⇒ <code>Promise.&lt;(WOTMember\|null)&gt;</code>

<a name="WOTClan+get"></a>

### wotClan.get(clanID, options) ⇒ <code>Promise.&lt;(WOTClanResolve\|null)&gt;</code>
Get a clan in World of Tanks.

**Kind**: instance method of [<code>WOTClan</code>](#WOTClan)  
**Returns**: <code>Promise.&lt;(WOTClanResolve\|null)&gt;</code> - Clan data.  

| Param | Type | Description |
| --- | --- | --- |
| clanID | <code>string</code> | ID of clan. |
| options | <code>Object</code> | Options Object. |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options.realm | <code>AllRealms</code> | The realm of query. |

**Example**  
```js
...
const clan = await <Warcord>.wot.clan.get('ID of Clan')
```
<a name="WOTClan+search"></a>

### wotClan.search(clanNameOrTag, options) ⇒ <code>Promise.&lt;(Array.&lt;WOTClanSearchResolve&gt;\|null)&gt;</code>
Get a array with clans data of respective name.

**Kind**: instance method of [<code>WOTClan</code>](#WOTClan)  
**Returns**: <code>Promise.&lt;(Array.&lt;WOTClanSearchResolve&gt;\|null)&gt;</code> - Array with clan data.  

| Param | Type | Description |
| --- | --- | --- |
| clanNameOrTag | <code>string</code> | Name or Tag of clan. |
| options | <code>Object</code> | Options Object. |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options.realm | <code>AllRealms</code> | The realm of query. |

**Example**  
```js
...
const searchingClan = await <Warcord>.wot.clan.search('Name or Tag of Clan')
//this returns an array of the clans found.

const clan = await <Warcord>.wot.clan.get(searchingClan[0].clan_id)
//this returns the first clan data.
```
<a name="WOTClan+rating"></a>

### wotClan.rating(clanID, options) ⇒ <code>Object</code>
Get the rating of an Clan.

**Kind**: instance method of [<code>WOTClan</code>](#WOTClan)  
**Returns**: <code>Object</code> - Clan rating.  

| Param | Type | Description |
| --- | --- | --- |
| clanID | <code>string</code> \| <code>number</code> | ID of Clan. |
| options | <code>Object</code> | Options Object. |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options.realm | <code>AllRealms</code> | The realm of query. |

**Example**  
```js
...
const ratingOfClan = await <Warcord>.wot.clan.rating('ID of Clan')
```
<a name="WOTClan+member"></a>

### wotClan.member(memberID, options) ⇒ <code>Promise.&lt;(WOTMember\|null)&gt;</code>
Get the clan member data.

**Kind**: instance method of [<code>WOTClan</code>](#WOTClan)  
**Returns**: <code>Promise.&lt;(WOTMember\|null)&gt;</code> - Clan Member data.  

| Param | Type | Description |
| --- | --- | --- |
| memberID | <code>string</code> \| <code>number</code> | ID of Clan Member. |
| options | <code>Object</code> | Options Object. |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options.realm | <code>AllRealms</code> | The realm of query. |

**Example**  
```js
const memberOfClan = await <Warcord>.wot.clan.member('ID of Member')
```
<a name="WOWSEncyclopedia"></a>

## WOWSEncyclopedia
**Kind**: global class  

* [WOWSEncyclopedia](#WOWSEncyclopedia)
    * [new WOWSEncyclopedia(app_id, [realm])](#new_WOWSEncyclopedia_new)
    * ~~[.get()](#WOWSEncyclopedia+get)~~
    * [.find(ops)](#WOWSEncyclopedia+find) ⇒ <code>Promise.&lt;(Array.&lt;WOWSLongPediaResolve&gt;\|Array.&lt;WOWSPediaResolve&gt;\|null)&gt;</code>
    * [.shipParams(ship_id, options)](#WOWSEncyclopedia+shipParams) ⇒ <code>Promise.&lt;(WOWSShipParams\|null)&gt;</code>

<a name="WOWSEncyclopedia+get"></a>

### ~~wowsEncyclopedia.get()~~
***Deprecated***

**Kind**: instance method of [<code>WOWSEncyclopedia</code>](#WOWSEncyclopedia)  
<a name="WOWSEncyclopedia+find"></a>

### wowsEncyclopedia.find(ops) ⇒ <code>Promise.&lt;(Array.&lt;WOWSLongPediaResolve&gt;\|Array.&lt;WOWSPediaResolve&gt;\|null)&gt;</code>
Get a ship based on params.

**Kind**: instance method of [<code>WOWSEncyclopedia</code>](#WOWSEncyclopedia)  

| Param | Type |
| --- | --- |
| ops | <code>object</code> | 

**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| ops.nation | <code>string</code> |  | The nation of ship. |
| ops.type | <code>string</code> |  | The type of ship. |
| ops.options | <code>object</code> |  | Options of query. |
| [ops.options.limit] | <code>number</code> | <code>100</code> | The limit of ships finded. |
| [ops.options.lang] | <code>string</code> | <code>&quot;en&quot;</code> | The Language of Texts. |

**Example**  
```js
...
const getShip = await <WarCord>.wows.ship.find({ nation: 'japan', options: { lang: 'pt-br', limit: 100 } })
```
<a name="WOWSEncyclopedia+shipParams"></a>

### wowsEncyclopedia.shipParams(ship_id, options) ⇒ <code>Promise.&lt;(WOWSShipParams\|null)&gt;</code>
Get the parameters of a ship

**Kind**: instance method of [<code>WOWSEncyclopedia</code>](#WOWSEncyclopedia)  
**Returns**: <code>Promise.&lt;(WOWSShipParams\|null)&gt;</code> - Parameters of ships in all existing configurations.  

| Param | Type | Description |
| --- | --- | --- |
| ship_id |  | Ship ID |
| options | <code>Object</code> | Options Object |

**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options.artillery_id | <code>string</code> \| <code>number</code> |  | Main Battery ID. If the module is not indicated, module of basic configuration is used. |
| options.dive_bomber_id | <code>string</code> \| <code>number</code> |  | Dive bombers' ID. If the module is not indicated, module of basic configuration is used. |
| options.engine_id | <code>string</code> \| <code>number</code> |  | Engine ID. If the module is not indicated, module of basic configuration is used. |
| options.fighter_id | <code>string</code> \| <code>number</code> |  | Fighters' ID. If the module is not indicated, module of basic configuration is used. |
| options.fire_control_id | <code>string</code> \| <code>number</code> |  | ID of Gun Fire Control System. If the module is not indicated, module of basic configuration is used. |
| options.flight_control_id | <code>string</code> \| <code>number</code> |  | ID of Flight Control System. If the module is not indicated, module of basic configuration is used. |
| options.hull_id | <code>string</code> \| <code>number</code> |  | Hull ID. If the module is not indicated, module of basic configuration is used. |
| [options.language] | <code>string</code> \| <code>number</code> | <code>&quot;en&quot;</code> | Localization language. |
| options.torpedo_bomber_id | <code>string</code> \| <code>number</code> |  | Torpedo bombers' ID. If the module is not indicated, module of basic configuration is used. |
| options.torpedoes_id | <code>string</code> \| <code>number</code> |  | Torpedo tubes' ID. If the module is not indicated, module of basic configuration is used. |

<a name="WOWSShip"></a>

## WOWSShip
**Kind**: global class  

* [WOWSShip](#WOWSShip)
    * [new WOWSShip(app_id, [realm])](#new_WOWSShip_new)
    * [.get(userID)](#WOWSShip+get) ⇒ <code>Promise.&lt;(Array.&lt;WOWSShipResolve&gt;\|null)&gt;</code>
    * [.find(ops)](#WOWSShip+find) ⇒ <code>Promise.&lt;(Array.&lt;WOWSLongShipResolve&gt;\|Array.&lt;WOWSShipResolve&gt;\|null)&gt;</code>

<a name="WOWSShip+get"></a>

### wowsShip.get(userID) ⇒ <code>Promise.&lt;(Array.&lt;WOWSShipResolve&gt;\|null)&gt;</code>
Get the ships status of an user.

**Kind**: instance method of [<code>WOWSShip</code>](#WOWSShip)  

| Param | Type | Description |
| --- | --- | --- |
| userID | <code>string</code> | the ID of user. |

<a name="WOWSShip+find"></a>

### wowsShip.find(ops) ⇒ <code>Promise.&lt;(Array.&lt;WOWSLongShipResolve&gt;\|Array.&lt;WOWSShipResolve&gt;\|null)&gt;</code>
Get a ship based on params.

**Kind**: instance method of [<code>WOWSShip</code>](#WOWSShip)  

| Param | Type |
| --- | --- |
| ops | <code>Object</code> | 

**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| ops.nation | <code>string</code> |  | The nation of ship. |
| ops.string | <code>string</code> |  | The type of ship. |
| ops.options | <code>Object</code> |  | Options of query. |
| [ops.options.limit] | <code>number</code> | <code>100</code> | The limit of ships finded. |
| [ops.options.lang] | <code>string</code> | <code>&quot;en&quot;</code> | The Language of Texts. |

<a name="WOTBTank"></a>

## WOTBTank
**Kind**: global class  

* [WOTBTank](#WOTBTank)
    * [new WOTBTank(app_id, [realm])](#new_WOTBTank_new)
    * [.get(tankID)](#WOTBTank+get) ⇒ <code>Promise.&lt;(WOTBTankResolve\|null)&gt;</code>

<a name="WOTBTank+get"></a>

### wotbTank.get(tankID) ⇒ <code>Promise.&lt;(WOTBTankResolve\|null)&gt;</code>
Get the tank by ID.

**Kind**: instance method of [<code>WOTBTank</code>](#WOTBTank)  

| Param | Type |
| --- | --- |
| tankID | <code>string</code> \| <code>number</code> | 

<a name="WOTTank"></a>

## WOTTank
**Kind**: global class  

* [WOTTank](#WOTTank)
    * [new WOTTank(app_id, [realm])](#new_WOTTank_new)
    * [.find(type, nation, tier, options)](#WOTTank+find) ⇒ <code>Promise.&lt;(WOTTanksResolve\|null)&gt;</code>
    * [.get(tankID)](#WOTTank+get) ⇒ <code>Promise.&lt;(WOTTanksResolve\|null)&gt;</code>

<a name="WOTTank+find"></a>

### wotTank.find(type, nation, tier, options) ⇒ <code>Promise.&lt;(WOTTanksResolve\|null)&gt;</code>
Get all tanks of parameters.

**Kind**: instance method of [<code>WOTTank</code>](#WOTTank)  
**Returns**: <code>Promise.&lt;(WOTTanksResolve\|null)&gt;</code> - Returns all tanks finded.  
**Exemple**: ...

const getTank = await <Warcord>.wot.tank.find('heavyTank')  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | type of tank. |
| nation | <code>WOTNations</code> | The nation of tank. |
| tier | <code>string</code> | The tier of tank. |
| options | <code>Object</code> | The options object. |

**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options.realm | <code>AllRealms</code> |  | The realm of query. |
| [options.limit] | <code>number</code> | <code>100</code> | Limit of returned data. |
| [options.lang] | <code>WOTLangs</code> | <code>en</code> | The language of Texts. |

<a name="WOTTank+get"></a>

### wotTank.get(tankID) ⇒ <code>Promise.&lt;(WOTTanksResolve\|null)&gt;</code>
Get a tank by ID.

**Kind**: instance method of [<code>WOTTank</code>](#WOTTank)  
**Returns**: <code>Promise.&lt;(WOTTanksResolve\|null)&gt;</code> - Object with Tank Data.  

| Param | Type | Description |
| --- | --- | --- |
| tankID | <code>number</code> \| <code>string</code> | ID of Tank. |

**Example**  
```js
...
const tank = await <WarCord>.wot.tank.get('ID of Tank')
```
<a name="WOTCTankopedia"></a>

## WOTCTankopedia
**Kind**: global class  

* [WOTCTankopedia](#WOTCTankopedia)
    * [new WOTCTankopedia(app_id, [realm])](#new_WOTCTankopedia_new)
    * [.search(options)](#WOTCTankopedia+search) ⇒ <code>Promise.&lt;(Array.&lt;WOTCTank&gt;\|void)&gt;</code>

<a name="WOTCTankopedia+search"></a>

### wotcTankopedia.search(options) ⇒ <code>Promise.&lt;(Array.&lt;WOTCTank&gt;\|void)&gt;</code>
Method returns list of available vehicles.

**Kind**: instance method of [<code>WOTCTankopedia</code>](#WOTCTankopedia)  
**Returns**: <code>Promise.&lt;(Array.&lt;WOTCTank&gt;\|void)&gt;</code> - An array with search data.  

| Param | Description |
| --- | --- |
| options | Options Object |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options.language | <code>AcceptedLangs</code> \| <code>Array.&lt;AcceptedLangs&gt;</code> | Localization language. |
| options.nation | <code>AcceptedNations</code> \| <code>Array.&lt;AcceptedNations&gt;</code> | Nation. |
| options.tank_id | <code>number</code> \| <code>Array.&lt;number&gt;</code> | Vehicle ID. |
| options.tier | <code>number</code> \| <code>Array.&lt;number&gt;</code> | Tier. |

<a name="WOTBTournaments"></a>

## WOTBTournaments
**Kind**: global class  

* [WOTBTournaments](#WOTBTournaments)
    * [new WOTBTournaments(app_id, [realm])](#new_WOTBTournaments_new)
    * [.find(options)](#WOTBTournaments+find) ⇒ <code>Promise.&lt;(Array.&lt;WOTBTournamentsSearch&gt;\|null)&gt;</code>
    * [.get(tourID, options)](#WOTBTournaments+get) ⇒ <code>Promise.&lt;(WOTBTournamentsGet\|null)&gt;</code>
    * [.getResult(tourID, options)](#WOTBTournaments+getResult) ⇒ <code>Promise.&lt;(WOTBTourResult\|null)&gt;</code>

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| app_id | <code>string</code> |  | The ID of your WarGaming App. |
| [realm] | <code>string</code> | <code>&quot;na&quot;</code> | Server Location Not valid for World of Tanks Console (WOTC).. |

<a name="WOTBTournaments+find"></a>

### wotbTournaments.find(options) ⇒ <code>Promise.&lt;(Array.&lt;WOTBTournamentsSearch&gt;\|null)&gt;</code>
Search tournaments in API.

**Kind**: instance method of [<code>WOTBTournaments</code>](#WOTBTournaments)  
**Returns**: <code>Promise.&lt;(Array.&lt;WOTBTournamentsSearch&gt;\|null)&gt;</code> - The search data.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options Object |

**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [options.language] | <code>AcceptedLanguagesWOTBTournaments</code> \| <code>string</code> | <code>&quot;en&quot;</code> | Localization language. |
| [options.limit] | <code>number</code> | <code>10</code> | Number of returned entries. Min value is 1. Maximum value: 25. |
| options.search | <code>string</code> |  | First letters in tournament name for search. Minimum length: 2 characters. Maximum length: 50 characters. |
| options.status | <code>StautsTournaments</code> \| <code>Array.&lt;StautsTournaments&gt;</code> |  | Tournament status. |

<a name="WOTBTournaments+get"></a>

### wotbTournaments.get(tourID, options) ⇒ <code>Promise.&lt;(WOTBTournamentsGet\|null)&gt;</code>
Get a tournamente by ID.

**Kind**: instance method of [<code>WOTBTournaments</code>](#WOTBTournaments)  
**Returns**: <code>Promise.&lt;(WOTBTournamentsGet\|null)&gt;</code> - The tournament data.  

| Param | Type | Description |
| --- | --- | --- |
| tourID | <code>string</code> | Tournament ID that can be retrieved from the [find](find) method. |
| options | <code>Object</code> | The Options Object |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options.language | <code>AcceptedLanguagesWOTBTournaments</code> \| <code>string</code> | Localization language. |

<a name="WOTBTournaments+getResult"></a>

### wotbTournaments.getResult(tourID, options) ⇒ <code>Promise.&lt;(WOTBTourResult\|null)&gt;</code>
Used to get the tournament result.

**Kind**: instance method of [<code>WOTBTournaments</code>](#WOTBTournaments)  
**Returns**: <code>Promise.&lt;(WOTBTourResult\|null)&gt;</code> - Tournament Result.  

| Param | Type | Description |
| --- | --- | --- |
| tourID |  | Tournament ID that can be retrieved from the [find](find) method. |
| options | <code>Object</code> | Options Object |

**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| language | <code>AcceptedLanguagesWOTBTournaments</code> |  | Localization language. |
| [limit] | <code>number</code> | <code>10</code> | Number of returned entries. |
| team_id | <code>string</code> |  | Team ID. |

<a name="WOWSUser"></a>

## WOWSUser
**Kind**: global class  

* [WOWSUser](#WOWSUser)
    * [new WOWSUser(app_id, [realm])](#new_WOWSUser_new)
    * [.search(userName)](#WOWSUser+search) ⇒ <code>Promise.&lt;(Array.&lt;UserSearchResolve&gt;\|null)&gt;</code>
    * [.get(userID)](#WOWSUser+get) ⇒ <code>Promise.&lt;(WOWSUserResolve\|null)&gt;</code>
    * [.achievements(account_id, options)](#WOWSUser+achievements) ⇒ <code>Promise.&lt;({battle: any, progress: any}\|null)&gt;</code>
    * [.shipStats(account_id)](#WOWSUser+shipStats) ⇒ <code>Promise.&lt;(Array.&lt;WOWSPediaResolve&gt;\|null)&gt;</code>

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| app_id | <code>string</code> |  | The ID of your WarGaming App. |
| [realm] | <code>string</code> | <code>&quot;na&quot;</code> | Server Location Not valid for World of Tanks Console (WOTC).. |

<a name="WOWSUser+search"></a>

### wowsUser.search(userName) ⇒ <code>Promise.&lt;(Array.&lt;UserSearchResolve&gt;\|null)&gt;</code>
Search users with respective name.

**Kind**: instance method of [<code>WOWSUser</code>](#WOWSUser)  
**Returns**: <code>Promise.&lt;(Array.&lt;UserSearchResolve&gt;\|null)&gt;</code> - Object Array with users data.  

| Param | Type | Description |
| --- | --- | --- |
| userName | <code>string</code> | Name of user. |

<a name="WOWSUser+get"></a>

### wowsUser.get(userID) ⇒ <code>Promise.&lt;(WOWSUserResolve\|null)&gt;</code>
Get an user by ID.

**Kind**: instance method of [<code>WOWSUser</code>](#WOWSUser)  
**Returns**: <code>Promise.&lt;(WOWSUserResolve\|null)&gt;</code> - Object of user data.  

| Param | Type | Description |
| --- | --- | --- |
| userID | <code>number</code> \| <code>string</code> | ID of user. |

<a name="WOWSUser+achievements"></a>

### wowsUser.achievements(account_id, options) ⇒ <code>Promise.&lt;({battle: any, progress: any}\|null)&gt;</code>
Get all achievements of an user.

**Kind**: instance method of [<code>WOWSUser</code>](#WOWSUser)  
**Returns**: <code>Promise.&lt;({battle: any, progress: any}\|null)&gt;</code> - The achievements of user.  

| Param | Type | Description |
| --- | --- | --- |
| account_id |  | Player account ID. |
| options | <code>Object</code> | Options Object |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options.language | <code>AcceptedLangs</code> | Localization language. |

<a name="WOWSUser+shipStats"></a>

### wowsUser.shipStats(account_id) ⇒ <code>Promise.&lt;(Array.&lt;WOWSPediaResolve&gt;\|null)&gt;</code>
Get the ships status of an user.

**Kind**: instance method of [<code>WOWSUser</code>](#WOWSUser)  

| Param | Type | Description |
| --- | --- | --- |
| account_id | <code>string</code> | the ID of user. |

**Example**  
```js
...
const ships = await <Warcord>.wows.user.shipStats('ID of User')
```
<a name="WOTBUser"></a>

## WOTBUser
**Kind**: global class  

* [WOTBUser](#WOTBUser)
    * [new WOTBUser(app_id, [realm])](#new_WOTBUser_new)
    * [.get(userID)](#WOTBUser+get) ⇒ <code>Promise.&lt;(WOTBUserResolve\|null)&gt;</code>
    * [.search(userName)](#WOTBUser+search) ⇒ <code>Promise.&lt;(UserSearchResolve\|null)&gt;</code>
    * [.topTanks(userID)](#WOTBUser+topTanks) ⇒ <code>Promise.&lt;(WOTBTankTop\|null)&gt;</code>

<a name="WOTBUser+get"></a>

### wotbUser.get(userID) ⇒ <code>Promise.&lt;(WOTBUserResolve\|null)&gt;</code>
Get the user data by ID.

**Kind**: instance method of [<code>WOTBUser</code>](#WOTBUser)  

| Param | Type |
| --- | --- |
| userID | <code>string</code> \| <code>number</code> | 

**Example**  
```js
...
const user = await <Warcord>.blitz.user.get('Wargaming ID of User')
```
<a name="WOTBUser+search"></a>

### wotbUser.search(userName) ⇒ <code>Promise.&lt;(UserSearchResolve\|null)&gt;</code>
Get all users with the putted name.

**Kind**: instance method of [<code>WOTBUser</code>](#WOTBUser)  

| Param | Type |
| --- | --- |
| userName | <code>string</code> | 

**Example**  
```js
...
const searchingUser = await <Warcord>.blitz.user.search('Wargaming NickName of User')
//this returns an array of the users found.

const user = await <Warcord>.blitz.user.get(searchingUser[0].id)
//this returns the first user data.
```
<a name="WOTBUser+topTanks"></a>

### wotbUser.topTanks(userID) ⇒ <code>Promise.&lt;(WOTBTankTop\|null)&gt;</code>
Get the best 5 tanks of an user.

**Kind**: instance method of [<code>WOTBUser</code>](#WOTBUser)  

| Param | Type |
| --- | --- |
| userID | <code>string</code> \| <code>number</code> | 

**Example**  
```js
...
const tank = await <Warcord>.blitz.user.topTanks('Wargaming ID of User')
```
<a name="WOTUser"></a>

## WOTUser
**Kind**: global class  

* [WOTUser](#WOTUser)
    * [new WOTUser(app_id, [realm])](#new_WOTUser_new)
    * [.search(userName, options)](#WOTUser+search) ⇒ <code>Promise.&lt;(Array.&lt;UserSearchResolve&gt;\|null)&gt;</code>
    * [.get(userID, options)](#WOTUser+get) ⇒ <code>Promise.&lt;(WOTUserResolve\|null)&gt;</code>
    * [.topTanks(userID, options)](#WOTUser+topTanks) ⇒ <code>Promise.&lt;(Array.&lt;WOTTopTanksResolve&gt;\|null)&gt;</code>

<a name="WOTUser+search"></a>

### wotUser.search(userName, options) ⇒ <code>Promise.&lt;(Array.&lt;UserSearchResolve&gt;\|null)&gt;</code>
Search users with respective name.

**Kind**: instance method of [<code>WOTUser</code>](#WOTUser)  
**Returns**: <code>Promise.&lt;(Array.&lt;UserSearchResolve&gt;\|null)&gt;</code> - Object Array with users data.  

| Param | Type | Description |
| --- | --- | --- |
| userName | <code>string</code> | Name of user. |
| options | <code>Object</code> | Options Object. |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options.realm | <code>AllRealms</code> | The realm of query. |

**Example**  
```js
...
const searchingUser = await <Warcord>.wot.user.search('Wargaming NickName of User')
//this returns an array of the users found.

const user = await <Warcord>.wot.user.get(searchingUser[0].id)
//this returns the first user data.
```
<a name="WOTUser+get"></a>

### wotUser.get(userID, options) ⇒ <code>Promise.&lt;(WOTUserResolve\|null)&gt;</code>
Get an user by ID.

**Kind**: instance method of [<code>WOTUser</code>](#WOTUser)  
**Returns**: <code>Promise.&lt;(WOTUserResolve\|null)&gt;</code> - Object of user data.  

| Param | Type | Description |
| --- | --- | --- |
| userID | <code>number</code> \| <code>string</code> | ID of user. |
| options | <code>Object</code> | Options Object. |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options.realm | <code>AllRealms</code> | The realm of query. |

**Example**  
```js
...
const user = await <Warcord>.wot.user.get('Wargaming ID of User')
```
<a name="WOTUser+topTanks"></a>

### wotUser.topTanks(userID, options) ⇒ <code>Promise.&lt;(Array.&lt;WOTTopTanksResolve&gt;\|null)&gt;</code>
Get the 5 best tanks of user.

**Kind**: instance method of [<code>WOTUser</code>](#WOTUser)  
**Returns**: <code>Promise.&lt;(Array.&lt;WOTTopTanksResolve&gt;\|null)&gt;</code> - Object Array with tanks data.  

| Param | Type | Description |
| --- | --- | --- |
| userID | <code>number</code> \| <code>string</code> | ID of user. |
| options | <code>Object</code> | Options Object. |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options.realm | <code>AllRealms</code> | The realm of query. |

**Example**  
```js
...
const topTanks = await <Warcord>.wot.user.topTanks('Wargaming ID of User')
```

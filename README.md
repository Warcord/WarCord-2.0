# WarCord

This is a package to simplify use of Wargaming API on Discord.

[![NPM](https://nodei.co/npm/warcord.png)](https://nodei.co/npm/warcord/)

## Initial Files:
```js
const { Warcord } = require('warcord')
const warcord = new Warcord('your-app-id')
```

# Useful Links
- Discord Server (In creation)

# Credits

- [GardZock](https://github.com/GardZock) (Owner).

# Topics

> World of Tanks

- [User](#user-wot)
    - [Getting user by ID](#getting-a-user-by-id-wot)
    - [Searching user by name](#searching-a-user-by-name-wot)
    - [Top Tanks of user](#top-tanks-of-user-wot)
- [Clan](#clan-wot)
    - [Getting clan by ID](#getting-a-clan-by-id-wot)
    - [Searching clan by name or tag](#searching-a-clan-by-name-or-tag-wot)
    - [Rating of clan](#rating-of-clan-wot)
- [Tank](#tank-wot)
    - [Getting a tank by ID](#getting-a-tank-by-id-wot)

> World of Tanks Blitz
- [User](#user-wotb)
    - [Getting user by ID](#getting-a-user-by-id-wotb)
    - [Searching user by name](#searching-a-user-by-name-wotb)
    - [Top Tanks of user](#top-tanks-of-user-wotb)
- [Clan](#clan-wotb)
    - [Getting clan by ID](#getting-a-clan-by-id-wotb)
    - [Searching clan by name or tag](#searching-a-clan-by-name-or-tag-wotb)
- [Tank](#tank-wotb)
    - [Getting a tank by ID](#getting-a-tank-by-id-wotb)

# World Of Tanks Functions

## User Wot

### Getting a user by ID Wot

In case you want to use the lib to look up users in the Wargaming API, use:
```js
...
const user = await warcord.wargaming.wot.user.get('Wargaming ID of User')
//this returns user data.
```

### Searching a user by name Wot

We don't always have the user ID in our hands, so we use the search method, which returns a user's information, such as ID and NickName.
```js
...
const searchingUser = await warcord.wargaming.wot.user.search('Wargaming NickName of User')
//this returns an array of the users found.

const user = await warcord.wargaming.wot.user.get(searchingUser[0].id)
//this returns the first user data.
```

### Top Tanks of user Wot

If you are interested in seeing a user's 5 best tanks, use this:
```js
...
const tank = await warcord.wargaming.wot.user.topTanks('Wargaming ID of User')
//this returns an Object Array with the 5 best tanks of a user.
```

## Clan Wot

### Getting a clan by ID Wot

If you need get a clan by ID, use this:
```js
...
const clan = await warcord.wargaming.wot.clan.get('ID of Clan')
//this returns clan data.
```

### Searching a clan by name or tag Wot

You don't have the ID of clan? Use this to get!
```js
...
const searchingClan = await warcord.wargaming.wot.clan.search('Name or Tag of Clan')
//this returns an array of the clans found

const clan = await warcord.wargaming.wot.clan.get(searchingClan[0].clan_id)
//this returns the first clan data.
```

### Rating of clan Wot
```js
...
const ratingOfClan = await warcord.wargaming.wot.clan.rating('ID of Clan')
//this returns an Object with rating of searched clan.
```

## Tank Wot

### Getting a tank by ID Wot
```js
...
const tank = await warcord.wargaming.blitz.tank.get('ID of Tank')
//this returns an Object with tank data.
```




## User Wotb

```js
...
const user = await warcord.wargaming.blitz.user.get('Wargaming ID of User')
//this returns user data.
```

### Searching a user by name Wotb

We don't always have the user ID in our hands, so we use the search method, which returns a user's information, such as ID and NickName.
```js
...
const searchingUser = await warcord.wargaming.blitz.user.search('Wargaming NickName of User')
//this returns an array of the users found.

const user = await warcord.wargaming.blitz.user.get(searchingUser[0].id)
//this returns the first user data.
```

### Top Tanks of user Wotb

If you are interested in seeing a user's 5 best tanks, use this:
```js
...
const tank = await warcord.wargaming.blitz.user.topTanks('Wargaming ID of User')
//this returns an Object Array with the 5 best tanks of a user.
```

## Clan Wotb

### Getting a clan by ID Wotb

If you need get a clan by ID, use this:
```js
...
const clan = await warcord.wargaming.blitz.clan.get('ID of Clan')
//this returns clan data.
```

### Searching a clan by name or tag Wotb

You don't have the ID of clan? Use this to get!
```js
...
const searchingClan = await warcord.wargaming.blitz.clan.search('Name or Tag of Clan')
//this returns an array of the clans found

const clan = await warcord.wargaming.blitz.clan.get(searchingClan[0].clan_id)
//this returns the first clan data.
```

## Tank Wotb

### Getting a tank by ID Wotb
```js
...
const tank = await warcord.wargaming.blitz.tank.get('ID of Tank')
//this returns an Object with tank data.
```
interface WOWSShipParams {
    engine: {
        engine_id_str: string,
        max_speed: number,
        engine_id: number
    },
    torpedo_bomber: null,
    anti_aircraft: {
        slots: SlotsAntiAircraft[],
        defense: number
    },
    mobility: {
        rudder_time: number,
        total: number,
        turning_radius: number,
        max_speed: number
    },
    hull: {
        hull_id: number,
        hull_id_str: string,
        torpedoes_barrels: number,
        anti_aircraft_barrels: number,
        range: {
            max: number,
            min: number
        },
        health: number,
        planes_amount: number | null,
        artillery_barrels: number,
        atba_barrels: number
    },
    atbas: {
        distance: number,
        slots: SlotsAtbas[]
    },
    artillery: {
        max_dispersion: 228,
        shells: {
            AP: {
                burn_probability: number | null,
                bullet_speed: number,
                name: string,
                damage: number,
                bullet_mass: number,
                type: string
            },
            HE: {
                burn_probability: number,
                bullet_speed: number,
                name: string,
                damage: number,
                bullet_mass: number,
                type: string
            }
        },
        shot_delay: number,
        rotation_time: number,
        distance: number,
        artillery_id: number,
        artillery_id_str: string,
        slots: {
            number: {
                barrels: number,
                name: string,
                guns: number
            }
        },
        gun_rate: number
    },
    torpedoes: {
        visibility_dist: number,
        distance: number,
        torpedoes_id: number,
        torpedo_name: string,
        reload_time: number,
        torpedo_speed: number,
        rotation_time: number,
        torpedoes_id_str: string,
        slots: {
                barrels: number,
                caliber: number,
                name: string,
                guns: number
            }[],
        max_damage: number
    },
    fighters: any,
    ship_id: number,
    fire_control: {
        fire_control_id: number,
        distance: number,
        distance_increase: number,
        fire_control_id_str: string
    },
    weaponry: {
        anti_aircraft: number,
        aircraft: number,
        artillery: number,
        torpedoes: number
    },
    battle_level_range_max: number,
    battle_level_range_min: number,
    flight_control: any,
    concealment: {
        total: number,
        detect_distance_by_plane: number,
        detect_distance_by_ship: number
    },
    armour: {
        casemate: {
            max: number,
            min: number
        },
        flood_prob: number,
        deck: {
            max: number,
            min: number
        },
        flood_damage: number,
        range: {
            max: number,
            min: number
        },
        health: number,
        extremities: {
            max: number,
            min: number
        },
        total: number,
        citadel: {
            max: number,
            min: number
        }
    },
    dive_bomber: any
}


interface SlotsAntiAircraft {

    distance: number,
    avg_damage: number,
    caliber: number,
    name: string,
    guns: number

}

interface SlotsAtbas {
    burn_probability: number,
    bullet_speed: number,
    name: string,
    shot_delay: number,
    damage: number,
    bullet_mass: number,
    type: string,
    gun_rate: number
}

export { WOWSShipParams, SlotsAntiAircraft, SlotsAtbas }
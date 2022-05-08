interface WOWSLongShipResolve {

    description: string | null,
    price_gold: number | null,
    ship_id_str: string | null,
    has_demo_profile: boolean,
    images: {
        small: string | null,
        large: string | null,
        medium: string | null,
        contour: string | null
    },
    modules: {
        engine: number[] | null,
        torpedo_bomber: number[] | null,
        fighter: number[] | null,
        hull: number[] | null,
        artillery: number[] | null,
        torpedoes: number[] | null,
        fire_control: number[] | null,
        flight_control: number[] | null,
        dive_bomber: number[] | null
    },
    modules_tree: WOWSModulesTree[] | Map<any, any>,
    nation: string | null,
    is_premium: boolean,
    ship_id: number | null,
    price_credit: number | null,
    default_profile: {
        engine: {
            engine_id_str: string | null,
            max_speed: number | null,
            engine_id: number | null
        },
        torpedo_bomber: any,
        anti_aircraft: {
            slots: WOWSDefaultPSlots[] | Map<any, any>,
            defense: number | null
        },
        mobility: {
            rudder_time: number | null,
            total: number | null,
            turning_radius: number | null,
            max_speed: number | null
        },
        hull: {
            hull_id: number | null,
            hull_id_str: string | null,
            torpedoes_barrels: number | null,
            anti_aircraft_barrels: number | null,
            range: {
                max: number | null,
                min: number | null
            },
            health: number | null,
            planes_amount: number | null,
            artillery_barrels: number | null,
            atba_barrels: number | null
        },
        atbas: {
            distance: number | null,
            slots: WOWSATBasSlots[] | Map<any, any>
        },
        artillery: {
            max_dispersion: number | null,
            shells: {
                AP: {
                    burn_probability: number | null | null,
                    bullet_speed: number | null,
                    name: string | null,
                    damage: number | null,
                    bullet_mass: number | null,
                    type: string | null
                },
                HE: {
                    burn_probability: number | null,
                    bullet_speed: number | null,
                    name: string | null,
                    damage: number | null,
                    bullet_mass: number | null,
                    type: string | null
                }
            },
            shot_delay: number | null,
            rotation_time: number | null,
            distance: number | null,
            artillery_id: number | null,
            artillery_id_str: string | null,
            slots: WOWSArtySlots[] | Map<any, any>

        },
        gun_rate: number | null
    },
    torpedoes: {
        visibility_dist: number | null,
        distance: number | null,
        torpedoes_id: number | null,
        torpedo_name: string | null,
        reload_time: number | null,
        torpedo_speed: number | null,
        rotation_time: number | null,
        torpedoes_id_str: string | null,
        slots: WOWSTorpSlots[] | Map<any, any>,
        max_damage: number | null
    },
    fighters: any,
    fire_control: {
        fire_control_id: number | null,
        distance: number | null,
        distance_increase: number | null,
        fire_control_id_str: string | null
    },
    weaponry: {
        anti_aircraft: number | null,
        aircraft: number | null,
        artillery: number | null,
        torpedoes: number | null
    },
    battle_level_range_max: number | null,
    battle_level_range_min: number | null,
    flight_control: any,
    concealment: {
        total: number | null,
        detect_distance_by_plane: number | null,
        detect_distance_by_ship: number | null
    },
    armour: WOWSArmour,
    dive_bomber: any
    upgrades: number[] | null,
    tier: number | null,
    next_ships: any,
    mod_slots: number | null,
    type: string | null,
    is_special: boolean,
    name: string | null
}


interface WOWSModulesTree {
    name: string | null,
    next_modules: any,
    is_default: boolean,
    price_xp: number | null,
    price_credit: number | null,
    next_ships: any,
    module_id: number | null,
    type: string | null,
    module_id_str: string | null
}

interface WOWSDefaultPSlots {
    distance: number | null,
    avg_damage: number | null,
    caliber: number | null,
    name: string | null,
    guns: number | null
}

interface WOWSATBasSlots {
    burn_probability: number | null,
    bullet_speed: number | null,
    name: string | null,
    shot_delay: number | null,
    damage: number | null,
    bullet_mass: number | null,
    type: string | null,
    gun_rate: number | null
}

interface WOWSArtySlots {
    barrels: number | null,
    name: string | null,
    guns: number | null
}

interface WOWSTorpSlots {
    barrels: number | null,
    caliber: number | null,
    name: string | null,
    guns: number | null
}

interface WOWSArmour {
    casemate: {
        max: number | null,
        min: number | null
    },
    flood_prob: number | null,
    deck: {
        max: number | null,
        min: number | null
    },
    flood_damage: number | null,
    range: {
        max: number | null,
        min: number | null
    },
    health: number | null,
    extremities: {
        max: number | null,
        min: number | null
    },
    total: number | null,
    citadel: {
        max: number | null,
        min: number | null
    }
}

export { WOWSTorpSlots, WOWSLongShipResolve, WOWSATBasSlots, WOWSArmour, WOWSArtySlots, WOWSDefaultPSlots, WOWSModulesTree }
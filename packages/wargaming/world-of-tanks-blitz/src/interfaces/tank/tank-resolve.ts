interface WOTBTankResolve {
    suspensions: number[] | null,
    description: string | null,
    engines: number[] | null,
    prices_xp: number | null,
    next_tanks: any | null,
    modules_tree: any,
    nation: string | null,
    is_premium: boolean,
    images: any | null,
    cost: number | null,
    default_profile: any | null,
    tier: number | null,
    tank_id: number | null,
    type: string | null,
    guns: number[],
    turrets: number[],
    name: string | null
}

export { WOTBTankResolve }
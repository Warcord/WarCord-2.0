interface WOTBTankTop {

    all: {
        spotted: number | null,
        hits: number | null,
        frags: number | null,
        max_xp: number | null,
        wins: number | null,
        losses: number | null,
        capture_points: number | null,
        battles: number | null,
        damage_dealt: number | null,
        damage_received: number | null,
        max_frags: number | null,
        shots: number | null,
        frags8p: number | null,
        xp: number | null,
        win_and_survived: number | null,
        survived_battles: number | null,
        dropped_capture_points: number | null
    },
    last_battle_time: number | null,
    account_id: number | null,
    max_xp: number | null,
    in_garage_updated: number | null,
    max_frags: number | null,
    mark_of_mastery: number | null,
    battle_life_time: number | null,
    in_garage: number | null,
    tank_id: number | null
}

export { WOTBTankTop }
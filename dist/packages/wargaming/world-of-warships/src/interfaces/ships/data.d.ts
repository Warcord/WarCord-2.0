interface WOWSShipResolve {
    pvp: {
        max_xp: number | null;
        damage_to_buildings: number | null;
        main_battery: {
            max_frags_battle: number | null;
            frags: number | null;
            hits: number | null;
            shots: number | null;
        };
        suppressions_count: number | null;
        max_damage_scouting: number | null;
        art_agro: number | null;
        ships_spotted: number | null;
        second_battery: {
            max_frags_battle: number | null;
            frags: number | null;
            hits: number | null;
            shots: number | null;
        };
        xp: number | null;
        survived_battles: number | null;
        dropped_capture_points: number | null;
        max_damage_dealt_to_buildings: number | null;
        torpedo_agro: number | null;
        draws: number | null;
        battles_since_510: number | null;
        planes_killed: number | null;
        battles: number | null;
        max_ships_spotted: number | null;
        team_capture_points: number | null;
        frags: number | null;
        damage_scouting: number | null;
        max_total_agro: number | null;
        max_frags_battle: number | null;
        capture_points: number | null;
        ramming: {
            max_frags_battle: number | null;
            frags: number | null;
        };
        torpedoes: {
            max_frags_battle: number | null;
            frags: number | null;
            hits: number | null;
            shots: number | null;
        };
        aircraft: {
            max_frags_battle: number | null;
            frags: number | null;
        };
        survived_wins: number | null;
        max_damage_dealt: number | null;
        wins: number | null;
        losses: number | null;
        damage_dealt: number | null;
        max_planes_killed: number | null;
        max_suppressions_count: number | null;
        team_dropped_capture_points: number | null;
        battles_since_512: number | null;
    };
    last_battle_time: number | null;
    account_id: number | null;
    distance: number | null;
    updated_at: number | null;
    battles: number | null;
    ship_id: number | null;
}
export { WOWSShipResolve };

export interface AirCraft {
    all: {
        avg_xp: number | null,
        bombers: {
            damage_dealt: number | null,
            assisted: number | null,
            max_killed: number | null,
            max_damage_dealt: number | null,
            killed: number | null
        },
        draws: number | null,
        ground_objects: {
            avg_killed: number | null,
            avg_damage_dealt_per_flight: number | null,
            avg_killed_per_flight: number | null,
            assisted: number | null,
            max_killed: number | null,
            max_killed_per_flight: number | null,
            killed: number | null,
            damage_dealt: number | null,
            max_damage_dealt: number | null
        },
        deaths: number | null,
        chosen: number | null,
        wins: number | null,
        losses: number | null,
        battle_score: number | null,
        battles: number | null,
        zone_captures: number | null,
        players: {
            avg_killed: number | null,
            max_killed_in_defence: number | null,
            assisted: number | null,
            max_killed: number | null,
            killed: number | null,
            damage_dealt: number | null,
            max_damage_dealt: number | null,
            killed_in_defence: number | null
        },
        flights: number | null,
        defenders_and_bombers: {
            avg_killed: number | null,
            max_killed: number | null,
            max_damage_dealt: number | null
        },
        avg_battle_score: number | null,
        defenders: {
            damage_dealt: number | null,
            assisted: number | null,
            max_killed: number | null,
            max_damage_dealt: number | null,
            killed: number | null
        },
        avg_flight_time: number | null,
        max_battles_score: number | null,
        flight_time: number | null,
        air_targets: {
            avg_killed_per_flight: number | null,
            avg_damage_dealt_per_flight: number | null,
            max_damage_dealt: number | null,
            max_killed_per_flight: number | null
        },
        chosen_first: number | null
    },
    account_id: number,
    plane_id: number,
    updated_at: number | null
}
interface WOWSClansResolve {
    members_count: number | null,
    name: string | null,
    creator_name: string | null,
    clan_id: number | null,
    created_at: number | null,
    updated_at: number | null,
    leader_name: string | null,
    members_ids: Array<number>,
    creator_id: number | null,
    tag: string | null,
    old_name: string | null,
    is_clan_disbanded: boolean,
    renamed_at: number | null,
    old_tag: string | null,
    leader_id: number | null,
    description: string | null
}

export { WOWSClansResolve }
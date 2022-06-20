interface WOTBGetTeam {
    status: string;
    title: string;
    players: WOTBTeamMember[];
    team_id: number;
    clan_id: string | null;
    tournament_id: number;
}
interface WOTBTeamMember {
    image: string | null;
    role: string | null;
    account_id: number;
    name: string;
}
export { WOTBGetTeam, WOTBTeamMember };

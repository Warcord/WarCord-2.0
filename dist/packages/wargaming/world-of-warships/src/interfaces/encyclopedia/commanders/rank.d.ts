interface WOWSCommanderRank {
    europe: Result[];
    commonwealth: Result[];
    netherlands: Result[];
    italy: Result[];
    usa: Result[];
    pan_asia: Result[];
    france: Result[];
    ussr: Result[];
    germany: Result[];
    uk: Result[];
    japan: Result[];
    spain: Result[];
    pan_america: Result[];
}
interface Result {
    experience: number;
    name: string | null;
    rank: number;
    names: string[];
}
export { WOWSCommanderRank, Result };

export type AcceptedLangs = "en" //English (by default)
    | "ru" //Русский
    | "pl" //Polski
    | "de" //Deutsch
    | "fr" //Français
    | "es" //Español
    | "tr" //Türkçe

export type SearchType = "startswith" // Search by initial characters of player name. Minimum length: 3 characters. Maximum length: 24 characters. (by default)
    | "exact" //Search by exact match of player name. Case insensitive. You can enter several names, separated with commas (up to 100).
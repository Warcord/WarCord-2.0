import { WOTClanResolve } from './clan-resolve'

interface WOTMember {

    clan: WOTClanResolve | null,
    account_id: number | null,
    role_i18n: string | null,
    joined_at: string | null,
    role: string | null,
    account_name: string | null
}

export { WOTMember }
import { AcceptedTypes, APIError, WarCordError } from "../../packages/warcord/functions/error"


class BaseClass {
    error: (send: string | APIError, type: AcceptedTypes) => void
    warn: (message: string, type: AcceptedTypes) => void
    constructor(app_id: string) {
        Object.defineProperty(this, 'id', { value: app_id })
        this.error = new WarCordError().createError
        this.warn = new WarCordError().createWarn
    }
}

export { BaseClass }
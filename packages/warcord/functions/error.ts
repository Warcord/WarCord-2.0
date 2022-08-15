import { emitWarning } from "process"

export type AcceptedTypes = "WARCORD" | "API"

export interface APIError {
    field: string,
    message: string,
    code: number,
    value: string
}


export class WarCordError {

    public createError(send: string | APIError, type: AcceptedTypes) {

        let name = ''
        type == "WARCORD" ? name = type : name = "WarGamingApiError"
        send ? send : send = "None."

        if (type == "API") {
            let { field, message, code, value } = send as APIError
            throw Error(`[${name}] ${message} - Code: ${code} (${field}: ${value})`)
        }

        throw Error(`[${name}] ${send}`)
    }

    public createWarn(message: string, type: AcceptedTypes) {

        let name = ''
        type == "WARCORD" ? name = type : name = "WarGamingApiError"

        message ? message : message = "None."

        throw emitWarning(`[${name}] ${message}`)
    }
}
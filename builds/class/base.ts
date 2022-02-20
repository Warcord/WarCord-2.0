class BaseClass {
    constructor(app_id: string) {
        Object.defineProperty(this, 'id', { value: app_id })
    }
}

export { BaseClass }
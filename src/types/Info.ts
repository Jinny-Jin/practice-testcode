export interface Info {
    name : string,
    password : string,
    confirm : boolean
}

export type PartialInfo = {[key in keyof Info] : Record<key, Info[key]>}[keyof Info]
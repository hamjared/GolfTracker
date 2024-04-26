import ServerSettings from "../settings/ServerSettings"

export type ServerSettingsType = {
    ip: string,
    port: number
}

export const defaultServerSettings = {
    ip: "127.0.0.1",
    port: 8080
}

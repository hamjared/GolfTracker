import ServerSettings from "../settings/ServerSettings"

export type ServerSettingsType = {
    ip: string,
    port: number,
    isHttps: boolean,
    usePort: boolean
}

export const defaultServerSettings = {
    ip: "10.0.0.221",
    port: 8443,
    isHttps: true,
    usePort: false
}

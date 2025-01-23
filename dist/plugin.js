exports.version = 1.0
exports.description = "Provides an url that returns the IP of the user"
exports.apiRequired = 9.6
exports.repo = "W-i-n-7/getip-api"
exports.preview = ["https://raw.githubusercontent.com/W-i-n-7/getip-api/refs/heads/main/imgs/settings.png"]

exports.config = {
    apiUrl: {
        frontend: false,
        type: 'string',
        multiple: false,
        label: "Url for the api.",
        helperText: "Default: /getip\nRESTART PLUGIN TO APPLY!",
        defaultValue: "/getip"
    },
}

var apiPath = "/getip"

exports.init = async api => {
    apiPath = api.getConfig('apiUrl')
}

exports.middleware = ctx => {
    if (ctx.path === apiPath)
    {
        ctx.body = ctx.ip
        return ctx.stop?.() || true
    }
}

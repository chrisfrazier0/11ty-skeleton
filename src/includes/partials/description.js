export default function(config) {
    config.addJavaScriptFunction('description', function(data) {
        const l10n = this._l10n(data)

        return /* html */ `
            <meta name="description" content="${data.description || l10n.description || data.pkg.description}">
        `
    })
}

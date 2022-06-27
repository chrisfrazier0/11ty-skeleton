export default function(config) {
    config.addJavaScriptFunction('titleTag', function(data) {
        const l10n = this._l10n(data)
        const title = l10n.title || data.pkg.name
        const separator = l10n.separator || ' | '

        return /* html */ `
            <title>${data.title ? title + separator + data.title : title}</title>
        `
    })
}

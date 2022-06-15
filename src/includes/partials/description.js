export default function(config) {
    config.addJavaScriptFunction('_description', function(data) {
        const locale = data.locale || data.site.defaultLocale
        const l10n = data.site[locale]

        return /* html */ `
            <meta name="description" content="${data.description || l10n.description || data.pkg.description}">
        `
    })
}

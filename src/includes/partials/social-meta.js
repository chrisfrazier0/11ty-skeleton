export default function(config) {
    config.addJavaScriptFunction('socialMeta', function(data) {
        const l10n = this._l10n(data)
        const siteTitle = l10n.title || data.pkg.name
        const separator = l10n.separator || ' | '
        const title = data.title ? siteTitle + separator + data.title : siteTitle
        const description = data.description || l10n.description || data.pkg.description

        return /* html */ `
            <meta property="og:title" content="${title}">
            <meta name="twitter:title" content="${title}">
            <meta property="og:description" content="${description}">
            <meta property="twitter:description" content="${description}">
            <meta property="og:url" content="${data.site.baseUrl + data.page.url}">
        `
    })
}

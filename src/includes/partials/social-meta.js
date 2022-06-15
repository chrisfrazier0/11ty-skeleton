export default function(config) {
    config.addJavaScriptFunction('_socialMeta', function(data) {
        const locale = data.locale || data.site.defaultLocale
        const l10n = data.site[locale]

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

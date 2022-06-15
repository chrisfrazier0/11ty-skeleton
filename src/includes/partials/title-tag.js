export default function(config) {
    config.addJavaScriptFunction('_titleTag', function(data) {
        const locale = data.locale || data.site.defaultLocale
        const l10n = data.site[locale]

        const title = l10n.title || data.pkg.name
        const separator = l10n.separator || ' | '

        return /* html */ `
            <title>${data.title ? title + separator + data.title : title}</title>
        `
    })
}

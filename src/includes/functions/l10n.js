export default function(config) {
    config.addJavaScriptFunction('_l10n', function(data) {
        const locale = data.locale || data.site.defaultLocale
        const l10n = data.site[locale]
        return l10n
    })
}

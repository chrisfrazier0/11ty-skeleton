export default function(config) {
    config.addJavaScriptFunction('_locale', function(data) {
        const locale = data.locale || data.site.defaultLocale
        return locale
    })
}

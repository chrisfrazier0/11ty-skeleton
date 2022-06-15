export default function(config) {
    config.addJavaScriptFunction('_footer', function(data) {
        const locale = data.locale || data.site.defaultLocale
        const l10n = data.site[locale]

        return /* html */ `
            <footer>
                <p>
                    ${l10n.copyright}
                    ${data.copyright.year}
                    ${data.copyright.holder}
                </p>
            </footer>
        `
    })
}

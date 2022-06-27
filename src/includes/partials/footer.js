export default function(config) {
    config.addJavaScriptFunction('footer', function(data) {
        const l10n = this._l10n(data)

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

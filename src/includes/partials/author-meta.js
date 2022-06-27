export default function(config) {
    config.addJavaScriptFunction('authorMeta', function(data) {
        const author = this._author(data)

        return /* html */ `
            <meta name="author" content="${author}">
        `
    })
}

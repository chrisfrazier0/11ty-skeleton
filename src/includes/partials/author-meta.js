export default function(config) {
    config.addJavaScriptFunction('_authorMeta', data => /* html */ `
        <meta name="author" content="${data.author || data.owner.name.full}">
    `)
}

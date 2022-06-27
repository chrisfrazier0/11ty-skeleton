export default function(config) {
    config.addJavaScriptFunction('_author', function(data) {
        const author = data.author || (data.site.author ? data.site.author.full : data.pkg.author)
        return author
    })
}

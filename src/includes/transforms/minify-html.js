import htmlmin from 'html-minifier'

export default function(config) {
    config.addTransform('minifyHTML', function(content, outputPath) {
        if (
            process.env.ELEVENTY_ENV === 'production' &&
            (outputPath !== false && outputPath.endsWith('.html'))
        ) {
            const minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
            })
            return minified
        }
        return content
    })
}

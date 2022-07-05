import CleanCSS from 'clean-css'

export default function(config) {
    config.addTransform('minifyCSS', function(content, outputPath) {
        if (
            process.env.ELEVENTY_ENV === 'production' &&
            (outputPath !== false && outputPath.endsWith('.css'))
        ) {
            const minified = new CleanCSS().minify(content).styles
            return minified
        }
        return content
    })
}

import Terser from 'terser'

export default function(config) {
    config.addTransform('minifyJS', async function(content, outputPath) {
        if (
            process.env.ELEVENTY_ENV === 'production' &&
            (outputPath !== false && outputPath.endsWith('.js'))
        ) {
            const minified = await Terser.minify(content)
            if (minified.error) {
                throw new Error(minified.error)
            }
            return minified.code
        }
        return content
    })
}

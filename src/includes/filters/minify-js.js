import Terser from 'terser'

export default function(config) {
    config.addFilter('minifyJS', async function(code) {
        if (process.env.ELEVENTY_ENV === 'production') {
            const minified = await Terser.minify(code)
            if (minified.error) {
                throw new Error(minified.error)
            }
            return minified.code
        }
        return code
    })
}

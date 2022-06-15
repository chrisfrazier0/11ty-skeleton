import CleanCSS from 'clean-css'

export default function(config) {
    config.addFilter('minifyCSS', function(stylesheet) {
        if (process.env.ELEVENTY_ENV === 'production') {
            const minified = new CleanCSS().minify(stylesheet).styles
            return minified
        }
        return stylesheet
    })
}

import includes from './src/includes'

export default function(config) {
    /* Load all of the includes */
    includes(config)

    /* Combine data in the Eleventy data cascade, rather than overwriting it */
    config.setDataDeepMerge(true)

    /* Copy static assets to the output directory */
    config.addPassthroughCopy('src/css/*.css')
    config.addPassthroughCopy('src/img')
    config.addPassthroughCopy('src/js')

    /* Have Eleventy watch the following additional files for live browsersync */
    config.addWatchTarget('**/*.css')
    config.addWatchTarget('**/*.js')

    /* Configure all of the special folder paths */
    return {
        dir: {
            input: 'src',
            output: 'public',
            data: 'data',
            includes: 'includes',
            layouts: 'layouts',
        },
    }
}

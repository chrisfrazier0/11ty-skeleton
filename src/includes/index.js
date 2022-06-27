import filters from './filters'
import functions from './functions'
import partials from './partials'
import plugins from './plugins'
import shortcodes from './shortcodes'
import transforms from './transforms'

export default function(config) {
    filters(config)
    functions(config)
    partials(config)
    plugins(config)
    shortcodes(config)
    transforms(config)
}

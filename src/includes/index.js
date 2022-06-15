import filters from './filters'
import partials from './partials'
import shortcodes from './shortcodes'
import transforms from './transforms'

export default function(config) {
    filters(config)
    partials(config)
    shortcodes(config)
    transforms(config)
}

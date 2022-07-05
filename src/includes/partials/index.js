import authorMeta from './author-meta'
import description from './description'
import favicon from './favicon'
import footer from './footer'
import headTag from './head-tag'
import nav from './nav'
import scriptTags from './script-tags'
import socialMeta from './social-meta'
import titleTag from './title-tag'

export default function(config) {
    authorMeta(config)
    description(config)
    favicon(config)
    footer(config)
    headTag(config)
    nav(config)
    scriptTags(config)
    socialMeta(config)
    titleTag(config)
}

import author from './author'
import l10n from './l10n'
import locale from './locale'

export default function(config) {
    author(config)
    l10n(config)
    locale(config)
}

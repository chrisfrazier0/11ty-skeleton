import minifyCSS from './minify-css'
import minifyHTML from './minify-html'
import minifyJS from './minify-js'

export default function(config) {
    minifyCSS(config)
    minifyHTML(config)
    minifyJS(config)
}

import fileToString from './file-to-string'
import minifyCSS from './minify-css'
import minifyJS from './minify-js'

export default function(config) {
    fileToString(config)
    minifyCSS(config)
    minifyJS(config)
}

import fileToString from './file-to-string'
import minifyCSS from './minify-css'

export default function(config) {
    fileToString(config)
    minifyCSS(config)
}

import { readFileSync } from 'fs'

export default function(config) {
    config.addFilter('fileToString', file => readFileSync(file, 'utf8'))
}

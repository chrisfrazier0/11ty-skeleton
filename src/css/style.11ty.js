export const data = {
    files: [
        'imports.css',
        'root.css',
        'main.css',
    ],
    permalink: '/css/style.css',
}

export function render(data) {
    const css = data.files
        .map(file => this.fileToString('src/css/partials/' + file))
        .join('')
    return this.minifyCSS(css)
}

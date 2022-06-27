export const data = {
    css: ['style.css'],
}

export function render(data) {
    const locale = this._locale(data)

    return /* html */ `
        <!DOCTYPE html>
        <html lang="${locale}">
        ${this.headTag(data)}
        <body>
            ${data.content}
            ${this.footer(data)}
            ${this.scriptTags(data)}
        </body>
        </html>
    `
}

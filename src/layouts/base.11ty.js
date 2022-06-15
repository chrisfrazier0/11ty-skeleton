export const data = {
    css: ['style.css'],
}

export function render(data) {
    const locale = data.locale || data.site.defaultLocale

    return /* html */ `
        <!DOCTYPE html>
        <html lang="${locale}">
        ${this._headTag(data)}
        <body>
            ${data.content}
            ${this._footer(data)}
            ${this._scriptTags(data)}
        </body>
        </html>
    `
}

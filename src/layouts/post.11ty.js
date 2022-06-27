export const data = {
    layout: 'base',
}

export function render(data) {
    const l10n = this._l10n(data)
    const author = this._author(data)

    return /* html */ `
        <header>
            <h1><a href="/">${l10n.title || data.pkg.name}</a></h1>
        </header>
        <article>
            <header>
                <h2>${data.title}</h2>
                <address>${author}</address>
            </header>
            <section>
                ${data.content}
            </section>
        </article>
    `
}

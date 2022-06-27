export const data = {
    layout: 'base',
}

export function render(data) {
    const l10n = this._l10n(data)

    return /* html */ `
        <header>
            <h1><a href="/">${l10n.title || data.pkg.name}</a></h1>
            <h2>${data.title}</h2>
        </header>
        <main>
            ${data.content}
        </main>
    `
}

export const data = {
    layout: 'base',
}

export function render(data) {
    const locale = data.locale || data.site.defaultLocale
    const l10n = data.site[locale]

    return /* html */ `
        <header>
            <h1>${l10n.title || data.pkg.name}</h1>
        </header>
        <article>
            <header>
                <h2>${data.title}</h2>
                <address>${data.author || data.owner.name.full }</address>
            </header>
            <section>
                ${data.content}
            </section>
        </article>
    `
}

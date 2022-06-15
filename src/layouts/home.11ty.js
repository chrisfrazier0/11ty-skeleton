export const data = {
    layout: 'base',
}

export function render(data) {
    const locale = data.locale || data.site.defaultLocale
    const l10n = data.site[locale]

    const posts = data.collections.posts || []
    const latestEn = posts.filter(post => post.data.locale === 'en').slice(-2).reverse()

    return /* html */ `
        <header>
            <h1>${data.title || l10n.title || data.pkg.name}</h1>
        </header>
        <main>
            ${data.content}
        </main>
        <section class="post-list">
            <h2>${l10n.latestPosts}</h2>
            ${this.postList(latestEn, data.owner.name.full)}
        </section>
    `
}

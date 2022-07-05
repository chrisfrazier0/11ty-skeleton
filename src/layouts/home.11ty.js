export const data = {
    layout: 'base',
}

export function render(data) {
    const l10n = this._l10n(data)
    const author = this._author(data)
    const posts = data.collections.posts || []
    const latestEn = posts.filter(post => post.data.locale === 'en').slice(-2).reverse()

    return /* html */ `
        <header>
            <h1><a href="/">${data.title || l10n.title || data.pkg.name}</a></h1>
        </header>
        ${this.nav(data)}
        <main>
            ${data.content}
        </main>
        <section class="post-list">
            <h3>${l10n.latestPosts}</h3>
            ${this.postList(latestEn, author)}
        </section>
    `
}

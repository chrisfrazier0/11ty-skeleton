export default function(config) {
    config.addShortcode('postList', function(arr, defaultAuthor) {
        const items = arr.map(item => /* html */ `
            <li>
                <article>
                    <header>
                        <h3>
                            <a href="${item.data.page.url}">${item.data.title}</a>
                        </h3>
                        <address>${item.data.author || defaultAuthor}</address>
                    </header>
                    <section>
                        ${item.data.description || '...'}
                    </section>
                </article>
            </li>
        `).join('')

        return /* html */ `
            <ul>
                ${items}
            </ul>
        `
    })
}

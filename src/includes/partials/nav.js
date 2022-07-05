export default function(config) {
    config.addJavaScriptFunction('nav', function(data) {
        const nav = data.collections.nav || []

        const links = nav
            .sort((a, b) => a.data.weight - b.data.weight)
            .map(item => {
                const aria = data.page.url === item.url ? 'aria-current="page"' : ''
                const target = item.data.navTarget ? `target="${item.data.navTarget}"` : ''
                return /* html */`
                    <li>
                        <a href="${item.data.url || item.url}" ${target} ${aria}>
                            ${item.data.navTitle || item.data.title}
                        </a>
                    </li>
                `
            })
            .join('')

        return /* html */ `
            <nav>
                <ul>${links}</ul>
            </nav>
        `
    })
}

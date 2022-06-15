export const data = {
    layout: 'base',
}

export const render = data => /* html */ `
    <header>
        <h1>${data.title}</h1>
    </header>
    <main>
        ${data.content}
    </main>
`

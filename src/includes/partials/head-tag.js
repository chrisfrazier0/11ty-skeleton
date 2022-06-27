export default function(config) {
    config.addJavaScriptFunction('headTag', function(data) {
        const css = data.css || []
        const styles = [].concat(css).map(file => `<link rel="stylesheet" href="/css/${file}">`).join('')

        return /* html */ `
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                ${this.authorMeta(data)}
                ${this.description(data)}
                ${this.favicon(data)}
                ${this.socialMeta(data)}
                ${this.titleTag(data)}
                ${styles}
            </head>
        `
    })
}

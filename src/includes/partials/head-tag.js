export default function(config) {
    config.addJavaScriptFunction('_headTag', function(data) {
        const css = data.css || []
        const styles = [].concat(css).map(file => `<link rel="stylesheet" href="/css/${file}">`).join('')

        return /* html */ `
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                ${this._authorMeta(data)}
                ${this._description(data)}
                ${this._favicon(data)}
                ${this._socialMeta(data)}
                ${this._titleTag(data)}
                ${styles}
            </head>
        `
    })
}

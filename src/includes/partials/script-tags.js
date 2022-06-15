export default function(config) {
    config.addJavaScriptFunction('_scriptTags', function(data) {
        const js = data.js || []
        const modules = data.modules || []
        const scripts = [].concat(js).map(file => `<script src="/js/${file}"></script>`).join('')
        const mods = [].concat(modules).map(file => `<script type="module" src="/js/${file}"></script>`).join('')

        return scripts + mods
    })
}

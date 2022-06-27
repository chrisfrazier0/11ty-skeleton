export default function(config) {
    if (config.copyExtension !== undefined) {
        throw new Error('Cannot extend config, copyExtension() already exists.')
    }

    config.copyExtension = function(ext) {
        this.addTemplateFormats(ext)
        this.addExtension(ext, {
            outputFileExtension: ext,
            compile: content => () => content,
        })
    }
}

export default {
    layout: 'page',
    tags: ['pages'],
    eleventyComputed: {
        permalink: data => `/${data.site.en.urlPrefix + data.page.fileSlug}/index.html`,
    },
}

export default {
    layout: 'post',
    tags: ['posts'],
    eleventyComputed: {
        permalink: data => `/${data.site.en.urlPrefix}blog/${data.page.fileSlug}/index.html`,
    },
}

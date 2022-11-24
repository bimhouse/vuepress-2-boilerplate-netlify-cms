import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
    lang: 'en-US',
    title: 'Hello Vuepress 2',
    description: 'Vuepress 2 Boilerplate',
    theme: defaultTheme({
        docsDir: 'docs',
        repo: 'gregoiredechaine/vuepress-2-boilerplate-netlify-cms',
        navbar: [
            {
                text: 'Vuepress 2 - Netlify CMS',
                link: '/'
            },
            {
                text: 'Admin',
                link: 'admin/#/',
            }
        ]
    })
})
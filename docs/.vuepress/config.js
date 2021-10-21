const sidebar = require('./sidebar')

module.exports = {
    title: '后端API接口文档',
    description: 'freelog接口文档',
    port: 8081,
    base: '/',
    head: [
        ['link', {
            rel: 'icon',
            href: '/freelog.ico'
        }]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        logo: '/logo.svg',
        sidebarDepth: 0,
        sidebar,
        home: true,
        // nav: [{
        //     text: '指南',
        //     link: '/'
        // },
        //     {
        //         text: 'API',
        //         link: '/api/'
        //     },
        //     {
        //         text: 'FAQ',
        //         link: '/faq/'
        //     }
        // ]
    }
}
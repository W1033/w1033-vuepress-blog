module.exports = {
    base: '/',
    // title: 'Hello VuePress',
    description: 'Just playing around',

    themeConfig: {
        lastUpdated: '最后更新时间：',
        nav: [
            { text: 'Home', link: '/' },
            { text: '高中数学', link: '/pages/high-school-math/4.md' },
            // { text: 'External', link: 'https://google.com' },
        ],
        sidebar: {
            '/pages/high-school-math/': [
                {
                    // - 一级菜单名称
                    title: '高中数学',
                    // - false 为默认展开菜单，默认值 true 是折叠菜单
                    collapsable: false,  
                    // - 设置侧边导航自动提取 markdown 文件标题的层级，默认 1 为 h2 层级
                    sidebarDepth: 3,
                    children: [
                        // - 菜单名称为 "必须 4"，跳转至 `/pages/mathematics-notes/hight-mathematics/必修4.md`
                        {path: ''},
                        {title: '必修 4', path: '4.md'},
                        
                        // - 下面还可以写多个页面
                    ]
                }
            ]
        }
    },

    extendMarkdown(md) {
        // md.use(require('markdown-it'));
        md.use(require('markdown-it-mathjax3'));
    }
}
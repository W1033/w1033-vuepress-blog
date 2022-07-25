module.exports = {
    base: '/',
    // title: 'Hello VuePress',
    description: 'Just playing around',

    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            // { text: 'Guide', link: '/guide/' },
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
                    sidebarDepth: 1,
                    children: [
                        // - 菜单名称为 "必须 4"，跳转至 `/pages/mathematics-notes/hight-mathematics/必修4.md`
                        {path: ''},
                        {title: '必修 4', path: '4.md'},
                        
                        // - 下面还可以写多个页面
                    ]
                }
            ]
        }
    }
}

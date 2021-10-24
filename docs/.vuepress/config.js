module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        // - 导航栏 Logo
        // logo: '/assets/img/logo.png',

        // - 导航栏连接
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Guide', link: '/guide/'},
            {text: 'External', link: 'https://google.com'},

            // - 下拉列表
            // {
            //     text: 'Languages',
            //     ariaLabel: 'Language Menu',
            //     items: [
            //         {text: 'Chinese', link: '/language/chinese/'},
            //         {text: 'Japanese', link: '/language/japanese/'}
            //     ]
            // }

            // - 下拉列表中设置分组
            // {
            //     text: 'Languages',
            //     items: [
            //         {text: 'Group1', items:[/* */]},
            //         {text: 'Group2', items:[/* */]},
            //     ]
            // },
        ],
        // - 禁用导航栏
        // navbar: false

        // - 侧边栏
        sidebar: [
            '/',
            '/page-a',
            ['/page-b', 'Explicit link text']
        ],

        // - 显示所有页面的标题链接
        displayAllHeaders: true,    // 默认值: false
        // - 活动的标题连接
        activeHeaderLinks: false,   // 默认值: true
    }
}
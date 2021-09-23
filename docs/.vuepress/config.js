module.exports = {
  base: "/HTMLandCSSCourse/",
  lang: 'en-US',
  title: "HTML&CSS技术",
  description: "HTML&CSS分享的相关及文档",
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `/images/icons/favicon-16x16.png`,
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/images/icons/favicon-32x32.png`,
      },
    ],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'application-name', content: 'VuePress' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'VuePress' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/images/icons/apple-touch-icon.png` },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/images/icons/safari-pinned-tab.svg',
        color: '#3eaf7c',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  markdown: {
    lineNumbers: true,
      // markdown-it-anchor 的选项
      anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: "#" },
      // markdown-it-toc 的选项
      toc: { includeLevel: [2] },
  },
  theme: '@vuepress/default',
  themeConfig: {
    logo: 'https://avatars.githubusercontent.com/u/57422303?s=200&v=4',
    searchMaxSuggestions: 10,
    navbar: require('./nav'),
    sidebar: require('./sidebar')
  },
  
}


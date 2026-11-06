import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'AICoder Docs',
  description: 'AI 编程工具使用指南',
  cleanUrls: true,
  themeConfig: {
    nav: [{ text: '首页', link: '/' }, { text: '第一章', link: '/chapter-1/' }],
    sidebar: [
      {
        text: '入门',
        items: [
          { text: '如何使用 Codex？', link: '/chapter-1/' },
          { text: '下载安装 Codex CLI', link: '/chapter-1/install' },
          { text: '配置自定义 Provider', link: '/chapter-1/provider' }
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/' }],
    footer: { message: 'AICoder Docs', copyright: 'Released under the MIT License.' },
    search: { provider: 'local' }
  }
})

import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'AICoder Docs',
  description: 'AI 编程工具使用指南',
  cleanUrls: true,
  themeConfig: {
    nav: [{ text: '首页', link: '/' }, { text: '接入指南', link: '/chapter-1/' }],
    sidebar: [
      {
        text: '入门',
        items: [
          { text: '使用 Codex 接入 AICoder', link: '/chapter-1/' },
          { text: '1. 下载安装 Desktop / CLI', link: '/chapter-1/install' },
          { text: '2. 注册 AICoder 账号和 API', link: '/chapter-1/account' },
          { text: '3. 将 Provider 设置为 AICoder', link: '/chapter-1/provider' }
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/big-mouth-cn/aicoder-docs' }],
    footer: { message: 'AICoder Docs', copyright: 'Released under the MIT License.' },
    search: { provider: 'local' }
  }
})

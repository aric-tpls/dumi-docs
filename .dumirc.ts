import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/dumi-docs/',
  publicPath: '/dumi-docs/',
  logo: '/dumi-docs/logo.png',
  locales: [{ id: 'en-US', name: 'English' }],
  resolve: {
    codeBlockMode: 'passive',
  },
  themeConfig: {
    name: 'dumi-docs',
    description: 'dumi-docs-description',
    nav: [
      {
        title: 'Guide',
        link: '/guide/getting-started',
      },
      {
        title: 'Components',
        link: '/components',
      },
      {
        title: 'Playground',
        link: '/playground',
      },
    ],
    nprogress: true,
    socialLinks: {
      github: 'https://github.com/aric-tpls/dumi-docs',
    },
  },
  plugins: ['@umijs/plugins/dist/tailwindcss'],
  tailwindcss: {},
});

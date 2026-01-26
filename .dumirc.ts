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
    name: 'Dumi Docs',
    description: 'A dumi documentation template project.',
    nav: [
      {
        title: 'Guide',
        link: '/guide/getting-started',
      },
      {
        title: 'Components',
        link: '/components',
      },
    ],
    nprogress: true,
    socialLinks: {
      github: 'https://github.com/aric-tpls/dumi-docs',
    },
  },
  styles: [
    `
    .dumi-default-sidebar {
      --dumi-sidebar-width: 320px !important;
      width: 320px !important;
      min-width: 320px !important;
    }

    .dumi-default-header-left {
      width: 320px !important;
    }`,
  ],
});

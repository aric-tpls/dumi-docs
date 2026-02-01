"use strict";(self.webpackChunkdumi_docs=self.webpackChunkdumi_docs||[]).push([[904],{12183:function(t,e,n){n.r(e),n.d(e,{demos:function(){return o}});var a=n(75271),o={}},3173:function(t,e,n){n.r(e),n.d(e,{demos:function(){return o}});var a=n(75271),o={}},68821:function(t,e,n){n.r(e),n.d(e,{demos:function(){return o}});var a=n(75271),o={}},75867:function(t,e,n){n.r(e),n.d(e,{demos:function(){return o}});var a=n(75271),o={}},11883:function(t,e,n){n.r(e),n.d(e,{demos:function(){return o}});var a=n(75271),o={}},31256:function(t,e,n){n.r(e),n.d(e,{demos:function(){return o}});var a=n(75271),o={}},27196:function(t,e,n){var a;n.r(e),n.d(e,{demos:function(){return s}});var o=n(90228),r=n.n(o),l=n(87999),c=n.n(l),u=n(75271),s={"docs-playground-demo-counter":{component:u.memo(u.lazy(function(){return n.e(433).then(n.bind(n,32963))})),asset:{type:"BLOCK",id:"docs-playground-demo-counter",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(81957).Z},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Interactive Counter"},context:{react:a||(a=n.t(u,2))},renderOpts:{compile:function(){var p=c()(r()().mark(function m(){var i,v=arguments;return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,n.e(229).then(n.bind(n,79229));case 2:return d.abrupt("return",(i=d.sent).default.apply(i,v));case 3:case"end":return d.stop()}},m)}));function I(){return p.apply(this,arguments)}return I}()}}}},11727:function(t,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"This section is for documenting your components.",paraId:0,tocIndex:0},{value:"Organize your component documentation in this directory:",paraId:1,tocIndex:1},{value:`docs/
\u2514\u2500\u2500 components/
    \u251C\u2500\u2500 index.md           # This file
    \u251C\u2500\u2500 button.md          # Button component docs
    \u251C\u2500\u2500 input.md           # Input component docs
    \u2514\u2500\u2500 ...
`,paraId:2,tocIndex:1},{value:`---
title: ComponentName
order: 1
---

# ComponentName

Brief description of the component.

## When To Use

- Use case 1
- Use case 2

## Examples

### Basic Usage

\`\`\`tsx
import { ComponentName } from 'your-package';

<ComponentName />
`,paraId:3,tocIndex:2},{value:"Property",paraId:4,tocIndex:3},{value:"Description",paraId:4,tocIndex:3},{value:"Type",paraId:4,tocIndex:3},{value:"Default",paraId:4,tocIndex:3},{value:"prop1",paraId:4,tocIndex:3},{value:"Description",paraId:4,tocIndex:3},{value:"string",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"prop2",paraId:4,tocIndex:3},{value:"Description",paraId:4,tocIndex:3},{value:"number",paraId:4,tocIndex:3},{value:"0",paraId:4,tocIndex:3},{value:`
## Writing Component Docs

1. Create a markdown file for each component
2. Use frontmatter to set title and order
3. Include code examples with syntax highlighting
4. Document all props with a table

## Next Steps

- Explore specific component documentation
- Check out the [API Reference](/api)
`,paraId:5,tocIndex:3}]},46716:function(t,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"Learn how to customize your dumi documentation site.",paraId:0,tocIndex:0},{value:"The main configuration file is ",paraId:1,tocIndex:1},{value:".dumirc.ts",paraId:1,tocIndex:1},{value:" in the project root.",paraId:1,tocIndex:1},{value:`import { defineConfig } from 'dumi';

export default defineConfig({
  // Site base path (useful for GitHub Pages)
  base: '/dumi-docs/',

  // Public path for assets
  publicPath: '/dumi-docs/',

  // Site logo
  logo: '/dumi-docs/logo.png',

  // Locales / languages
  locales: [{ id: 'en-US', name: 'English' }],

  // Resolve configuration
  resolve: {
    codeBlockMode: 'passive', // 'passive' | 'active'
  },

  // Theme configuration
  themeConfig: {
    name: 'Your Site Name',
    description: 'Your site description',
    nav: [
      {
        title: 'Guide',
        link: '/guide/getting-started.md',
      },
    ],
    nprogress: true,
    socialLinks: {
      github: 'https://github.com/your-username/your-repo',
    },
  },

  // Custom styles
  styles: [\`/* Your custom CSS here */\`],
});
`,paraId:2,tocIndex:2},{value:"Configure the navigation menu in ",paraId:3,tocIndex:3},{value:"themeConfig.nav",paraId:3,tocIndex:3},{value:":",paraId:3,tocIndex:3},{value:`nav: [
  {
    title: 'Guide',           // Nav item title
    link: '/guide/index',     // Link to page
  },
  {
    title: 'Components',
    link: '/components/index',
  },
  {
    title: 'External',
    link: 'https://example.com', // External links work too
  },
],
`,paraId:4,tocIndex:3},{value:"Dumi automatically generates sidebars based on your file structure:",paraId:5,tocIndex:4},{value:`docs/
\u251C\u2500\u2500 guide/
\u2502   \u251C\u2500\u2500 getting-started.md    # /guide/getting-started
\u2502   \u2514\u2500\u2500 configuration.md      # /guide/configuration
\u2514\u2500\u2500 components/
    \u2514\u2500\u2500 index.md              # /components/index
`,paraId:6,tocIndex:4},{value:"Add custom styles in the ",paraId:7,tocIndex:5},{value:"styles",paraId:7,tocIndex:5},{value:" option:",paraId:7,tocIndex:5},{value:`styles: [
  \`
  .dumi-default-sidebar {
    --dumi-sidebar-width: 320px;
  }
  \`,
],
`,paraId:8,tocIndex:5},{value:"Configure code block behavior:",paraId:9,tocIndex:6},{value:`resolve: {
  // 'active' - shows React Playground for React code
  // 'passive' - plain code blocks
  codeBlockMode: 'passive',
},
`,paraId:10,tocIndex:6},{value:"Dumi supports different modes:",paraId:11,tocIndex:7},{value:"Doc Mode",paraId:12,tocIndex:7},{value:" - Standard documentation pages",paraId:12,tocIndex:7},{value:"Demo Mode",paraId:12,tocIndex:7},{value:" - Component demos with live preview",paraId:12,tocIndex:7},{value:"Site Mode",paraId:12,tocIndex:7},{value:" - General-purpose website",paraId:12,tocIndex:7},{value:"See the ",paraId:13,tocIndex:8},{value:"official dumi documentation",paraId:13,tocIndex:8},{value:" for all available options.",paraId:13,tocIndex:8}]},28533:function(t,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"Learn how to deploy your dumi documentation site.",paraId:0,tocIndex:0},{value:`npm run build
`,paraId:1,tocIndex:1},{value:"This will:",paraId:2,tocIndex:1},{value:"Build your documentation site",paraId:3,tocIndex:1},{value:"Generate PWA service worker (via workbox)",paraId:3,tocIndex:1},{value:"Output to ",paraId:3,tocIndex:1},{value:"dist/",paraId:3,tocIndex:1},{value:" directory",paraId:3,tocIndex:1},{value:"Update ",paraId:4,tocIndex:3},{value:".dumirc.ts",paraId:4,tocIndex:3},{value:":",paraId:4,tocIndex:3},{value:`export default defineConfig({
  base: '/your-repo-name/',
  publicPath: '/your-repo-name/',
});
`,paraId:5,tocIndex:3},{value:"Build and deploy:",paraId:6,tocIndex:3},{value:`npm run build

# Deploy using gh-pages
npx gh-pages -d dist
`,paraId:7,tocIndex:3},{value:"Or add a deploy script to ",paraId:8,tocIndex:3},{value:"package.json",paraId:8,tocIndex:3},{value:":",paraId:8,tocIndex:3},{value:`{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
`,paraId:9,tocIndex:3},{value:"Connect your repository to Netlify",paraId:10,tocIndex:4},{value:"Configure build settings:",paraId:10,tocIndex:4},{value:`Build command: npm run build
Publish directory: dist
`,paraId:11,tocIndex:4},{value:"Deploy automatically on push",paraId:12,tocIndex:4},{value:"Connect your repository to Vercel",paraId:13,tocIndex:5},{value:"Configure build settings:",paraId:13,tocIndex:5},{value:`Build command: npm run build
Output directory: dist
`,paraId:14,tocIndex:5},{value:"Deploy automatically on push",paraId:15,tocIndex:5},{value:"Serve the ",paraId:16,tocIndex:6},{value:"dist/",paraId:16,tocIndex:6},{value:" directory with any static file server:",paraId:16,tocIndex:6},{value:`# Using serve
npx serve dist

# Using http-server
npx http-server dist
`,paraId:17,tocIndex:6},{value:"This template includes PWA support via workbox. The service worker is automatically generated during build.",paraId:18,tocIndex:7},{value:"Edit ",paraId:19,tocIndex:8},{value:"workbox-config.cjs",paraId:19,tocIndex:8},{value:":",paraId:19,tocIndex:8},{value:`module.exports = {
  globDirectory: 'dist/',
  globPatterns: ['**/*.{js,png,svg,json,txt,css,map}'],
  swDest: 'dist/sw.js',
  runtimeCaching: [
    // Add your caching strategies
  ],
};
`,paraId:20,tocIndex:8},{value:"You can use environment variables in your documentation:",paraId:21,tocIndex:9},{value:`# .env
MY_VARIABLE=value
`,paraId:22,tocIndex:9},{value:"Access in ",paraId:23,tocIndex:9},{value:".dumirc.ts",paraId:23,tocIndex:9},{value:":",paraId:23,tocIndex:9},{value:`export default defineConfig({
  themeConfig: {
    name: process.env.MY_VARIABLE,
  },
});
`,paraId:24,tocIndex:9},{value:`npm run build
npm run preview
`,paraId:25,tocIndex:10},{value:"This serves the production build locally for testing.",paraId:26,tocIndex:10},{value:`name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 22
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
`,paraId:27,tocIndex:12}]},64500:function(t,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"Dumi Docs Template is a starting point for building documentation sites with dumi. This template comes with pre-configured tooling and best practices.",paraId:0,tocIndex:0},{value:"Node.js >= 22 (use ",paraId:1,tocIndex:1},{value:".nvmrc",paraId:2,tocIndex:1},{value:" with nvm)",paraId:1,tocIndex:1},{value:"npm, yarn, or pnpm",paraId:1,tocIndex:1},{value:`git clone https://github.com/afeiship/dumi-docs.git
cd dumi-docs
`,paraId:3,tocIndex:3},{value:`# npm
npm install

# yarn
yarn install

# pnpm
pnpm install
`,paraId:4,tocIndex:4},{value:`npm run dev
`,paraId:5,tocIndex:6},{value:"The documentation site will be available at ",paraId:6,tocIndex:6},{value:"http://localhost:8000",paraId:6,tocIndex:6},{value:`dumi-docs
\u251C\u2500\u2500 .dumirc.ts          # Dumi configuration
\u251C\u2500\u2500 docs                # Documentation files
\u2502   \u251C\u2500\u2500 index.md       # Home page
\u2502   \u251C\u2500\u2500 guide          # Guide section
\u2502   \u2514\u2500\u2500 components     # Component documentation
\u251C\u2500\u2500 public             # Static assets
\u2502   \u2514\u2500\u2500 logo.png       # Site logo
\u2514\u2500\u2500 workbox-config.cjs # PWA configuration
`,paraId:7,tocIndex:7},{value:"npm run dev",paraId:8,tocIndex:8},{value:" - Start development server",paraId:8,tocIndex:8},{value:"npm run build",paraId:8,tocIndex:8},{value:" - Build for production",paraId:8,tocIndex:8},{value:"npm run preview",paraId:8,tocIndex:8},{value:" - Preview production build",paraId:8,tocIndex:8},{value:"npm run start",paraId:8,tocIndex:8},{value:" - Alias for ",paraId:8,tocIndex:8},{value:"npm run dev",paraId:8,tocIndex:8},{value:"The main configuration is in ",paraId:9,tocIndex:9},{value:".dumirc.ts",paraId:10,tocIndex:9},{value:":",paraId:9,tocIndex:9},{value:`import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/dumi-docs/',           // Base path for deployment
  publicPath: '/dumi-docs/',     // Public path for assets
  logo: '/dumi-docs/logo.png',   // Site logo
  locales: [{ id: 'en-US', name: 'English' }],
  themeConfig: {
    name: 'Dumi Docs',           // Site name
    description: 'A dumi documentation template project.',
    nav: [...],                  // Navigation
    socialLinks: {
      github: 'https://github.com/afeiship/dumi-docs',
    },
  },
});
`,paraId:11,tocIndex:9},{value:"Create markdown files in the ",paraId:12,tocIndex:11},{value:"docs",paraId:12,tocIndex:11},{value:" directory:",paraId:12,tocIndex:11},{value:`---
title: My Page
order: 1
---

# My Page Content

Write your documentation here.
`,paraId:13,tocIndex:11},{value:"Create subdirectories to organize your documentation:",paraId:14,tocIndex:12},{value:`docs/
\u251C\u2500\u2500 guide/
\u2502   \u251C\u2500\u2500 getting-started.md
\u2502   \u251C\u2500\u2500 configuration.md
\u2502   \u2514\u2500\u2500 deployment.md
\u2514\u2500\u2500 components/
    \u251C\u2500\u2500 index.md
    \u2514\u2500\u2500 button.md
`,paraId:15,tocIndex:12},{value:"Configuration",paraId:16,tocIndex:13},{value:" - Customize your documentation site",paraId:17,tocIndex:13},{value:"Deployment",paraId:18,tocIndex:13},{value:" - Deploy your documentation site",paraId:17,tocIndex:13}]},60511:function(t,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"Welcome to the dumi-docs template guide. This section will help you get started with building your documentation site.",paraId:0,tocIndex:0},{value:"Getting Started",paraId:1,tocIndex:1},{value:" - Installation and basic usage",paraId:2,tocIndex:1},{value:"Configuration",paraId:3,tocIndex:1},{value:" - Customize your documentation site",paraId:2,tocIndex:1},{value:"Deployment",paraId:4,tocIndex:1},{value:" - Deploy your documentation site",paraId:2,tocIndex:1},{value:"Dumi Official Documentation",paraId:5,tocIndex:2},{value:"GitHub Repository",paraId:5,tocIndex:2}]},4676:function(t,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:`# Clone this template
git clone https://github.com/afeiship/dumi-docs.git

# Install dependencies
npm install

# Start development server
npm run dev
`,paraId:0,tocIndex:0},{value:`# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
`,paraId:1,tocIndex:1},{value:`
  `,paraId:2},{value:"Get Started",paraId:2},{value:`
  `,paraId:2},{value:"Show Demo",paraId:2},{value:"Guide",paraId:3,tocIndex:3},{value:" - Get started with the template",paraId:4,tocIndex:3},{value:"Configuration",paraId:5,tocIndex:3},{value:" - Customize your documentation site",paraId:4,tocIndex:3},{value:"Deployment",paraId:6,tocIndex:3},{value:" - Deploy your documentation site",paraId:4,tocIndex:3},{value:"",paraId:7,tocIndex:3}]},83760:function(t,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"Welcome to the interactive playground! Here you can explore live demos with real-time editing capabilities.",paraId:0,tocIndex:0},{value:"Live Editing",paraId:1,tocIndex:1},{value:" - Edit code and see changes immediately",paraId:1,tocIndex:1},{value:"Interactive Demos",paraId:1,tocIndex:1},{value:" - All examples are runnable and editable",paraId:1,tocIndex:1},{value:"Type-Safe",paraId:1,tocIndex:1},{value:" - Full TypeScript support",paraId:1,tocIndex:1},{value:"Best Practices",paraId:1,tocIndex:1},{value:" - Examples following industry standards",paraId:1,tocIndex:1},{value:"Here's a simple interactive counter example to get started:",paraId:2,tocIndex:2},{value:"You can create your own playground examples by creating markdown files in the ",paraId:3,tocIndex:4},{value:"playground",paraId:3,tocIndex:4},{value:" directory. Use the code block syntax with ",paraId:3,tocIndex:4},{value:"tsx",paraId:3,tocIndex:4},{value:" or ",paraId:3,tocIndex:4},{value:"jsx",paraId:3,tocIndex:4},{value:" language to create interactive demos.",paraId:3,tocIndex:4}]},81957:function(t,e){e.Z=`import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Interactive Counter</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#1890ff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        Increment
      </button>
      <button
        onClick={() => setCount(0)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#52c41a',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          marginLeft: '10px',
        }}
      >
        Reset
      </button>
    </div>
  );
};
`}}]);

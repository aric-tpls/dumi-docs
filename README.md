# dumi-docs

> A template project for building documentation sites with [dumi](https://d.umijs.org).

## Features

- ⚡️ **Dumi Powered** - Built with dumi, the excellent doc tool for component library developers
- 🚀 **PWA Ready** - Out-of-the-box PWA support with workbox
- 🔒 **Type-Safe** - Full TypeScript support
- 🛠️ **Modern Tooling** - Pre-configured with husky, commitlint, lint-staged, and prettier
- 🌐 **Easy to Deploy** - Build static sites ready for GitHub Pages, Netlify, or Vercel
- 🎨 **Customizable** - Flexible theme configuration

## Getting Started

### Installation

```bash
# Clone this template
git clone https://github.com/afeiship/dumi-docs.git

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
dumi-docs
├── .dumirc.ts          # Dumi configuration
├── docs                # Documentation files
│   ├── index.md       # Home page
│   ├── guide          # Guide section
│   └── components     # Component documentation
├── public             # Static assets
│   └── logo.png       # Site logo
└── workbox-config.cjs # PWA configuration
```

## Configuration

Edit `.dumirc.ts` to customize your documentation site:

```typescript
import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/dumi-docs/',
  publicPath: '/dumi-docs/',
  logo: '/dumi-docs/logo.png',
  themeConfig: {
    name: 'Your Site Name',
    description: 'Your site description',
    nav: [...],
    socialLinks: {
      github: 'https://github.com/your-username/your-repo',
    },
  },
});
```

## Documentation

- [Getting Started Guide](https://github.com/afeiship/dumi-docs/blob/main/docs/guide/getting-started.md)
- [Configuration](https://github.com/afeiship/dumi-docs/blob/main/docs/guide/configuration.md)
- [Deployment](https://github.com/afeiship/dumi-docs/blob/main/docs/guide/deployment.md)

## License

MIT

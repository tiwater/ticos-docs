# Ticos Documentation

This documentation site is built using [Nextra](https://nextra.site/), a Next.js-based documentation framework with the App Router.

## Adding Content

### Content Structure

All documentation content is stored in the `content` directory, organized by language:

```
content/
├── en/                  # English content
│   ├── _meta.json       # Navigation and page metadata
│   ├── index.mdx        # Homepage
│   ├── api.mdx          # API documentation
│   └── docs/            # Additional docs pages
│       ├── _meta.json   # Section navigation
│       ├── getting-started.mdx
│       └── advanced/    # Nested sections
│           ├── _meta.json
│           └── features.mdx
├── zh/                  # Chinese content
    ├── _meta.json       # Navigation structure (in Chinese)
    ├── index.mdx        # Homepage (in Chinese)
    └── ...
```

### Navigation Configuration

Each folder needs a `_meta.json` file that controls the sidebar navigation and page metadata:

```json
{
  "index": {
    "title": "Home",
    "display": "hidden"
  },
  "docs": {
    "title": "Documentation",
    "type": "page"
  },
  "api": {
    "title": "API Reference",
    "type": "page"
  },
  "advanced": {
    "title": "Advanced",
    "type": "folder"
  }
}
```

### Writing Content

Create your documentation using MDX files. Each MDX file represents a page:

````mdx
# Getting Started

This is a Markdown document with **bold text** and _italic text_.

## Installation

```bash
npm install ticos-cloud
```
````

## Usage

```jsx
import { Ticos } from "ticos-cloud";

function App() {
  return <Ticos />;
}
```

````

### Using Components

You can use React components in your MDX:

```mdx
import { Callout } from 'nextra/components'

<Callout type="info">
  This is an important note about the API.
</Callout>

## Custom Styling

You can also use Tailwind classes directly in your MDX.

<div className="bg-blue-100 p-4 rounded-md">
  This box is styled with Tailwind CSS.
</div>
````

## Local Development

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
pnpm build
```

This command generates static content and can be served using any static contents hosting service.

## Project Architecture

This project uses Next.js App Router with Nextra. The structure follows current Next.js best practices:

```
/
├── app/                     # App Router directory
│   ├── [lang]/              # Locale-specific routes
│   │   ├── [[...mdxPath]]   # Dynamic MDX content paths
│   │   ├── layout.tsx       # Layout with theming
│   │   └── styles.css       # Locale-specific styles
│   ├── _components/         # Shared components
│   ├── _dictionaries/       # Locale dictionaries
│   └── _icons/              # SVG icons as React components
├── content/                 # MDX content files
├── public/                  # Static assets
├── middleware.ts            # Internationalization middleware
├── next.config.ts           # Next.js configuration
├── mdx-components.ts        # MDX components customization
└── package.json             # Dependencies and scripts
```

## Internationalization

This documentation site supports both English and Chinese languages. The default language is Chinese (中文).

To add or update content:

1. Create matching file paths in both `content/en/` and `content/zh/` directories
2. Ensure each language folder has a proper `_meta.json` file for navigation
3. Translated pages should have the same filename but different content

## Deployment

This site is configured for deployment to Railway.app or other hosting platforms that support Next.js.

### Railway.app Deployment

1. Create a new project on Railway.app
2. Connect your GitHub repository
3. Railway will automatically detect the Next.js configuration and deploy the site

The site uses the configuration in `railway.toml` to specify build and deployment settings.

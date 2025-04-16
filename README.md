# Ticos Documentation

This documentation site is built using [Nextra](https://nextra.site/), a Next.js-based documentation framework.

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

This command generates static content into the `out` directory and can be served using any static contents hosting service.

## Deployment to Railway.app

This documentation site is configured to be deployed to Railway.app as a standalone project.

### Steps to deploy:

1. Create a new project on Railway.app
2. Connect your GitHub repository
3. Configure the project to deploy from the `docs` directory
4. Railway will automatically detect the Next.js configuration and deploy the site

The site uses the configuration in `railway.toml` to specify build and deployment settings.

## Internationalization

This documentation site supports both English and Chinese languages. The default language is Chinese (中文).

To add or update content:

1. Edit the content in the `pages` directory for English
2. Edit the content in the `pages/cn` directory for Chinese

## File Structure

```
docs/
├── pages/
│   ├── _meta.json           # Navigation structure
│   ├── index.mdx            # Homepage
│   ├── api.mdx              # API documentation
│   ├── cn/
│   │   ├── _meta.json       # Chinese navigation structure
│   │   ├── index.mdx        # Chinese homepage
│   │   └── api.mdx          # Chinese API documentation
├── public/                  # Static assets
│   ├── logo/                # Logo files
│   └── favicon.ico          # Favicon
├── theme.config.jsx         # Nextra theme configuration
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies and scripts
└── railway.toml             # Railway.app deployment configuration
```

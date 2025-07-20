# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server with hot reload
npm start

# Build for production
npm run build

# Serve production build locally
npm run serve

# Type checking
npm run typecheck

# Clear Docusaurus cache
npm run clear
```

## Architecture Overview

This is a Docusaurus-based CSS learning platform with the following key architectural components:

### Site Configuration
- `docusaurus.config.ts` - Main configuration file defining site metadata, navbar, footer, theme settings
- `sidebars.ts` - Sidebar navigation configuration using auto-generated structure from docs folder
- Uses Docusaurus v4 future flag for improved compatibility

### Content Structure
- `docs/` - Main learning content in Markdown/MDX format, auto-generates sidebar navigation
- `blog/` - Blog posts with RSS/Atom feeds enabled
- `src/pages/` - Custom React pages and static markdown pages
- Static assets in `static/img/`

### Theming & Styling
- `src/css/custom.css` - Global CSS overrides using Infima CSS framework variables
- `src/components/` - Custom React components (e.g., HomepageFeatures)
- Supports light/dark themes with CSS custom properties
- Uses CSS modules for component-specific styling

### Key Technologies
- **Docusaurus 3.8.1** - Static site generator with React-based architecture
- **React 19** - UI framework for custom components
- **TypeScript** - Type safety throughout the codebase
- **MDX** - Markdown with React component support for interactive content
- **Infima** - CSS framework optimized for content-centric websites

### Development Notes
- Hot reload enabled for development workflow
- Content is primarily markdown-based for easy authoring
- Component architecture follows Docusaurus patterns with `@theme/` imports
- Site uses auto-generated sidebars but can be customized in `sidebars.ts`
- Configuration currently contains placeholder values (title: "My Site", etc.) that should be customized for CSS Dojo branding
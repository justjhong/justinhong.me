# CLAUDE.md - Instructions for Agentic Coding

## Build Commands
- `yarn develop` - Start development server
- `yarn build` - Build for production
- `yarn serve` - Serve production build locally
- `yarn format` - Run Prettier on all JS/JSX files

## Code Style Guidelines
- **Formatting**: No semicolons, double quotes, 2-space indentation (per .prettierrc)
- **Components**: React functional components with JSX
- **Styling**: Mix of Emotion, styled-components, and SCSS
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Imports**: Group imports by external libraries, then internal components/styles
- **File Structure**: Components in `/components`, pages in `/pages`, styles in `/styles`
- **Theming**: Use ThemeContext for dark/light mode functionality
- **Errors**: Use try/catch for async operations
- **Types**: This project uses vanilla JS without TypeScript
- **Architecture**: Gatsby-based React app for personal website/portfolio
# Univer Sheet React Demo

This is a React version of the Univer.js spreadsheet demo, converted from the original Vue.js implementation.

## Features

- Full-featured spreadsheet with Univer.js
- Custom menu plugins for import, export, and save functionality
- Chinese localization support
- Chart and drawing capabilities
- Formula engine integration

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── Univer.tsx              # Main Univer component
│   └── plugins/                # Custom plugins
│       ├── controllers/        # Plugin controllers
│       ├── locale/            # Localization files
│       └── index.ts           # Plugin exports
├── App.tsx                     # Main App component
├── main.tsx                    # Application entry point
├── style.css                   # Global styles
└── utils.ts                    # Utility functions
```

## Custom Plugins

The project includes custom menu plugins for:
- **Save**: Saves the current workbook state
- **Import**: Imports Excel files into the workbook
- **Export**: Exports the workbook to Excel format

## Technologies Used

- React 18
- TypeScript
- Vite
- Univer.js ecosystem
- Less (for styling)

## License

This project is for demonstration purposes.
# work-hub-react

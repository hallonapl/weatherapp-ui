# WeatherApp.UI

WeatherApp.UI is a user interface project for a weather application. It provides a clean and intuitive interface for users to view weather forecasts and related information.

## Features

- Display weather for one of 5 selected locations.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:
  ```bash
  git clone https://github.com/yourusername/weatherapp.ui.git
  cd weatherapp.ui
  ```

2. Install dependencies:
  ```bash
  npm install
  ```

3. Start the development server:
  ```bash
  npm start
  ```

4. Open your browser and navigate to `http://localhost:3000`.

## Scripts

- `npm start`: Start the development server.
- `npm run build`: Build the project for production.
- `npm test`: Run tests.

## Folder Structure

```
weatherapp/
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Application pages
│   ├── assets/        # Static assets (images, icons, etc.)
│   └── styles/        # Global and component-specific styles
├── public/            # Public files
├── package.json       # Project metadata and dependencies
└── README.md          # Project documentation
```

## Remaining Work
- There is basically no design at the moment. This application needs a nice colour scheme.
It is built on React/Bootstrap/MUI, which gives lots of possibilities for creating a reactive design with prebuild components.
- There is a bug in the backend API, which means that dates are not serialized correctly.
Therefore the dates are interpreted as local sometimes. That needs to be fixed.
- There is very little work done with UX. Since the UI is so simple, it might be usable anyway, but there are some readability issues.
- I put no time into designing the graph for temperatures, so it is a bit small and ugly.
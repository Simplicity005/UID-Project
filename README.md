# UID-Project

A React-based frontend for the CineSphere movie discovery experience.

## Overview
This project is being rebuilt as a modern React application with client-side routing and modular components. The current implementation focuses on the frontend experience first, with backend integration planned for a later stage.

## Current Features
- Landing page with hero section
- Movie browsing page
- Movie detail view
- Login and registration pages
- Modular React components for navbar, cards, hero, and shared layout
- Mock movie data for frontend development

## Project Structure
- frontend/ - React + Vite application
  - src/components - reusable UI components
  - src/pages - page-level views
  - src/routes - route definitions
  - src/context - authentication context
  - src/data - mock data
  - src/styles - global styling

## Getting Started

### Prerequisites
- Node.js 18+ recommended
- npm

### Install dependencies
```bash
cd frontend
npm install
```

### Run locally
```bash
npm run dev
```

The app will be available at http://localhost:3000

### Build for production
```bash
npm run build
```

## Tech Stack
- React
- Vite
- React Router DOM

## Notes
This frontend is intentionally being developed first so the UI, navigation, and component structure can be established before backend and database integration.

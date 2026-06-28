# DigiTeach (React + Vite)

## Prerequisites
- Node.js (LTS recommended)
- npm

## Setup
From the repo root:

```bash
cd /home/clifford/Documents/zz/frontend
npm install
```

## Development
Start the dev server:

```bash
npm run dev -- --host 0.0.0.0 --port 5173
```

Open in your browser:
- http://localhost:5173

## Production build
```bash
npm run build
```

## Preview production build
```bash
npm run preview
```

## Notes
- Global DigiTeach styles are in `src/styles/globals.css`.
- Pages are routed via `src/routes/AppRoutes.jsx`.
- Public pages are wrapped by `src/layouts/MainLayout.jsx`.


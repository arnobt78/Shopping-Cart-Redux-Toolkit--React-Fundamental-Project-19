# Shopmate Redux Toolkit - React, Vite, TypeScript, Custom CSS Fundamental Project 19

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6)](https://www.typescriptlang.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.x-764ABC)](https://redux-toolkit.js.org/)
[![React Router](https://img.shields.io/badge/React%20Router-6.x-CA4245)](https://reactrouter.com/)

A beginner-friendly shopping cart demo built with modern frontend tooling and architecture. It is designed for learning React component design, Redux Toolkit state management, TypeScript typing patterns, and practical routing in a clean and reusable structure.

- **Live Demo:** [https://shopmate-redux-toolkit.vercel.app/](https://shopmate-redux-toolkit.vercel.app/)

---

## Project Summary

**Shopmate Redux Toolkit** is a frontend-only e-commerce/cart learning project.

It demonstrates:

- Component-driven UI with reusable cards and layout pieces.
- Global cart state with Redux Toolkit.
- Route-based pages with React Router.
- Strict TypeScript types (no `any`) for safer code.
- Vite for fast local development and production builds.

If you are learning modern React architecture, this repository is a practical reference you can run and modify quickly.

---

## Table of Contents

- [Project Summary](#project-summary)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [How the App Works](#how-the-app-works)
- [Project Structure](#project-structure)
- [Routes](#routes)
- [State Management Walkthrough](#state-management-walkthrough)
- [Component Walkthrough](#component-walkthrough)
- [TypeScript Design](#typescript-design)
- [API and Backend Information](#api-and-backend-information)
- [Environment Variables (.env)](#environment-variables-env)
- [How to Run the Project](#how-to-run-the-project)
- [Available Scripts](#available-scripts)
- [How to Reuse This in Other Projects](#how-to-reuse-this-in-other-projects)
- [Code Examples](#code-examples)
- [Keywords and Concepts](#keywords-and-concepts)
- [Troubleshooting](#troubleshooting)
- [Conclusion](#conclusion)
- [License](#license)
- [Happy Coding! 🎉](#happy-coding-)

---

## Tech Stack

- **Vite**: Fast bundler/dev server.
- **React 19**: UI rendering and component model.
- **TypeScript 5**: Static typing and safer refactoring.
- **Redux Toolkit**: Predictable and concise global state logic.
- **React Redux**: Hooks-based integration between React and Redux store.
- **React Router DOM**: Client-side routing (`/` and `/cart`).
- **ESLint 9**: Linting and code quality checks.

---

## Features

- Product listing page with static product catalog.
- Add to cart and remove from cart actions.
- Cart total and item count updates in real time.
- Header cart counter synced with global store.
- Route-level page switching with preserved state.
- Reusable presentational components (`ProductCard`, `CartCard`, `Header`).
- Custom hook for dynamic document title updates.
- SEO-ready metadata in `index.html`.

---

## How the App Works

1. App bootstraps in `src/main.tsx`.
2. Redux `Provider` wraps the app so all components can access the store.
3. Router wraps the app, enabling page routes.
4. Home page renders product list.
5. Each product card checks whether product exists in cart state.
6. Clicking "Add To Cart" dispatches `add` action.
7. Clicking "Remove" dispatches `remove` action.
8. Cart page reads `cartList` and `total` from store and renders cart cards.
9. Header always reads cart count from store for instant sync.

---

## Project Structure

```bash
shopmate-redux/
├── public/
│   ├── assets/images/        # Product images
│   ├── robots.txt
│   └── vite.svg              # App icon/logo used in metadata and header
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── ProductCard.tsx
│   │   ├── CartCard.tsx
│   │   ├── index.ts
│   │   └── *.css
│   ├── hooks/
│   │   └── useTitle.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Cart.tsx
│   │   └── index.ts
│   ├── routes/
│   │   └── AllRoutes.tsx
│   ├── store/
│   │   ├── cartSlice.ts
│   │   ├── store.ts
│   │   └── hooks.ts
│   ├── types/
│   │   └── product.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── App.css
├── index.html
├── package.json
├── tsconfig*.json
├── vite.config.ts
└── eslint.config.mjs
```

---

## Routes

| Route   | Page | Purpose                                        |
| ------- | ---- | ---------------------------------------------- |
| `/`     | Home | Shows all products and add/remove button state |
| `/cart` | Cart | Shows selected cart items and total price      |

---

## State Management Walkthrough

Global state is defined in `src/store/cartSlice.ts`:

- `cartList: Product[]` stores selected products.
- `total: number` stores total cart value.

Reducers:

- `add(state, action)`
- `remove(state, action)`

Store setup:

- `src/store/store.ts` registers `cartState` reducer.

Typed hooks:

- `src/store/hooks.ts` exports `useAppDispatch` and `useAppSelector`.

Why this matters:

- Better DX with autocompletion and type safety.
- Reusable cart logic across any component/page.
- Cleaner separation of UI and business logic.

---

## Component Walkthrough

### `Header.tsx`

- Shows logo, navigation links, and cart count.
- Uses `useAppSelector` to read `cartState.cartList.length`.

### `ProductCard.tsx`

- Receives a `product` prop.
- Checks if product is already in cart.
- Toggles between "Add To Cart" and "Remove".

### `CartCard.tsx`

- Displays product in cart view.
- Allows removing product from cart.

### `Home.tsx`

- Holds local static `products` data.
- Renders `ProductCard` list.

### `Cart.tsx`

- Reads cart list and total from global store.
- Renders all selected `CartCard` items.

### `useTitle.ts`

- Small custom hook to update document title per page.

---

## TypeScript Design

This project uses strict and explicit typings.

Core model:

```ts
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}
```

Usage examples:

- Props are typed (`ProductCardProps`, `CartCardProps`).
- Redux action payloads are typed (`PayloadAction<Product>`).
- Store selector and dispatch are strongly typed.

---

## API and Backend Information

This project currently has:

- No backend server.
- No database.
- No external API integration.

Product data is static and stored directly in `src/pages/Home.tsx`.

If you want to add backend later, typical options are:

- REST API (Node.js/Express, Laravel, Django, etc.)
- Headless CMS
- Firebase/Supabase

---

## Environment Variables (.env)

### Current status

This project does **not require any `.env` file** to run.

### Optional future usage

If you integrate APIs later, create one of these:

- `.env`
- `.env.local`

Example:

```bash
VITE_API_BASE_URL=https://api.example.com
VITE_APP_NAME=Shopmate Redux Toolkit
```

In Vite, only variables prefixed with `VITE_` are exposed to client code.

Usage example:

```ts
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
```

---

## How to Run the Project

### Prerequisites

- Node.js 18+ recommended.
- npm (comes with Node.js).

### Steps

1. Clone repository:

```bash
git clone https://github.com/arnobt78/Shopping-ReduxToolkit--React-Fundamental-Project-19.git
cd Shopping-ReduxToolkit--React-Fundamental-Project-19
```

1. Install dependencies:

```bash
npm install
```

1. Start dev server:

```bash
npm run dev
```

1. Open the local URL shown in terminal (usually `http://localhost:5173`).

---

## Available Scripts

- `npm run dev`: Run Vite dev server.
- `npm run build`: Type-check then build production assets.
- `npm run preview`: Preview production build locally.
- `npm run lint`: Run ESLint on the codebase.

---

## How to Reuse This in Other Projects

You can copy or adapt these reusable pieces:

- **Redux setup pattern**:
  - `store.ts` + typed hooks + feature slice.
- **Typed component props pattern**:
  - `interface Props` + explicit function component signature.
- **Route organization pattern**:
  - central `AllRoutes.tsx` + page barrel exports.
- **Custom hook pattern**:
  - `useTitle` style small utility hooks.

Recommended extraction order:

1. Copy `types/` models.
2. Copy `store/` and connect with `Provider`.
3. Port feature components and pages.
4. Replace static data with API data.

---

## Code Examples

### Dispatch from component

```tsx
import { add } from "../store/cartSlice";
import { useAppDispatch } from "../store/hooks";

const dispatch = useAppDispatch();
dispatch(add(product));
```

### Read typed state

```tsx
import { useAppSelector } from "../store/hooks";

const total = useAppSelector((state) => state.cartState.total);
```

### Add a new route

```tsx
<Route path="/wishlist" element={<Wishlist />} />
```

---

## Keywords and Concepts

- Redux Toolkit
- Global State Management
- Slice Reducers
- Typed React Hooks
- React Router
- Vite Build Tool
- TypeScript Strict Mode
- Reusable Components
- Frontend Architecture
- Educational React Project

---

## Troubleshooting

### Port already in use

Use a different port:

```bash
npm run dev -- --port 5174
```

### Lint issues

Run:

```bash
npm run lint
```

### Build issues

Run a clean install:

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## Conclusion

This project is a complete and clean learning resource for modern React with Redux Toolkit and TypeScript.

You can use it to:

- Understand end-to-end state flow.
- Practice typed React patterns.
- Learn reusable frontend architecture.
- Extend into real API-backed commerce features.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

---

## Happy Coding! 🎉

This is an **open-source project** - feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊

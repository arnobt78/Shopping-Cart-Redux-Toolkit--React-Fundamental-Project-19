# Shopmate Redux Toolkit - React, Vite, TypeScript Fundamental Project 19

- **Live Demo:** []()

---

## 📚 Table of Contents

- [Project Summary](#-project-summary)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Installation](#installation)
  - [Scripts](#scripts)
- [Redux Toolkit Overview](#-redux-toolkit-overview)
- [Key Concepts & Keywords](#-key-concepts--keywords)
- [Core Functionalities & Walkthrough](#-core-functionalities--walkthrough)
- [Examples](#-examples)
- [Learning Resources](#-learning-resources)
- [Conclusion](#-conclusion)
- [Happy Coding!](#-happy-coding)

---

## 🏆 Features

- Modern React UI with responsive design
- Global state management with Redux Toolkit
- Product listing and shopping cart functionality
- Dynamic routing with React Router DOM
- Code splitting and performance optimization
- Well-structured and scalable codebase

---

## ⚙️ Technology Stack

- **React** (18.x)
- **Redux** & **Redux Toolkit** (State management)
- **React-Redux** (Redux bindings for React)
- **React Router DOM** (Routing)
- **Jest** / **React Testing Library** (Testing)
- **Node.js** (required for local development)
- **HTML5 & CSS3** (Styling)
- **Create React App** (Project setup)

See [`package.json`](https://github.com/arnobt78/Shopmate--React-ReduxToolkit/blob/main/package.json) for the full list of dependencies.

---

## 🗂️ Project Structure

An overview of the project's directory layout:

```
Shopmate--React-ReduxToolkit/
├── public/
├── src/
│   ├── assets/           # Images and static assets
│   ├── components/       # Reusable React components (UI & containers)
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Top-level pages/views (e.g., Home, Cart)
│   ├── routes/           # Route definitions and helpers
│   ├── store/            # Redux slices, reducers, and store setup
│   ├── App.js            # Main app component (routing & providers)
│   ├── App.css           # Global styles
│   ├── index.js          # Entry point, renders <App /> & Redux Provider
│   └── index.css         # Base CSS
├── package.json
├── README.md
└── ...
```

> **Note:** For a detailed, up-to-date file listing, visit the [src directory on GitHub](https://github.com/arnobt78/Shopmate--React-ReduxToolkit/tree/main/src)

---

## 🚀 Getting Started

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/arnobt78/Shopmate--React-ReduxToolkit.git
   cd Shopmate--React-ReduxToolkit
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Install Node.js if you don't have it:**
   - Download and install from [nodejs.org](https://nodejs.org/en/)

4. **(Optional) Install React Router:**

   ```bash
   npm install react-router-dom
   ```

   See more at [React Router Docs](https://reactrouter.com/en/main)

5. **(Optional) Install Redux and Redux Toolkit:**

   ```bash
   npm install react-redux@8
   npm install @reduxjs/toolkit
   ```

   See [Redux Toolkit docs](https://redux-toolkit.js.org/)

---

### Scripts

Available NPM scripts in this project:

- `npm start` — Run the app in development mode ([http://localhost:3000](http://localhost:3000))
- `npm test` — Launch the test runner in watch mode
- `npm run build` — Build the app for production in the `build` folder
- `npm run eject` — Ejects the app (not reversible!)

For advanced scripts and troubleshooting, see the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

---

## 🧠 Redux Toolkit Overview

- **Redux**: A pattern and library for managing and updating application state using "actions".
- **Slice**: A collection of Redux reducer logic and actions for a feature, typically defined together in a slice file.
- **Action**: A plain JS object with a `type` field, describing something that happened in the app.
- **Reducer**: Specifies how state changes in response to actions.
- **Store**: Holds the application state and provides methods for dispatching actions.
- **useSelector**: Extract data from the Redux store state.
- **useDispatch**: Dispatch actions to the Redux store.
- **Provider**: Makes the Redux store available to nested components.

**Workflow:**

1. Create a slice: define name, initialState, and reducers.
2. Export actions and reducers.
3. Register reducers in `store.js`.
4. Wrap `<App />` with `<Provider store={store}>`.
5. Use `useDispatch` to send actions and `useSelector` to access state.

---

## 🏷️ Key Concepts & Keywords

- **Global State Management**
- **Redux Toolkit Slices**
- **Action Creators**
- **Reducers**
- **Selectors**
- **Provider Pattern**
- **React Router**
- **Hooks (`useSelector`, `useDispatch`)**
- **Responsive Design**
- **Component Reusability**
- **Testing**

---

## 🔍 Core Functionalities & Walkthrough

### App Flow

- **Home Page:** Lists available products using data from Redux store.
- **Product Details:** Displays details when a product is selected.
- **Add to Cart:** Users can add products to the cart using Redux actions.
- **Cart Page:** Shows items added to the cart, allows item removal or quantity adjustment.
- **Routing:** Managed with React Router (`src/routes`) for multiple pages.
- **Global State:** Cart and product data managed globally with Redux Toolkit slices.
- **UI Components:** Modular components for product cards, cart items, navigation, etc.

### Redux Example

```js
// src/store/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      /* ... */
    },
    removeFromCart: (state, action) => {
      /* ... */
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
```

In your component:

```js
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const products = useSelector((state) => state.products);
const dispatch = useDispatch();

const handleAdd = (product) => {
  dispatch(addToCart(product));
};
```

---

## 🧩 Examples

#### Example: Adding a Product to Cart

```js
// In a ProductCard component
<button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
```

#### Example: Selecting Cart State

```js
const cartItems = useSelector((state) => state.cart);
```

#### Example: Routing

```js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
<Router>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/cart" element={<CartPage />} />
  </Routes>
</Router>;
```

---

## 📖 Learning Resources

- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Redux Docs](https://react-redux.js.org/)
- [React Router Docs](https://reactrouter.com/)
- [Create React App Docs](https://facebook.github.io/create-react-app/docs/getting-started)
- [Redux DevTools Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

---

## 📝 Conclusion

Shopmate is a robust foundation for learning and sharing modern React and Redux application architecture. It demonstrates best practices in state management, component structure, and project organization.

Feel free to fork, contribute, or use as a template for your own projects!

---

## 🎉 Happy Coding! 🚀

Thank you for checking out Shopmate! If you have questions or suggestions, feel free to open an issue or submit a pull request.

---

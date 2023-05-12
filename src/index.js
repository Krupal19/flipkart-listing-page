import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Cart from './components/Cart';
import Error from "./components/Error";
import TodaysDeal from './components/TodaysDeal';
import Root from './components/Root';
import Product from './components/Product';
// import ThemeContextWrapper from './theme/ThemeWrapper';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/deals",
        element: <TodaysDeal />,
      },
      {
        path: "/products/:productID",
        element: <Product />,
      },
    ]
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <ThemeContextWrapper>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

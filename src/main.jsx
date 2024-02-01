import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FavoriteProvider } from "./Context/FavoriteContext";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Produit from "./Pages/Produit";
import Favorite from "./Pages/Favorite";
import Cash from "./Pages/Cash";

import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Menu",
        element: <Menu />,
      },
      {
        path: "/Produit",
        element: <Produit />,
      },
      {
        path: "/Favorite",
        element: <Favorite />,
      },
      {
        path: "/Cash",
        element: <Cash />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <FavoriteProvider>
      <RouterProvider router={router} />
    </FavoriteProvider>
  </React.StrictMode>
);

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./pages/Home";
import CardDtls from "./pages/CardDtls";
import Donation from "./pages/Donation";
import Statistics from "./pages/Statistics";

const router = createBrowserRouter([
  {
    path: "/", element: <Root />,
    children: [
      { loader: () => fetch('../card.json'), path: "/", element: <Home /> },
      { loader: () => fetch('../card.json'), path: "/card/:id", element: <CardDtls /> },
      { loader: () => fetch('../card.json'), path: "/donation", element: <Donation /> },
      { path: "/statistics", element: <Statistics /> }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
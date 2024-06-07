import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./components/Navigation/Home/Home";
import Blog from "./components/blog/Blog";



const router = createBrowserRouter([
  {path: "/", element: <Home/>,},
  {path: "blog", element: <Blog/>,},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />   
  </React.StrictMode>
);
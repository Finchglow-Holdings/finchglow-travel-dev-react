import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/errorMessage/errorPage";
import "./index.css";
import App from "./App";
import About from "./components/about_us"; // Ensure this is the correct import statement
import Services from "./components/service";
import Blog from "./components/blog";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about", // Path should be lowercase and match the link
    element: <About />,
  },
  {
    path: "services", // Path should be lowercase and match the link
    element: <Services />,
  },
  {
    path: "blog", // Path should be lowercase and match the link
    element: <Blog />,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

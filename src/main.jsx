import ReactDOM from "react-dom/client";
import App from "./App";
import Country from "./Components/Country";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
  {
    path: "country/:id",
    element: <Country />,
  },
  // Add more routes here as needed
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

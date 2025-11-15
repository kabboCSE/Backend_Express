import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Users from "./components/Users.jsx";
import UserDetail from "./components/UserDetail.jsx";
import UpdateUser from "./components/UpdateUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "users/:id",
    loader: ({ params }) => fetch(`http://localhost:4000/users/${params.id}`),
    Component: UserDetail,
    //     URL e jei user _id thakbe (example: /users/674fa2...), sheita :id e dhore.
    // loader function run hoy route e ashar age.
    // loader fetch kore user er detail data server theke:
    // params.id = URL er dynamic part.
    // Loader e fetch kora data React Router automatically component e pathay via useLoaderData().
  },
  {
    path: "update/:id",
    loader: ({ params }) => fetch(`http://localhost:4000/users/${params.id}`),
    Component: UpdateUser,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);

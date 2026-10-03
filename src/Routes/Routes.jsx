import { createBrowserRouter } from "react-router";
import AdminLayout from "../Layouts/AdminLayout";
import Dashboard from "../Pages/Dashboard";
import Products from "../Pages/Products";
import Orders from "../Pages/Orders";
import NotFound from "../Pages/notFound";
import Users from "../Pages/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;

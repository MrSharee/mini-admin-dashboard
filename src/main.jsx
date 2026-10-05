import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router/dom";
import router from "./Routes/Routes.jsx";
import AppToaster from "./config/toast.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
    <AppToaster />
  </>,
);

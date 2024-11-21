import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from 'react-helmet-async'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer></ToastContainer>
      <HelmetProvider><RouterProvider router={router}></RouterProvider></HelmetProvider>
    </AuthProvider>
  </StrictMode>
);

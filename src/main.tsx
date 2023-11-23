import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./helpers/router";
import ToastProvider from "./components/providers/ToastProvider";
import { I18nextProvider } from "react-i18next";
import i18n from "./components/providers/i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ToastProvider>
        <RouterProvider router={router} />
      </ToastProvider>
    </I18nextProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./helpers/router";
import ToastProvider from "./components/providers/ToastProvider";
import { I18nextProvider } from "react-i18next";
import i18n from "./components/providers/i18n";
import ReactGA from "react-ga4";

const gaKey = import.meta.env.VITE_GOOGLE_ANALYTICS_KEY;

ReactGA.initialize(gaKey);

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
  title: `Visited ${window.location.pathname}`,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ToastProvider>
        <RouterProvider router={router} />
      </ToastProvider>
    </I18nextProvider>
  </React.StrictMode>
);

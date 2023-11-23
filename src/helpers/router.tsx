import { Navigate, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./constants";
import { RootLayout } from "../components/layout/RootLayout";
import ErrorBoundary from "../components/common/ErrorBoundary";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Work from "../pages/Work";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES.home} replace />,
      },
      {
        path: ROUTES.home,
        element: <Home />,
      },
      {
        path: ROUTES.about,
        element: <About />,
      },
      {
        path: ROUTES.work,
        element: <Work />,
      },
      {
        path: ROUTES.contact,
        element: <Contact />,
      },
    ],
  },
]);

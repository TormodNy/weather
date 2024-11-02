import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/pages/error/ErrorPage.tsx";
import DashboardPage from "./components/pages/dashboard/DashboardPage.tsx";
import DetailsPage from "./components/pages/details/DetailsPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <DashboardPage />,
            },
            {
                path: "/details",
                element: <DetailsPage />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);

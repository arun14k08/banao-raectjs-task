import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import AddListing from "./pages/AddListing";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <LandingPage />,
            },
            {
                path: "/add-new",
                element: <AddListing />,
            },
        ],
    },
]);

export default Router;

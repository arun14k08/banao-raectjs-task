import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage/LandingPage";
import AddListing from "./pages/AddListing/AddListing";

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

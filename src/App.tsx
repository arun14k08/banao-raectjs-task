import { RouterProvider } from "react-router-dom";
import Router from "./Router";
const App = () => {
    return (
        <RouterProvider router={Router} fallbackElement={<h1>Loading...</h1>} />
    );
};

export default App;

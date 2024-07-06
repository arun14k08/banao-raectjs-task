import { Outlet } from "react-router";

const AppLayout = () => {
    return (
        <div>
            <header>Header</header>
            <body>
                <Outlet />
            </body>
            <footer>Footer</footer>
        </div>
    );
};

export default AppLayout;

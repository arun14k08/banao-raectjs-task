import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AppContextProvider } from "../context/AppContextProvider";
import ReturnToTop from "../components/ReturnToTop";

const AppLayout = () => {
    return (
        <div>
            <AppContextProvider>
                <Header />
                <Outlet />
                <Footer />
                <ReturnToTop />
            </AppContextProvider>
        </div>
    );
};

export default AppLayout;

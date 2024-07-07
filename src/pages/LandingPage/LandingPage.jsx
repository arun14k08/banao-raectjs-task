import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AddNewCard from "./components/AddNewCard";
import Testimonials from "./components/Testimonials";
import GetStarted from "./components/GetStarted";

const LandingPage = () => {
    return (
        <div>
            <Hero />
            <Features/>
            <AddNewCard/>
            <Testimonials/>
            <GetStarted/>
        </div>
    );
};

export default LandingPage;

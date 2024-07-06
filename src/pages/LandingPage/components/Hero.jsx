import React from "react";
import SignInForm from "./SignInForm";
import ContinueWith from "./ContinueWith";
import { HeroImage1, HeroImage2 } from "../../../assets/ImageAssets";

const Hero = () => {
    return (
        <div className="px-6 pt-8 flex flex-col gap-12 bg-[#F7F5F9]">
            <section className="grid gap-4">
                <h3 className="font-semibold italic text-[18px]">
                    Explore your <span className="text-[#0096C8]">hobby</span>{" "}
                    or <span className="text-[#8064A2]"> passion</span>
                </h3>
                <p className="text-[12px] font-light leading-[22px]">
                    Sign-in to interact with a community of fellow hobbyists and
                    an eco-system of experts, teachers, suppliers, classes,
                    workshops, and places to practice, participate or perform.
                </p>
            </section>
            <div className="flex flex-col gap-6">
                <SignInForm />
                <ContinueWith />
            </div>
            <div className="flex justify-between">
                <img src={HeroImage1} alt="image-1" className="max-w-[150px]"/>
                <img src={HeroImage2} alt="image-2" className="max-w-[150px]"/>
            </div>
        </div>
    );
};

export default Hero;

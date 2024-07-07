import React from "react";
import SignInForm from "./SignInForm";
import ContinueWith from "./AuthenticateWith";
import { heroImage1, heroImage2 } from "../../../assets/ImageAssets";

const Hero = () => {
    return (
        <div className="px-6 md:px-[100px] pt-8 md:pt-[106px] grid grid-cols-1 lg:grid-cols-3 gap-12 bg-[#F7F5F9]">
            <section className="grid md:col-span-2 gap-4">
                <h3 className="font-semibold italic text-[18px] md:text-4xl text-wrap">
                    Explore your <span className="text-[#0096C8]">hobby</span>{" "}
                    or <span className="text-[#8064A2]"> passion</span>
                </h3>
                <p className="text-xs md:text-sm font-light leading-[22px] md:leading-[30px]">
                    Sign-in to interact with a community of fellow hobbyists and
                    an eco-system of experts, teachers, suppliers, classes,
                    workshops, and places to practice, participate or perform.
                    Your hobby may be about visual or performing arts, sports,
                    games, gardening, model making, cooking, indoor or outdoor
                    activities…
                </p>
                <p className="text-xs sm:text-sm font-light leading-[22px] md:leading-[30px] hidden md:block">
                    If you are an expert or a seller, you can Add your Listing
                    and promote yourself, your students, products, services or
                    events. Hop on your hobbyhorse and enjoy the ride.
                </p>
                <div className="justify-between hidden sm:flex sm:flex-wrap">
                    <img
                        src={heroImage1}
                        alt="image-1"
                        className="w-full max-w-[150px] sm:max-w-[180px] md:max-w-[300px]"
                    />
                    <img
                        src={heroImage2}
                        alt="image-2"
                        className="w-full max-w-[150px] sm:max-w-[180px] md:max-w-[300px]"
                    />
                </div>
            </section>

            <div className="flex flex-col gap-6 col-span-1 mx-auto">
                <SignInForm />
            </div>
            <div className="flex justify-between sm:hidden">
                <img
                    src={heroImage1}
                    alt="image-1"
                    className="max-w-[150px] sm:max-w-[180px]"
                />
                <img
                    src={heroImage2}
                    alt="image-2"
                    className="max-w-[150px] sm:max-w-[180px]"
                />
            </div>
        </div>
    );
};

export default Hero;

import React from "react";
import { PlaceIcon, PlayIcon, Slider, TestimonialIcon } from "../../../assets/SVGAssets";
import { profileImage } from "../../../assets/ImageAssets";

const Testimonials = () => {
    return (
        <div className="py-12 px-6 bg-white">
            <div className="py-6 px-6 flex flex-col gap-2 items-center bg-[#F7F5F9] rounded-lg">
                <div className="flex gap-2">
                    <TestimonialIcon />
                    <h2 className="font-semibold text-lg">Testimonials</h2>
                </div>
                <p className="font-light text-xs text-center">
                    In a fast growing and ever changing city like Bangalore, it
                    sometimes becomes very difficult to find or connect with
                    like minded people. Websites like hobbycue.com is a great
                    service which helps me get in touch with, communicate,
                    connect, and exchange ideas with other dancers. It also
                    provides the extra benefit of finding products and services
                    that I can avail, which I can be assured is going to be of
                    great quality as it comes recommended by people of the
                    hobbycue community. To have discussions, to get visibility,
                    and to be able to safely explore various hobbies and
                    activities in my city, all under one roof, is an excellent
                    idea and I highly recommend it.
                </p>
                <div className="flex gap-2 mt-3 items-center justify-center">
                    <img
                        src={profileImage}
                        alt="profile"
                        className="max-w-[60px]"
                    />
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-[#8064A2]">
                            Shubha Nagarajan
                        </h3>
                        <p className="text-xs font-normal text-[#0096C8]">
                            Classical Dancer
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 bg-[#CCC1DA] rounded-lg p-3 items-center">
                    <PlayIcon />
                    <div className="flex gap-3 items-center">
                    <Slider/>
                    <p className="text-[8px] text-[#8064A2]">0:00</p>
                    </div>
                    <img src={profileImage} alt="profile" className="max-w-[40px]"/>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;

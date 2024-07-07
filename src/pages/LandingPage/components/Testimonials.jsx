import React from "react";
import {
    PlaceIcon,
    PlayIcon,
    Slider,
    TestimonialIcon,
} from "../../../assets/SVGAssets";
import { profileImage } from "../../../assets/ImageAssets";

const Testimonials = () => {
    return (
        <div className="py-12 px-6 md:p-[100px] bg-white">
            <div className="p-6 md:p-[40px] flex flex-col gap-2 md:gap-8 items-center md:items-start bg-[#F7F5F9] rounded-lg">
                <div className="flex gap-2">
                    <TestimonialIcon />
                    <h2 className="font-semibold text-lg md:text-2xl">
                        Testimonials
                    </h2>
                </div>
                <p className="font-light text-xs md:text-lg text-center md:text-left">
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
                <div className="flex flex-col flex-wrap justify-center md:flex-row-reverse gap-2 md:gap-[80px] items-center w-full">
                    <div className="flex gap-2 mt-3 items-center justify-center">
                        <img
                            src={profileImage}
                            alt="profile"
                            className="max-w-[60px] md:max-w-[100px]"
                        />
                        <div className="flex flex-col gap-2">
                            <h3 className="font-semibold text-[#8064A2] md:text-[18px]">
                                Shubha Nagarajan
                            </h3>
                            <p className="text-xs font-normal text-[#0096C8] md:text-[14px]">
                                Classical Dancer
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 md:gap-[40px] bg-[#CCC1DA] rounded-lg p-3 md:p-[30px] items-center">
                        <div className="w-[24px] md:w-[40px]">
                            <PlayIcon />
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="bg-white rounded-sm h-[2px]  w-[127px] md:w-[275px] lg:w-[468px] flex justify-start items-center">
                                <div className="rounded-full size-2 lg:size-3 bg-[#8064A2]">&nbsp;</div>
                                &nbsp;</div>
                            <p className="text-[8px] md:text-sm text-[#8064A2]">
                                0:00
                            </p>
                        </div>
                        <img
                            src={profileImage}
                            alt="profile"
                            className="max-w-[40px] md:max-w-[60px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;

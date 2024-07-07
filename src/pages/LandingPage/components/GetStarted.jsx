import React from "react";
import {
    getStartedImage1,
    getStartedImage2,
} from "../../../assets/ImageAssets";

const GetStarted = () => {
    return (
        <div className="bg-[#F7FDFF] pt-12 pl-6 md:p-[100px] pb-4">
            <h2 className="font-medium italic text-lg md:text-4xl mb-6 md:mb-8">
                Your
                <span className="text-[#8064A2]"> Hobby</span>, Your
                <span className="text-[#0096C8]"> Community...</span>
            </h2>
            <button className="bg-[#8064a2] rounded-lg py-1 md:py-3 px-3 md:px-4 text-sm md:text-[20px] font-semibold leading-[20px] text-white">
                Get started
            </button>
            <div className="flex sm:flex-col xl:flex-row gap-4 md:gap-[70px] mt-12 md:mt-[100px]">
                <img
                    src={getStartedImage1}
                    alt="get-started-image-1"
                    className="max-w-[133px] md:max-w-[350px] lg:max-w-[520px]"
                />
                <img
                    src={getStartedImage2}
                    alt="get-started-image-1"
                    className="max-w-[160px] md:max-w-[350px] lg:max-w-[638px]"
                />
            </div>
        </div>
    );
};

export default GetStarted;

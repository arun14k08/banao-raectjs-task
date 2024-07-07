import React from "react";
import {
    getStartedImage1,
    getStartedImage2,
} from "../../../assets/ImageAssets";

const GetStarted = () => {
    return (
        <div className="bg-[#F7FDFF] pt-12 pl-6 pb-4">
            <h2 className="font-medium italic text-lg mb-6">
                Your
                <span className="text-[#8064A2]"> Hobby</span>, Your
                <span className="text-[#0096C8]"> Community...</span>
            </h2>
            <button className="bg-[#8064a2] rounded-lg py-1 px-3 text-sm font-semibold leading-[20px] text-white">
                Get started
            </button>
            <div className="flex gap-4 mt-12">
                <img
                    src={getStartedImage1}
                    alt="get-started-image-1"
                    className="max-w-[133px]"
                />
                <img
                    src={getStartedImage2}
                    alt="get-started-image-1"
                    className="max-w-[160px]"
                />
            </div>
        </div>
    );
};

export default GetStarted;

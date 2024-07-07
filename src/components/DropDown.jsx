import { useState } from "react";
import { ArrowIcon, ExploreIcon, HobbiesIcon } from "../assets/SVGAssets";

const Explore = () => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    return (
        <div className="relative">
            <div
                className="flex gap-1 items-center cursor-pointer"
                onClick={() => setIsDropDownOpen((prev) => !prev)}
            >
                <ExploreIcon />
                <span>Explore</span>
                <span
                    className={`transition-all ${
                        isDropDownOpen ? "" : "rotate-180"
                    }`}
                >
                    <ArrowIcon />
                </span>
            </div>
            {isDropDownOpen && (
                <div className="absolute top-[calc(100%_+_26px)] bg-white rounded-lg rounded-t-none overflow-hidden">
                    <div className="text-sm text-nowrap p-3 border-b-[2px] border-[#CED4DA]">
                        People - Community
                    </div>
                    <div className="text-sm text-nowrap p-3 border-b-[2px] border-[#CED4DA]">
                        Places - Venues
                    </div>
                    <div className="text-sm text-nowrap p-3 border-b-[2px] border-[#CED4DA]">
                        Programs - Events
                    </div>
                    <div className="text-sm text-nowrap p-3 border-b-[2px] border-[#CED4DA]">
                        Products - Store
                    </div>
                    <div className="text-sm text-nowrap p-3 border-b-[2px]">
                        Blogs
                    </div>
                </div>
            )}
        </div>
    );
};
export const Hobbies = () => {
    return (
        <div className="relative cursor-pointer flex gap-1 items-center">
            <HobbiesIcon />
            <span>Hobbies</span>
            <span>
                <ArrowIcon />
            </span>
        </div>
    );
};

export const DropDown = { Explore: Explore, Hobbies: Hobbies };

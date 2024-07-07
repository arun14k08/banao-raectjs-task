import React from "react";
import { PeopleIcon } from "../assets/SVGAssets";
import { Link } from "react-router-dom";

const Card = ({
    title = "Title",
    content = "Content",
    buttonText = "Btn-text",
    Icon = PeopleIcon,
    link = "#",
    isButtonRequired = true,
}) => {
    return (
        <div className="rounded-lg border-[2px] border-[#CED4DA] flex flex-col  gap-3 md:gap-4 items-center md:items-start p-6 md:p-[44px]">
            <h3 className="font-semibold text-[18px] md:text-[24px] flex gap-2 items-center justify-center">
                <Icon />
                <span>{title}</span>
            </h3>
            <p className="font-light text-[12px] md:text-[18px] leading-[20px] md:leading-normal text-center md:text-left">
                {content}
            </p>
            {isButtonRequired && (
                <Link to={link}>
                    <button className="py-2 px-4 rounded-lg border-[2px] border-[#8064A2] text-[#8064A2] w-full md:max-w-[122px] hover:text-white hover:bg-[#8064A2] transition-all">
                        {buttonText}
                    </button>
                </Link>
            )}
        </div>
    );
};

export default Card;

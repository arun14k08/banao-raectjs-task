import React from "react";
import { PeopleIcon } from "../assets/SVGAssets";

const Card = ({
    title = "Title",
    content = "Content",
    buttonText = "Btn-text",
    Icon = PeopleIcon,
}) => {
    return (
        <div className="rounded-lg border-[2px] border-[#CED4DA] flex flex-col justify-between gap-3 items-center p-6">
            <h3 className="font-semibold text-[18px] flex gap-2 items-center justify-center">
                <Icon />
                <span>{title}</span>
            </h3>
            <p className="font-light text-[12px] leading-[20px] text-center">
                {content}
            </p>
            <button className="py-2 rounded-lg border-[2px] border-[#8064A2] text-[#8064A2] w-full">
                {buttonText}
            </button>
        </div>
    );
};

export default Card;

import React, { useState } from "react";
import { PeopleIcon } from "../assets/SVGAssets";
import { Link } from "react-router-dom";

const Card = ({
    title = "Title",
    content = "Content",
    buttonText = "Btn-text",
    Icon = PeopleIcon,
    link = "#",
    isButtonRequired = true,
    borderColor = "#cad0d6",
    bgColor = "white",
    iconColor = "#ccc",
    buttonColor = "#8064a2",
    hoverChange = false,
}) => {
    const [finalIconColor, setFinalIconColor] = useState(iconColor);
    return (
        <div
            style={{ "--border-clr": bgColor, "--hover-clr": bgColor }}
            className={`rounded-lg border-[2px] flex flex-col  gap-3 md:gap-4 items-center md:items-start p-6 md:p-[44px] cursor-pointer  transition-colors duration-200 ${
                hoverChange ? "hover:text-[white] hover:bg-[--hover-clr] border-[--border-clr]" : ""
            }`}
            onMouseOver={() => {
                if (hoverChange) {
                    setFinalIconColor("white");
                }
            }}
            onMouseLeave={() => {
                if (hoverChange) {
                    setFinalIconColor(iconColor);
                }
            }}
        >
            <h3 className="font-semibold text-[18px] md:text-[24px] flex gap-2 items-center justify-center">
                <Icon iconColor={finalIconColor} />
                <span>{title}</span>
            </h3>
            <p className="font-light text-[12px] md:text-[18px] leading-[20px] md:leading-normal text-center md:text-left">
                {content}
            </p>
            {isButtonRequired && (
                <Link to={link}>
                    <button
                        style={{ borderColor: buttonColor }}
                        className="py-2 px-4 rounded-lg border-[2px] w-full md:max-w-[122px] hover:text-white hover:bg-[#8064A2] transition-all"
                    >
                        {buttonText}
                    </button>
                </Link>
            )}
        </div>
    );
};

export default Card;

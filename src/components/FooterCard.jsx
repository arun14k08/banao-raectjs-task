import React, { useState } from "react";
import { ArrowIcon } from "../assets/SVGAssets";

const FooterCard = ({
    title = "title",
    links = [{ id: "default", text: "default" }],
}) => {
    const [isCardOpen, setIsCardOpen] = useState(true);
    const toggleCard = () => {
        setIsCardOpen((prev) => !prev);
    };
    return (
        <div className="flex flex-col gap-3">
            <header
                className={`flex justify-between transition-all`}
                onClick={() => toggleCard()}
            >
                <h1 className="font-bold text-sm leading-[18px]">{title}</h1>
                <span
                    className={`transition-all ${
                        isCardOpen ? "" : "rotate-180"
                    }`}
                >
                    <ArrowIcon />
                </span>
            </header>
            {!isCardOpen ? null : (
                <div className="flex flex-col gap-2">
                    {links.map((link) => {
                        return (
                            <p
                                className="text-xs leading-[18px] text-[#6D747A]"
                                key={link.id}
                            >
                                {link.text}
                            </p>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default FooterCard;

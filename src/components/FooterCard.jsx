import React, { useEffect, useState } from "react";
import { ArrowIcon } from "../assets/SVGAssets";

const FooterCard = ({
    title = "title",
    links = [{ id: "default", text: "default" }],
}) => {
    const [isCardOpen, setIsCardOpen] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const toggleCard = () => {
        setIsCardOpen((prev) => !prev);
    };
    useEffect(() => {
        const event = window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth);
        });
        return () => window.removeEventListener("resize",event);
    }, []);
    return (
        <div className="flex flex-col gap-3 mb-8">
            <header className={`flex justify-between transition-all`}>
                <h1 className="font-bold text-sm leading-[18px]">{title}</h1>
                {windowWidth < 768 && (
                    <span
                        onClick={() => toggleCard()}
                        className={`transition-all p-1 ${
                            isCardOpen ? "" : "rotate-180"
                        }`}
                    >
                        <ArrowIcon />
                    </span>
                )}
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

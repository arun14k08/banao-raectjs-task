import React, { useState } from "react";
import { ReturnToTopIcon } from "../assets/SVGAssets";
import { Link } from "react-router-dom";

const ReturnToTop = () => {
    const [arrowColors, setArrowColors] = useState({
        bgColor: "white",
        arrowColor: "#939CA3",
    });
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div
            className="fixed bottom-1 right-1 cursor-pointer"
            onMouseOver={() => {
                setArrowColors({
                    bgColor: "#8064A2",
                    arrowColor: "white",
                });
            }}
            onMouseLeave={() =>
                setArrowColors({
                    bgColor: "white",
                    arrowColor: "#939CA3",
                })
            }
            onClick={() => scrollToTop()}
        >
            <ReturnToTopIcon {...arrowColors} />
        </div>
    );
};

export default ReturnToTop;

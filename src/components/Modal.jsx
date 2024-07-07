import React from "react";
import { logoMin } from "../assets/ImageAssets";
import { CloseIcon } from "../assets/SVGAssets";
import SignInForm from "../pages/LandingPage/components/SignInForm";

const Modal = ({ setIsModalOpen }) => {
    return (
        <div className="fixed inset-0 z-[99999] bg-white">
            <header className="flex py-2 px-5 justify-between shadow-lg items-center bg-white">
                <img src={logoMin} alt="logo" />
                <span onClick={() => setIsModalOpen(false)}>
                    <CloseIcon />
                </span>
            </header>
            <div className="p-6">
                <SignInForm />
            </div>
        </div>
    );
};

export default Modal;

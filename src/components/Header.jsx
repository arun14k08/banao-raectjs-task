import React, { useContext } from "react";
import { logoImage } from "../assets/ImageAssets";
import {
    BellIcon,
    BookMarksIcon,
    CartIcon,
    CloseIcon,
    MenuIcon,
    SearchIcon,
} from "../assets/SVGAssets";
import { AppContext } from "../context/AppContextProvider";
import { DropDown } from "./DropDown";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Header = () => {
    const { isMenuOpen, setIsMenuOpen } = useContext(AppContext);
    return (
        <header className="flex py-2 px-5 justify-between shadow-lg items-center">
            <Link to={"/"}>
                <img
                    src={logoImage}
                    alt="logo"
                    className="w-[156px] md:w-[293px]"
                />
            </Link>
            <div className="hidden lg:block">
                <span className="flex">
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="py-2 px-4 border-[2px] border-[#EDEBF0] rounded-lg rounded-r-none"
                    />
                    <div className="bg-[#8064A2] text-white border-[2px] border-[#8064A2] rounded-lg rounded-l-none flex justify-center items-center px-3">
                        <SearchIcon color="white" />
                    </div>
                </span>
            </div>
            <div className="hidden lg:flex gap-6 ">
                <DropDown.Explore />
                <DropDown.Hobbies />
            </div>
            <div className="flex gap-4 bg-white items-center">
                <span className="lg:hidden">
                    <SearchIcon />
                </span>
                <span className="hidden lg:block">
                    <BookMarksIcon />
                </span>
                <BellIcon />
                <span className="hidden lg:block">
                    <CartIcon />
                </span>
                <button className="hidden lg:block py-3 px-8 border-[2px] border-[#8064A2] rounded-lg">
                    Sign In
                </button>
                <div
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="cursor-pointer md:hidden"
                >
                    {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </div>
            </div>
            {isMenuOpen ? <Modal setIsModalOpen={setIsMenuOpen} /> : null}
        </header>
    );
};

export default Header;

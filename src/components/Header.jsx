import React, { useContext } from "react";
import { logoImage } from "../assets/ImageAssets";
import { BellIcon, CloseIcon, MenuIcon, SearchIcon } from "../assets/SVGAssets";
import { AppContext } from "../context/AppContextProvider";

const Header = () => {
    const { isMenuOpen, setIsMenuOpen } = useContext(AppContext);
    return (
        <header className="flex py-2 px-5 justify-between shadow-lg">
            <img src={logoImage} alt="logo" className="w-[156px]" />
            <div className="flex gap-4 bg-white">
                <SearchIcon />
                <BellIcon />
                <div onClick={() => setIsMenuOpen((prev) => !prev)} className="cursor-pointer">
                    {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </div>
            </div>
        </header>
    );
};

export default Header;

import React from "react";
import FooterCard from "./FooterCard";
import { footerCards, socialMediaIcons } from "../utils/constants";

const Footer = () => {
    return (
        <div className="p-6 md:pt-[60px] md:px-[100px] flex flex-col gap-8">
            <div className="flex flex-col md:flex-row w-full justify-between">

                {footerCards.map((footerCard) => (
                    <FooterCard key={footerCard.id} {...footerCard} />
                ))}
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-3">
                        <h2 className="font-bold text-sm leading-[18px]">
                            Social Media
                        </h2>
                        <div className="flex gap-4">
                            {socialMediaIcons.map((SocialMedia) => (
                                <SocialMedia.Icon key={SocialMedia.id} />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h2 className="font-bold text-sm leading-[18px]">
                            Invite Friends
                        </h2>
                        <span className="flex">
                            <input
                                type="text"
                                placeholder="Email ID"
                                className="py-2 px-4 border-[2px] border-[#8064A2] rounded-lg rounded-r-none"
                            />
                            <div className="bg-[#8064A2] text-white border-[2px] border-[#8064A2] rounded-lg rounded-l-none flex justify-center items-center px-3">
                                Invite
                            </div>
                        </span>
                    </div>
                </div>
            </div>

            <div className="py-3 text-center bg-[#F7F5F9] -mx-6  md:-mx-[100px] -mb-6">
                <h2 className="font-medium text-sm leading-[18px]">
                    © Purple Cues Private Limited
                </h2>
            </div>
        </div>
    );
};

export default Footer;

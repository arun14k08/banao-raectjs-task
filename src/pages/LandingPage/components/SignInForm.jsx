import React, { useState } from "react";
import { EyeIcon } from "../../../assets/SVGAssets";
import ContinueWith from "./ContinueWith";

const SignInForm = () => {
    const [signInMode, setSignInMode] = useState("sign-in");
    return (
        <div className="w-full flex flex-col gap-6">
            <div className="flex gap-[40px] justify-center">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setSignInMode(tab.id)}
                        className={`font-semibold pb-1 border-b-2 ${
                            signInMode === tab.id
                                ? "text-[#8064A2] border-b-[#8064A2]"
                                : "text-[#939CA3] border-b-transparent"
                        }`}
                    >
                        {tab.text}
                    </button>
                ))}
            </div>
            <form className="flex flex-col gap-4">
                <input
                    type="email"
                    placeholder="Email"
                    className="rounded-lg border-2 border-[#EBEDF0] py-2 px-3"
                />
                <label htmlFor="password" className="relative">
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        className="rounded-lg border-2 border-[#EBEDF0] py-2 px-3 w-full"
                    />
                    <div className="absolute right-3 bottom-2 top-2">
                        <EyeIcon />
                    </div>
                </label>
                <button
                    type="submit"
                    className="bg-[#8064A2] py-2 text-center text-white text-[12px] font-semibold rounded-lg"
                >
                    Continue
                </button>
            </form>
        </div>
    );
};

export default SignInForm;

const tabs = [
    {
        id: "sign-in",
        text: "Sign In",
    },
    {
        id: "join-in",
        text: "Join Up",
    },
];

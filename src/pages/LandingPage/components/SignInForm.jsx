import React, { useState } from "react";
import { EyeIcon, LockIcon } from "../../../assets/SVGAssets";
import ContinueWith from "./AuthenticateWith";
import AuthenticateWith from "./AuthenticateWith";
import OrConnectWith from "./OrConnectWith";

const SignInForm = () => {
    const [signInMode, setSignInMode] = useState("sign-in");
    return (
        <div className="w-full flex flex-col gap-6 md:max-w-[410px] h-[500px]">
            <div className="flex gap-[40px] justify-center sm:justify-start">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setSignInMode(tab.id)}
                        className={`font-semibold md:text-[20px] pb-1 border-b-2 ${
                            signInMode === tab.id
                                ? "text-[#8064A2] border-b-[#8064A2]"
                                : "text-[#939CA3] border-b-transparent"
                        }`}
                    >
                        {tab.text}
                    </button>
                ))}
            </div>
            <div className="flex flex-col gap-6 md:flex-col-reverse">
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
                    {signInMode === "sign-in" ? (
                        <div className="flex justify-between items-center">
                            <label
                                htmlFor="remember"
                                className="flex gap-2 items-center"
                            >
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="size-4"
                                />
                                <span className="text-xs lg:text-base">
                                    Remember me
                                </span>
                            </label>
                            <div className="flex items-center gap-2 text-xs lg:text-base">
                                <LockIcon />
                                Forgot Password?
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-5">
                            <div className="flex justify-between">
                                <div className="flex gap-1">
                                    <div className="rounded-sm w-[60px] h-1 bg-white">
                                        &nbsp;
                                    </div>
                                    <div className="rounded-sm w-[60px] h-1 bg-white">
                                        &nbsp;
                                    </div>
                                    <div className="rounded-sm w-[60px] h-1 bg-white">
                                        &nbsp;
                                    </div>
                                </div>
                                <span className="text-[12px] leading-[10px] font-semibold text-[#939CA3]">
                                    Password strength
                                </span>
                            </div>
                            <p className="text-xs text-[#6D747A]">
                                By continuing, you agree to our{" "}
                                <span className="text-black ">
                                    Terms of Service
                                </span>{" "}
                                and{" "}
                                <span className="text-black">
                                    Privacy Policy.
                                </span>
                            </p>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="bg-[#8064A2] py-2 md:py-3 text-center text-white text-xs md:text-sm font-semibold rounded-lg"
                    >
                        {signInMode === "sign-in"
                            ? "Continue"
                            : "Agree and Continue"}
                    </button>
                </form>
                <OrConnectWith />
                <AuthenticateWith />
            </div>
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

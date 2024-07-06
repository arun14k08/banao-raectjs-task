import React from "react";
import { FaceBookIcon, GoogleIcon } from "../../../assets/SVGAssets";

const ContinueWith = () => {
    return (
        <>
            <div className="flex items-center gap-2">
                <div className="w-full h-[2px] bg-[#CED4DA]">&nbsp;</div>
                <span className="text-nowrap font-semibold">
                    Or connect with
                </span>
                <div className="w-full h-[2px] bg-[#CED4DA]">&nbsp;</div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex gap-14 items-center px-4 py-2 rounded-lg border-[#8064A2] border-[2px]">
                    <GoogleIcon />
                    <span className="font-semibold">Continue with Google</span>
                </div>
                <div className="flex gap-14 items-center px-4 py-2 rounded-lg border-[#8064A2] border-[2px]">
                    <FaceBookIcon />
                    <span className="font-semibold">
                        Continue with Facebook
                    </span>
                </div>
            </div>
        </>
    );
};

export default ContinueWith;

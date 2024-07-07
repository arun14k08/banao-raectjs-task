import React from "react";
import { FaceBookIcon, GoogleIcon } from "../../../assets/SVGAssets";

const AuthenticateWith = () => {
    return (
        <>
            
            <div className="flex flex-col gap-4">
                <div className="flex gap-14 items-center px-4 py-2 rounded-lg border-[#8064A2] border-[2px]">
                    <GoogleIcon />
                    <span className="font-semibold md:ml-8 lg:text-nowrap">Continue with Google</span>
                </div>
                <div className="flex gap-14 items-center px-4 py-2 rounded-lg border-[#8064A2] border-[2px]">
                    <FaceBookIcon />
                    <span className="font-semibold md:ml-8 lg:text-nowrap">
                        Continue with Facebook
                    </span>
                </div>
            </div>
        </>
    );
};

export default AuthenticateWith;

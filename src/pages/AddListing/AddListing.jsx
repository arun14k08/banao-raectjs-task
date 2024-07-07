import React from "react";
import { AddIcon } from "../../assets/SVGAssets";
import { features } from "../../utils/constants";
import Card from "../../components/Card";

const AddListing = () => {
    return (
        <div className="my-6 mx-auto flex flex-col items-center">
            <h3 className="flex gap-3">
                <AddIcon />
                <span className="font-semibold text-[20px]">
                    Add Your Listing
                </span>
            </h3>
            <div className="grid gap-6 m-6 md:m-[100px] mb-12 md:grid-cols-2 max-w-[840px]">
                {features.map((feature) => (
                    <Card key={feature.id} {...feature} hoverChange={true}/>
                ))}
            </div>
        </div>
    );
};

export default AddListing;

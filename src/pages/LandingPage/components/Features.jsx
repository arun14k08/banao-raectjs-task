import React from "react";
import Card from "../../../components/Card";
import { features } from "../../../utils/constants";
const Features = () => {
    return (
        <div className="flex flex-col gap-6 m-6 mb-12">
            {features.map((feature) => (
                <Card key={feature.id} {...feature} />
            ))}
        </div>
    );
};



export default Features;

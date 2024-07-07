import React from "react";
import Card from "../../../components/Card";
import { features } from "../../../utils/constants";
const Features = () => {
    return (
        <div className="grid gap-6 m-6 md:m-[100px] mb-12 md:grid-cols-2">
            {features.map((feature) => (
                <Card key={feature.id} {...feature} isButtonRequired={true} />
            ))}
        </div>
    );
};

export default Features;

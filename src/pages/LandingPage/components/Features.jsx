import React from "react";
import Card from "../../../components/Card";
import {
    PeopleIcon,
    PlaceIcon,
    ProductIcon,
    ProgramIcon,
} from "../../../assets/SVGAssets";

const Features = () => {
    return (
        <div className="flex flex-col gap-6 m-6">
            {features.map((feature) => (
                <Card key={feature.id} {...feature} />
            ))}
        </div>
    );
};

export const features = [
    {
        id: "people",
        title: "People",
        content:
            "Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.",
        buttonText: "Connect",
        Icon: PeopleIcon,
    },
    {
        id: "place",
        title: "Place",
        content:
            "Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.",
        buttonText: "Meet up",
        Icon: PlaceIcon,
    },
    {
        id: "product",
        title: "Product",
        content:
            "Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.",
        buttonText: "Get it",
        Icon: ProductIcon,
    },
    {
        id: "program",
        title: "Program",
        content:
            "Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.",
        buttonText: "Attend",
        Icon: ProgramIcon,
    },
];

export default Features;

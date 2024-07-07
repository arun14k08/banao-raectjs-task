import {
    AddIcon,
    PeopleIcon,
    PlaceIcon,
    ProductIcon,
    ProgramIcon,
} from "../assets/SVGAssets";

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

export const addNewCardData = {
    id: "new",
    title: "Add your own",
    content:
        "Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page",
    buttonText: "Add new",
    Icon: AddIcon,
};

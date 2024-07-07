import {
    AddIcon,
    FaceBookIconGrey,
    GoogleIconGrey,
    InstagramIcon,
    MailIcon,
    PeopleIcon,
    PinterestIcon,
    PlaceIcon,
    ProductIcon,
    ProgramIcon,
    TelegramIcon,
    TwitterIcon,
    YoutubeIcon,
} from "../assets/SVGAssets";

export const features = [
    {
        id: "people",
        title: "People",
        content:
            "Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.",
        buttonText: "Connect",
        Icon: PeopleIcon,
        isButtonRequired: false,
        bgColor: "#8064A2",
        iconColor: "#8064A2",
        
    },
    {
        id: "place",
        title: "Place",
        content:
            "Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.",
        buttonText: "Meet up",
        Icon: PlaceIcon,
        isButtonRequired: false,
        bgColor: "#77933C",
        iconColor: "#77933C",
    },
    {
        id: "product",
        title: "Product",
        content:
            "Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.",
        buttonText: "Get it",
        Icon: ProductIcon,
        isButtonRequired: false,
        bgColor: "#C0504D",
        iconColor: "#C0504D",
    },
    {
        id: "program",
        title: "Program",
        content:
            "Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.",
        buttonText: "Attend",
        Icon: ProgramIcon,
        isButtonRequired: false,
        bgColor: "#0096C8",
        iconColor: "#0096C8",
    },
];

export const addNewCardData = {
    id: "new",
    title: "Add your own",
    content:
        "Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page",
    buttonText: "Add new",
    Icon: AddIcon,
    link: "/add-new",
};

export const footerCards = [
    {
        id: "hobby-cue",
        title: "Hobbycue",
        links: [
            { id: "about-us", text: "About Us" },
            { id: "our-services", text: "Our Services" },
            { id: "work-with-us", text: "Work with Us" },
            { id: "faq", text: "FAQ" },
            { id: "contact-us", text: "Contact Us" },
        ],
    },
    {
        id: "how-do-i",
        title: "How Do I",
        links: [
            { id: "sign-up", text: "Sign Up" },
            { id: "add-listing", text: "Add a Listing" },
            { id: "claim-listing", text: "Claim Listing" },
            { id: "post-query", text: "Post a Query" },
            { id: "blog-post", text: "Add a Blog Post" },
            { id: "other-queries", text: "Other Queries" },
        ],
    },
    {
        id: "quick-links",
        title: "Quick Links",
        links: [
            { id: "listings", text: "Listings" },
            { id: "blog-posts", text: "Blog Posts" },
            { id: "shop", text: "Shop / Store" },
            { id: "community", text: "Community" },
        ],
    },
];

export const socialMediaIcons = [
    {
        id: "facebook",
        Icon: FaceBookIconGrey,
    },
    {
        id: "twitter",
        Icon: TwitterIcon,
    },
    {
        id: "instagram",
        Icon: InstagramIcon,
    },
    {
        id: "pinterest",
        Icon: PinterestIcon,
    },
    {
        id: "googleplus",
        Icon: GoogleIconGrey,
    },
    {
        id: "youtube",
        Icon: YoutubeIcon,
    },
    {
        id: "telegram",
        Icon: TelegramIcon,
    },
    {
        id: "mail",
        Icon: MailIcon,
    },
];

//ّFooter data - 4 array of objects & 3 types define
// 1- For Get In Touch Links section
export const getInTouchItems = [
    { id: 1, title: "Delivery Information", href: "" },
    { id: 2, title: "Discount", href: "" },
    { id: 3, title: "100% Purchase Protection", href: "" },
    { id: 4, title: "Returns Centre", href: "" },
    { id: 5, title: "Your Account", href: "" },
];
// 2- For Categories Links section
export const categoriesItem = [
    { id: 1, title: "Woman", href: "" },
    { id: 2, title: "Men", href: "" },
    { id: 3, title: "Accessories", href: "" },
    { id: 4, title: "Sport Shoes", href: "" },
    { id: 5, title: "Clothes", href: "" },
];
// for Categories & Get in touch type, they same
export interface menuTypes {
    id: number;
    title: string;
    href: string;
}
// 3- For Payments Methods images section
export const paymentMethodItem = [
    {
        id: 1,
        title: "Credit Card Visa",
        src: "/assets/images/icons/credit-card-visa.png",
        href: "https://bd.visa.com",
    },
    {
        id: 2,
        title: "Paypal",
        src: "/assets/images/icons/paypal.png",
        href: "https://www.paypal.com",
    },
    {
        id: 3,
        title: "American Express",
        src: "/assets/images/icons/american-express.png",
        href: "https://www.americanexpress.com/",
    },
    {
        id: 4,
        title: "Maestro",
        src: "/assets/images/icons/maestro.png",
        href: "https://www.mastercard.us/en-us.html",
    },
];
export interface paymentTypes {
    id: number;
    title: string;
    href: string;
    src: string;
}
// 4- For Social icons section
export const socialsItem = [
    {
        id: 1,
        title: "instagram",
        src: "/assets/images/icons/instagram.png",
        width: 18,
        height: 19,
        href: "https://www.instagram.com/",
    },
    {
        id: 2,
        title: "twitter",
        src: "/assets/images/icons/twitter.png",
        width: 20,
        height: 17,
        href: "https://x.com/",
    },
    {
        id: 3,
        title: "facebook",
        src: "/assets/images/icons/facebook.png",
        width: 11,
        height: 21,
        href: "https://www.facebook.com/",
    },
];
export interface socialTypes {
    id: number;
    title: string;
    href: string;
    src: string;
    width: number;
    height: number;
}

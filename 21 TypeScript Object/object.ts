// Assignment 21 Typescript object
type MobilePhone = {
    brand: string;
    model: string;
    price: number;
};
// Array of mobile
const mobilePhones: MobilePhone[] = [
    {
        brand: "Apple",
        model: "iPhone 8 plus",
        price:  55000
    },
    {
        brand: "Samsung",
        model: " Galaxy A12",
        price: 40000
    },
    {
        brand: "Infinix",
        model: "Note 30",
        price: 44999
    },
    {
        brand: "Realme",
        model: "C35",
        price: 31999
    },
    {
        brand: "Oppo",
        model: "A17",
        price: 35000
    }
];
console.log("Mobile Phones:");
mobilePhones.forEach((phone, index) => {
    console.log(`\nPhone ${index + 1}:`);
    console.log(`Brand: ${phone.brand}`);
    console.log(`Model: ${phone.model}`);
    console.log(`Price: ${phone.price}Pkr`);
});
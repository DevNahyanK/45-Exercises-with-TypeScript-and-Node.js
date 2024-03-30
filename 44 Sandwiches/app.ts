function Sandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    for (let i = 0; i < items.length; i++){
        console.log(` ${items[i]}`)
    }
}
// Call the function 
Sandwich("Bread", "Cheese", "Mayonaise");
Sandwich("Turkey", "Lettuce");
Sandwich("Bacon","Iceburg","Tomato");

console.log("Hope you enjoy the Sandwich");
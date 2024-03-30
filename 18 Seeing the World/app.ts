// Assignment 18

let places: string[] = ["Melbourne", "Bani Gala", "Burj Khalifa", "Canada", "Auckland"];

console.log("Original order:", places);

console.log("Alphabetical order:", [...places].sort());

// Unchanged
console.log("Original order :", places);

console.log("Reverse alphabetical order:", [...places].sort().reverse());

console.log("Original order :", places);

// Reverse 
places.reverse();
console.log("Reversed order:", places);

// Wapas reverse to original order
places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.sort((a, b) => b.localeCompare(a));
console.log("Reverse alphabetical order:", places);

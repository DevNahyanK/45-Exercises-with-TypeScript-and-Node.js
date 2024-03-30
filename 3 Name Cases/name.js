"use strict";
let personName = "Nahyan khan";
// Lowercase
console.log("Lowercase:", personName.toLowerCase());
// Uppercase
console.log("Uppercase:", personName.toUpperCase());
// Uppercase
console.log("Tittlecase:", personName.replace(/\b\w/g, (char) => char.toUpperCase()));

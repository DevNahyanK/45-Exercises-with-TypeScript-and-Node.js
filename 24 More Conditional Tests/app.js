"use strict";
// Assignment 24 More Conditional Test
// Equality Test 1
console.log("Equality test with strings: ", "Apple" === "Apple");
// Inequality Test 2
console.log("Inequality test with strings: ", "Banana" === "Banana");
// Test 3 Lower case
console.log("Lower case function test: ", "HELLO".toLowerCase() === "hello");
// Test 4 Number Equality
console.log("Equality test with number:", 804 === 804);
// Test 5 Number Inequality
console.log("Inequality test with number:", 804 != 47);
// Test 6 Greater than 
console.log("Greater than test: ", 56 > 18);
// Test 7 Less than
console.log("Less than test: ", 56 < 804);
// Greater and equal to
console.log("Greater than and equal to: ", 40 >= 40);
// Less than equal to
console.log("Less than and equal to: ", 20 <= 50);
// Test and or or gate
console.log("And operator test: ", 5 === 5 && 10 > 5);
//Test Or gate
console.log("Or operator test: ", 5 === 5 || false);
// Item in array
const mobiles = ['Iphone Xr', 'Realme 5', 'Oppo A52'];
console.log('Test "Iphone Xr" in the array: ', mobiles.includes("Iphone Xr"));
// Items not in array
console.log('Testing "Iphone Xr" not in array:', !mobiles.includes('S21 ultra'));

"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magicians = ['P.C. Sorcar', 'Derren Brown', 'David Blaine', 'Harry Houdini'];
// Function to Print
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
// Function to modify by adding "the Great" 
function makeGreat(magicians) {
    // Create a new array 
    let greatMagicians = [];
    magicians.forEach(element => {
        greatMagicians.push(`${element} the Great`);
    });
    return greatMagicians;
}
let greatMagicians = makeGreat(magicians.slice());
show_magicians(greatMagicians);

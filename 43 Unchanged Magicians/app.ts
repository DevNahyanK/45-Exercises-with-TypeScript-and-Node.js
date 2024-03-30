// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicians : string[] = ['P.C. Sorcar', 'Derren Brown', 'David Blaine', 'Harry Houdini'];

// Function to Print
function show_magicians(magicians: string[]){

    magicians.forEach(element =>{
        console.log(element);
    })
}
// Function to modify by adding "the Great" 
function makeGreat(magicians: string[]) {

  // Create a new array 
  let greatMagicians: string[] = [];
  magicians.forEach(element => {
    greatMagicians.push(`${element} the Great`);
  });
  return greatMagicians;
}

// Copy of Array
let originalMagicians = magicians.slice();
let greatMagicians = makeGreat(originalMagicians);

// Original
 show_magicians(originalMagicians);
// Great message
show_magicians(greatMagicians);


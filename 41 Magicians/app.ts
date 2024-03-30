// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians : string[] = ['P.C. Sorcar', 'Derren Brown', 'David Blaine', 'Harry Houdini'];

function show_magicians(magicians: string[]){

    magicians.forEach(element =>{
        console.log(element);
    })
}

show_magicians(magicians);
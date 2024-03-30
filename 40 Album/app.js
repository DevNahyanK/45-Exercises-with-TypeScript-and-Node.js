"use strict";
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create albums 
const album1 = make_album("Talha Anjum", "Gumaan");
const album2 = make_album("Atif Aslam", "Dil Diyan Gallan");
const album3 = make_album("Rahat Fateh Ali Khan", "Afreen Afreen", 9);
// Output
console.log(album1);
console.log(album2);
console.log(album3);

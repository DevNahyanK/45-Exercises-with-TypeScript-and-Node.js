// Task 40

function make_album(artist: string, title: string, tracks?:number){

    const album:{artist: string, title: string, tracks?:number} = {
        artist : artist,
        title : title
    }
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
  
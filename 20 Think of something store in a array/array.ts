let mountains : string [] = [ 'Mount Everest', 'K2', 'Cho Oyu', 'Kangchenjunga', 'Nanga Parbat' ]

console.log("list of mountains:");
mountains.forEach((mountains, index) => {
    console.log(`${index + 1}. ${mountains}`);
});


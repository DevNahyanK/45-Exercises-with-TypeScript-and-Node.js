let guest_list: string[] = ['Babar Azam', 'Naseem Shah', 'Saim Ayub'];

for(let i=0; i<guest_list.length; i++)[

    console.log('Dear brother '  + guest_list[i] + ',\n\n I will invite you on a dinner tonight at 9 pm. \n\nThank you!\n\n') 
]

let absent_guest: string = 'Babar Azam' ;
let new_guest: string = 'Shaheen Shah Afridi' ;

guest_list[0] = new_guest ;

for(let i=0; i<guest_list.length; i++)[

    console.log('Dear brother '  + guest_list[i] + ',\n\n I will invite you on a dinner tonight at 9 pm. \n\nThank you!\n\n') 
]

console.log(`Dear ${absent_guest} is not coming to the dinner.`);


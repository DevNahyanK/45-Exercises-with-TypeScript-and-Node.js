"use strict";
let guest_list = ['Babar Azam', 'Naseem Shah', 'Saim Ayub'];
//for(let i=0; i<guest_list.length; i++)[
//  console.log('Dear brother '  + guest_list[i] + ',\n\n I will invite you on a dinner tonight at 9 pm. \n\nThank you!\n\n') 
//]
let absent_guest = 'Babar Azam';
let new_guest = 'Shaheen Shah Afridi';
guest_list[0] = new_guest;
for (let i = 0; i < guest_list.length; i++)
    [
        console.log('Dear brother ' + guest_list[i] + ',\n\n I will invite you on a dinner tonight at 9 pm. \n\nThank you!\n\n')
    ];
console.log(`Dear ${absent_guest} is not coming to the dinner.`);
guest_list.unshift('Muhammad Amir');
guest_list.splice(2, 0, 'Shoaib Malik');
guest_list.push('Iftikhar Chacha ');
for (let i = 0; i < guest_list.length; i++)
    [
        console.log('Dear brother ' + guest_list[i] + ',\n\n I will invite you on a dinner tonight at 9 pm. \n\nThank you!\n\n')
    ];

"use strict";
// Array of usernames
const userNames = ['admin', 'Babar Azam', 'Fakhar Zaman', 'Saim Ayub', 'Azam Khan'];
for (const userName of userNames) {
    let greeting;
    if (userName === "admin") {
        greeting = "Welcome back, Admin.";
    }
    else {
        greeting = `Hello how are you, ${userName}!`;
    }
    console.log(greeting);
}

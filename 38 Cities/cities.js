"use strict";
function describe_city(city, country = "Default") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Toronto", "Canada");
describe_city("Karachi", "Pakistan");
// Dafault city
describe_city("Auckland");

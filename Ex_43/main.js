// Q no_43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to make magicians great through .map() it will modify Array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an Array of magicians names
var magician_names = ["Harry Poter", "Faiz", "Tariq"];
//Making a copy of Orignal Array through .slice() function
var copy_magician_names = magician_names.slice();
// Modify the copied Array to include "The Great" with their names
var copy_great_magicians = make_great(copy_magician_names);
//Show both Arrays Orignal and Copied
// Orignal
console.log("\nOrignal Array");
show_magicians(magician_names);
// Copied
console.log("\nCopied Array");
show_magicians(copy_great_magicians);

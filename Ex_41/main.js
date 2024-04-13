// Q no_41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Define a function to print each magician name from an Array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Define an Array containing magicians name
var magician_names = ["Harry Poter", "Faiz", "Tariq"];
//Call function to print each magician name
show_magicians(magician_names);

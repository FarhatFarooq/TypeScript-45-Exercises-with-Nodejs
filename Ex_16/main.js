// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// Creating a Guest List Array
var guestList = ["Wahiba", "Laiba", "Sahiqa"];
// Making variable for those guest who can't come
var dontCome = guestList[0];
// Print the name of guest who  can't come
console.log(dontCome, "Naii Ahh Sakty Han");
// Add or Remove values from Guest List Array
guestList.splice(0, 1, "M.Omer");
// Message Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner.");
// Adding a new guest at Beginning of Array
guestList.unshift("Farooq");
// Adding a new guest at the end of Array
guestList.push("Sonia");
// Making a variable for storing a middle index of our guest list Array
var middleIndex = Math.floor(guestList.length / 2);
//  Add a new guest at the middle of Array
guestList.splice(middleIndex, 0, "Shabana");
// Print Message of Update List
console.log("Updated List of our Guest");
// Sending a invitation message to our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("Slame ".concat(oneguest, ", would you like to dinner with me")); });

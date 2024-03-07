// Creating a Guest List Array
let guestList = ["Wahiba", "Laiba", "Sahiqa"];

// Making variable for those guest who can't come
let dontCome = guestList[0];

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
let middleIndex: number =Math.floor(guestList.length / 2);

//  Add a new guest at the middle of Array
guestList.splice(middleIndex, 0, "Shabana");

// Print Message of Update List
console.log("Updated List of our Guest");

// Sending a invitation message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`Slame ${oneguest}, would you like to dinner with me`));


// Q no 17--
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


// Inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table won't arrive on time, so I can only invite two Guests for dinner with me");

// Using while-loop to remove guests from the Array until only two names remain
while(guestList.length > 2){
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest} I can't invite you to dinner`);
}

// Sending a invitations to the last two guests from the list
console.log("Invitations for the last 2 Guests");

guestList.forEach(lasttwo => console.log(`Luckily ${lasttwo}, you are still invited for dinner`));

// Removing last two Guests from the list
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);

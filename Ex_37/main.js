// Qno-37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// Making Function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love TypeScript."; }
    console.log("Creating a ".concat(size, " shirt with the message ").concat(printMessage, " print on shirt"));
}
// Calling Function
make_shirt();
//  Calling Function for medium size and default message
make_shirt("Medium");
//  Calling function for small size and different Message
make_shirt("Small", "I Love JavaScript");

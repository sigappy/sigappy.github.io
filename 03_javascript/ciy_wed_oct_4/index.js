// var bufferprice = function(age) {
//     var price = 0;
//     if (age<10) {
//         price = 20;
//     } else if ((age >=10) && (age < 21)) {
//             price = 30;
//     } else
//             price = 40;
//     return (price);
// }
// console.log("age = 9: $" + bufferprice(9) );
// console.log("age = 15: $" + bufferprice(15) );
// console.log("age = 25: $" + bufferprice(25) );

var TIMES = 5;
var toGuess = 7;
var counter = 1;
var myGuess = -1;

while (counter<= TIMES) {
    var myGuess = parseInt(prompt("Number between 1 - 10"));

    console.log("Times: %d my guess: %d". counter, myGuess);
    counter++;

}
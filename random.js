// FLOOR FUNCTION WILL NOT CONSIDER THE NUMBER AFTER THE DOT
// CIEL WILL PROVIDE THE NEXT NUMBER OF THE RESULT


// FLOOR = 12.456789876545678  = 12
// CEIL = 12.4567898765434567 = 13

let number = 95/3
console.log(number);



let number1 = 95/3
console.log(Math.floor(number1));



let number2 = 95/3
console.log(Math.ceil(number2));

// HOW TO GENERATE RANDOM NUMBERS

let bigeer =80;
let smaller = 50;

console.log(Math.floor(Math.random()* (bigeer - smaller) + 45));
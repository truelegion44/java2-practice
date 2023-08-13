// Creating a variable for my age
let myAge = 22;

// Creating a variable for earlyYears
let earlyYears = 2;
earlyYears *= 10.5;

// Subtracting 2 from the myAge variable and storing it in a new variable
let laterYears = myAge - 2;

// Multiplying the laterYears variable using the multiplication assignment operator
laterYears *= 4;

console.log(laterYears);
console.log(earlyYears);

// Adding two variables together to get the value of myAgeInDogYears.
let myAgeInDogYears = earlyYears + laterYears; // Fixed the concatenation issue
console.log(myAgeInDogYears);

let myName ='kenny'.toLowerCase();


console.log(`My name is ${myName}, I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);


// Write your code below
let vacationSpots =["london","egypt","canada"]
console.log(vacationSpots[0])
console.log(vacationSpots[1])
console.log(vacationSpots[2])


// The For Loop

// Write your code below



for (let num = 5; num <= 10; num++) {
  console.log(num);
}



//Nested Loops

const bobsFollowers = ['jane', 'kate', 'joy', 'paul'];
const tinasFollowers = ['jane', 'kate', 'daniel'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

console.log("Mutual followers:", mutualFollowers);

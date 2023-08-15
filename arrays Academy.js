const hobbies = ['reading', 'painting', 'hiking'];
console.log(hobbies)

//ACCESSING ELEMENTS

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
const  listItem  = 'Fortune favors the brave.'
console.log(listItem[0])
console.log(famousSayings[2])
console.log(famousSayings[3])

//UPDATE ELEMENTS 

let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1]= 'avocados'
// Arrays with let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
condiments[0]= 'Mayo'
console.log(condiments);

condiments = ['Mayo']
console.log(condiments)


const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
utensils[3] = 'spoon';  // Change the element at index 3 to 'spoon'
console.log(utensils);  // Output the modified array

utensils[3] = 'Spoon';  // Re-assign the last item to 'Spoon'
console.log(utensils);  // Output the updated array

//The .length property
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length)

/// The .push() Method
const chores1 = ['wash dishes', 'do laundry', 'take out trash'];

chores1.push('play football', 'play softball')
console.log(chores1)


//The .pop() Method
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();
console.log(chores)

/// OTHER ARRAYS METHODS 

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift()
console.log(groceryList)



const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

//groceryList.shift()
//console.log(groceryList)
groceryList.unshift('popcorn');
console.log(groceryList)
// slice 

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

//groceryList.shift()
//console.log(groceryList)
//groceryList.unshift('popcorn');
groceryList.slice(1, 4)


console.log(groceryList.slice(1, 4))

//// INDEX 

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

//groceryList.shift()
//console.log(groceryList)
//groceryList.unshift('popcorn');
//groceryList.slice(1, 4)
//console.log(groceryList.slice(1, 4))
//console.log(groceryList.slice(1, 4))
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);
// ARRAYS AND FUNCTIONS

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
 
}
changeArr(concept);
console.log(concept)
function removeElement(newArr){
  newArr.pop()
}
removeElement(concept)
console.log(concept)
// Nested Arrays

let numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1];  // Access element 6
console.log(target);  // Output: 6




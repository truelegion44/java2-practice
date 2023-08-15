const width = 10;
const height = 6;
const area =  width * height;
console.log(area);

function getReminder() {
  console.log('Water the plants.')
}

function greetInSpanish(){
  console.log('Buenas tardes.')
}

function sayThanks(){
  console.log('Thank you for your purchase! We appreciate your business.')
}
sayThanks();
sayThanks();
sayThanks();

function sayWelcome(){
  console.log('Thanks for walking in our store')
}
sayWelcome();

function sayThanks(name) {
  console.log("Thank you for your purchase " + name + "! We appreciate your business.");
}

sayThanks("Cole");

function welcome (name){
  console.log("hello " + name);
}
welcome('peter');

function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}
 
greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!


function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList()

// Return function statements

function monitorCount(rows, columns){
  return rows * columns;
  
  } 
  const numOfMonitors = monitorCount(5, 4);  // Example values for rows and columns
  console.log(numOfMonitors);  // Output: 20
  

  // Helper functions
  function monitorCount(rows, columns) {
    return rows * columns;
  }
  function costOfMonitors(rows, columns){
    return monitorCount(rows,columns)* 200;
  }
  const totalCost = costOfMonitors(8,2)
  console.log(totalCost);

  // Functions Expressions 
  const plantNeedsWater = function(day){
    if  (day === 'Wednesday'){
      return true;
    }else{
      return false;
    }
  }
  plantNeedsWater('Tuesday')
  console.log(plantNeedsWater('Tuesday'));

  // Arrow Functions

  const plantNeedsWater1 = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };

  const plantNeedsWater2 = day =>  day === 'Wednesday' ? true : false;
  plantNeedsWater2 ('Tuesday')
  
  console.log(plantNeedsWater2 ('Tuesday'));
;
  
  

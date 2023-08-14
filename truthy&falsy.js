let wordCount = 3;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}


let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool 

console.log(`The ${writingUtensil} is mightier than the sword.`);

let isLocked = false;

if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}

let isCorrect = true;

if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

let favoritePhrase1 = 'Love That!';

if (favoritePhrase1 === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}



let isLocked1 = false;

isLocked1 ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');


let isCorrect2 = true;

isCorrect2 ? console.log('Correct!') :console.log('Incorrect!');

let favoritePhrase3 = 'Love That!';

favoritePhrase3 === ('Love That!') ? console.log('I love that!'):console.log("I don't love that!");
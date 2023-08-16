let userName = '';
userName ? console.log('Hello, Jane!') : console.log('Hello');

let userQuestion = '';
console.log('How can I get rich?');

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '7';  // You need to assign the value based on the randomNumber

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'No luck, I am sorry';
    break;
}

console.log('Magic Eight Ball says '+ eightBall);


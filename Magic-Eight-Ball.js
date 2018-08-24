
let userName = '';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = '';

userQuestion ? console.log(`${userName} asked: ${userQuestion}`) : console.log('Please enter a question.');


let eightBall = '';

let randomNumber = Math.floor(Math.random() * 8);


switch(randomNumber) {
  case 0:
    eightBall = 'Really hazy try again';
    break;
  case 1:
    eightBall = 'It is certain';
    break;
  case 2:
    eightBall = 'It is decidedly so';
    break;
  case 3:
    eightBall = 'Cannot predict right now';
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
    eightBall = 'Roll again';
    break;
}

console.log(`The Magic Eight Ball says: ${eightBall}`);

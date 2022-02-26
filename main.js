let userName = prompt("What's your name?");
while (userName === '') {
    alert("Please enter your name!");
    userName = prompt("What's your name?");
}
// below if...else statement no longer needed bc prompt gets only string
// if (typeof userName === 'string') {
    console.log(`Hello, ${userName}!`);
// }
// else {
    // console.log('Hello!');
// }

let userQuestion = prompt(`What's your question, ${userName}?`);
while (userQuestion === '') {
    alert('Please ask a question!');
    userQuestion = prompt(`What's your question, ${userName}?`);
}
// const userQuestion = 'Will I ever get married?';
// below if...else statement no longer needed bc prompt gets only string
// if (typeof userQuestion === 'string') {
    console.log(`Magic 8 Ball, ${userQuestion}?`);
// }
// else {
//     console.log(`Please ask a question, ${userName}.`);
// }

const randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

// to check if random # is working...
// console.log(randomNumber);

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
}
console.log(eightBall);

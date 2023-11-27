
function isValid() {
let askUserName = prompt(`What is your name?`);
console.log(askUserName);

if (!isNaN(askUserName) ) {
    alert (`Please try again`)
    isValid();

} else {
    alert (`Hello, ${askUserName}! How are you?`);
}
return askUserName;
}
isValid();



function calc() {
    const userFirstNumber = +prompt(`Enter first number`),
          userSecondNumber = +prompt(`Enter second number`);

    if (!isNaN(userFirstNumber) && !isNaN(userSecondNumber)) {
        let userMathOperator = prompt(`Enter math operator (+ or - or / or *)`);

        switch (userMathOperator) {
            case '+':
                alert(`Sum: ${userFirstNumber + userSecondNumber}`);
                break;
            case '-':
                alert(`Difference: ${userFirstNumber - userSecondNumber}`);
                break;
            case '*':
                alert(`Product: ${userFirstNumber * userSecondNumber}`);
                break;
            case '/':
                if (userSecondNumber !== 0) {
                    alert(`Quotient: ${userFirstNumber / userSecondNumber}`);
                } else {
                    alert(`Cannot divide by zero`);
                }
                break;
            default:
                alert(`Invalid operator. Please enter +, -, *, or /`);
                break;
        }

    } else {
        alert(`Please enter valid numbers`);
        calc();
    }
}
calc();

function compareValue() {
    const firstValue = prompt("Enter the first value");
    const secondValue = prompt("Enter the second value");

    if (firstValue === secondValue) {
        alert(true);
    } else {
        alert(false);
    }
}
compareValue();


function rozpodilPoModulu() {
    const userRandomNumber = prompt("Enter 5 digit number");    //12345
    
    if (userRandomNumber > 0 && Number.isInteger(userRandomNumber) && !isNaN(userRandomNumber) && userRandomNumber.length === 5) {

        const digit5 = userRandomNumber % 10; // 12345 / 10 = 1234.5 => 12340 % 10 = 1234 * 10 => 0 => 5 % 10 = 5 
        const digit4 = Math.floor((userRandomNumber % 100) / 10); // (12345 % 100) / 10 = 12345 / 100 = 123.45 => 45 / 10 => 4.5 => math.floor = 4
        const digit3 = Math.floor((userRandomNumber % 1000) / 100);  // (12345 % 1000) / 100 = 12345 / 1000 = 12.345 => 345 / 100 = 3.45 => math.floor = 3
        const digit2 = Math.floor((userRandomNumber % 10000) / 1000); //  (12345 % 10000) / 1000 = 12345 / 10000 = 1.2345 => 2345 => 2345/1000 = 2.345 => math.floor = 2
        const digit1 = Math.floor(userRandomNumber / 10000); // 1,2345 
        alert(`${digit1} ${digit2} ${digit3} ${digit4} ${digit5}`);
    } else {
        alert("Enter correct value");
        rozpodilPoModulu();
    }
}
rozpodilPoModulu();















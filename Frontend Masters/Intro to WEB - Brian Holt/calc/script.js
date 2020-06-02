let num1 = -1;
let num2 = -1;
let operator = "";

function calculate(num1, num2, operator) {
    let result = 0;
    console.log(operator);
    switch (operator) {
        case '+': {
            result = num1 + num2;
            break;
        }
        case '-': {
            result = num1 - num2;
            break;
        }
        case 'x': {
            result = num1 * num2;
            break;
        }
        case '÷': {
            result = num1 / num2;
            break;
        }
    }
    console.log(`${num1} ${operator} ${num2} equals ${result}`);
    return Math.floor(result)
}

document.querySelector('.container').addEventListener('click', function (event) {
    let screen = document.querySelector(".display");
    switch (event.target.innerText) {
        case 'C': {
            screen.innerText = "";
            num1 = -1;
            num2 = -1;
            operator = "";
            break;
        }
        case '←': {

            break;
        }
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0': {
            screen.innerText = screen.innerText + event.target.innerText;
            break;
        }
        case '=': {
            if (num1 >= 0) {
                num2 = parseInt(screen.innerText);
                screen.innerHTML = calculate(num1, num2, operator);
                num1 = -1;
                num2 = -1;
                operator = "";
            }
            break;
        }
        case '+':
        case "-":
        case "x":
        case "÷": {
            if (num1 < 0) {
                num1 = parseInt(screen.innerText);
                operator = event.target.innerText;
                screen.innerHTML = "0";
            }
        }
    }
});
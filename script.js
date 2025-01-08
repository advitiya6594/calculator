/*const inputValue = document.getElementById("user-input");
const numberButtons = document.querySelectorAll(".numbers");
const operationButtons = document.querySelectorAll(".operations");

function evaluateExpression(expression) {
  let numbers = [];
  let operators = [];

  for (let i = 0; i < expression.length; i++) {
    if (!isNaN(expression[i])) {
      numbers.push(parseFloat(expression[i]));
    } else {
      operators.push(expression[i]);
    }
  }

  let result = numbers[0];
  for (let i = 0; i < operators.length; i++) {
    switch (operators[i]) {
      case '+':
        result += numbers[i + 1];
        break;
      case '-':
        result -= numbers[i + 1];
        break;
      case '*':
        result *= numbers[i + 1];
        break;
      case '/':
        if (numbers[i + 1] === 0) {
          return "Error"; // Handle division by zero
        }
        result /= numbers[i + 1];
        break;
    }
  }

  return result;
}

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
      inputValue.innerText = "";
    }
    inputValue.innerText += button.innerText;
  });
});

operationButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (!isNaN(inputValue.innerText[inputValue.innerText.length - 1]) || inputValue.innerText === "") { 
      inputValue.innerText += button.innerText;
    }
  });
});

document.querySelector(".operations:last-child").addEventListener("click", () => { 
  try {
    inputValue.innerText = evaluateExpression(inputValue.innerText);
  } catch (error) {
    inputValue.innerText = "Error";
  }
});

document.querySelector(".clear.operations").addEventListener("click", () => {
  inputValue.innerText = "0";
});

document.querySelector(".delete.operations").addEventListener("click", () => {
  inputValue.innerText = inputValue.innerText.slice(0, -1); 
  if (inputValue.innerText === "") {
    inputValue.innerText = "0";
  }
});*/
(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    // Log initial elements
    console.log('Screen element:', screen);
    console.log('Buttons:', buttons);
    console.log('Clear button:', clear);
    console.log('Equal button:', equal);

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            console.log('Button clicked:', value); // Debug log
            if (value !== undefined) { // Ensure value is not undefined
                screen.value += value;
                console.log('Screen value:', screen.value); // Debug log
            }
        });
    });

    equal.addEventListener('click', function(e) {
        console.log('Equal button clicked'); // Debug log
        if (screen.value === '') {
            screen.value = "Please enter";
        } else {
            try {
                let answer = eval(screen.value);
                screen.value = answer;
                console.log('Calculation result:', answer); // Debug log
            } catch (error) {
                screen.value = "Error";
                console.log('Calculation error:', error); // Debug log
            }
        }
    });

    clear.addEventListener('click', function(e) {
        console.log('Clear button clicked'); // Debug log
        screen.value = "";
    });
})();
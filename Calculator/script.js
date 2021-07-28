const displayDiv = document.querySelector("#display");
const keypad = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const del = document.querySelector("#del");
const clear = document.querySelector("#AC");
const equalPressed = document.querySelector("#equal");
const decimal = document.querySelector("#decimal");
const topDisplay = document.querySelector(".top-display");

let displayValue = "0";
let numArr = [];
let numArr2 = [];
let op = "";
let equal = false;

keypad.forEach(button => button.addEventListener("click", keyPressed));
operator.forEach(operator => operator.addEventListener("click", operatorPressed));
del.addEventListener("click", deleteNum);
clear.addEventListener("click", clearDisplay);
equalPressed.addEventListener("click", evaluate);

function keyPressed() {
	if (op.length == 0) {
		//Prevents a leading decimal, ex. 0. and not just .
		if (numArr.length < 2 && numArr[0] == "0" && this.id !== ".") {
			numArr[0] = this.id; 
		} else {
			if (numArr.includes(".") == false) {
				numArr.push(this.id);
			}
			if (numArr.includes(".") == true && this.id != ".") {
				numArr.push(this.id);
			}
		}
		console.log('numArr = '+numArr);
	} else {
		if (numArr2.length < 2 && numArr2[0] == "0" && this.id !== ".") {
			numArr2[0] = this.id;
		} else {
			if (numArr2.includes(".") == false) {
				numArr2.push(this.id);
			}
			if (numArr2.includes(".") == true && this.id != ".") {
				numArr2.push(this.id);	if (this.id == ".") {
					containDecimal = true;
				}
			}	
		}
		console.log('numArr2 = '+numArr2);
	}
	updateDisplay();
}

function operatorPressed() {
	if (numArr.length >= 1&& numArr2.length >= 1 && op.length == 1) {
		/*
		if both num array contain value and op is already pressed,
		evaluate the answer when another op is pressed
		*/
		evaluate();
	}
	op = this.id
	console.log(op);
	updateTopDisplay();
}

function updateDisplay() {
	if (equal == false) {
		/*
		If an operator has been pressed then display numArr2, if not display numArr
		*/
		if (op.length == 0) {
			if (numArr.length == 0) {
				displayValue = "0";
			} else {
				displayValue = numArr.join('');
			}
		} else {
			if (numArr2.length == 0) {
				displayValue = "0";
			} else {
				displayValue = numArr2.join('');
			}
		}
	}
	displayDiv.textContent = displayValue;
}

function updateTopDisplay() {
	if (op.length != 0)
		topDisplay.textContent = numArr.join('') + " " + op;
	else 
		topDisplay.textContent += " " + numArr2.join('') + " =";
}

function clearDisplay() {
	numArr = [];
	numArr2 = [];
	op = "";
	clearTopDisplay()
	updateDisplay();
}

function clearTopDisplay() {
	topDisplay.textContent = "_";
}

function deleteNum() {
	if (op.length == 0){
		numArr.pop();
	} else {
		numArr2.pop();
	}
	updateDisplay();
}

function evaluate() {
	if (numArr.length != 0 && numArr2.length != 0 && op.length !=0) {
		console.log("HERE");
		a = parseFloat(numArr.join(''));
		b = parseFloat(numArr2.join(''));
		let answer;
		console.log("a = " +a);
		console.log("b = " +b);
	
		switch(op) {
			case "+":
				answer = add(a,b);
				break;
			case "-":
				answer = subtract(a,b);
				break;
			case "*":
				answer = multiply(a,b);
				break;
			case "/":
				answer = divide(a,b);
				break;
			default:
				break;
		}
	
		//Round off cetain numbers
		displayValue = String(answer);
		console.log(displayValue);
		equal = true;
		updateDisplay();
		equal = false;
	
		/*
		After equals is pressed set operator pressed and numArr2 to empty
		and set numArr to answer to allow user chain operators
		*/
		op = "";
		if (displayValue == "undefined" || displayValue == "Infinity" || displayValue == "NaN") {
			clearTopDisplay()
			displayValue = "0";
			numArr = [];
		} else {
			numArr = displayValue.split('');
			updateTopDisplay();
		}
		console.log(numArr);
		numArr2 = [];
	}
}

function add(a,b) {
	return (a+b);
}

function subtract(a,b) {
	return (a-b);
}

function multiply(a,b) {
	return (a*b);
}

function divide(a,b) {
	return (a/b);
}


updateDisplay();
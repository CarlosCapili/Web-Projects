const displayDiv = document.querySelector("#display");
const keypad = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const del = document.querySelector("#del");
const clear = document.querySelector("#AC");
const equalPressed = document.querySelector("#equal");

let displayValue = "";
let numArr = [];
let numArr2 = [];
let op = ""
let equal = false;

keypad.forEach(button => button.addEventListener("click", keyPressed));
operator.forEach(operator => operator.addEventListener("click", operatorPressed));
del.addEventListener("click", deleteNum);
clear.addEventListener("click", clearDisplay);
equalPressed.addEventListener("click", evaluate);

function keyPressed() {
	if (op.length == 0) {
		numArr.push(this.id);
		if (numArr[0] == "0") {
			numArr.pop(); // no leading 0's
		}
		console.log('numArr = '+numArr);
	} else {
		numArr2.push(this.id);
		if (numArr2[0] == "0") {
			numArr2.pop(); // no leading 0's
		}
		console.log('numArr2 = '+numArr2);
	}
	display();
}

function operatorPressed() {
	/*
	if both num array contain value and op is already pressed,
	evaluate the answer when another op is pressed
	*/
	if (numArr.length >= 1 && numArr2.length >= 1 && op.length == 1) {
		evaluate();
	}

	op = this.id
	console.log(op);
}

function display() {
	if (equal == false) {
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

function clearDisplay() {
	displayValue = "0";
	numArr = [];
	numArr2 = [];
	op = "";
	display();
}

function deleteNum() {
	if (op.length == 0){
		numArr.pop();
	} else {
		numArr2.pop();
	}
	display();
}

function evaluate() {
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
			console.log("DID NOT PRESS AN OPERATOR!");
	}

	displayValue = String(answer);
	equal = true;
	display();
	equal = false;
	/*
	After equals is pressed set operator pressed and numArr2 to empty
	and set numArr to answer to allow user chain operators
	*/
	op = "";
	numArr = displayValue.split('');
	//console.log(numArr);
	numArr2 = [];
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

display();
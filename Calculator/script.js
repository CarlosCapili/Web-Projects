var button = document.querySelector(".calc-keypad");
var display = document.getElementById("display");
var btnPressed = [];
var opPressed = [];

button.addEventListener('click', btn_clicked);

function btn_clicked() {
	var id = event.target.id;
	 
	if (id == "equal") {
		evaluate();
	}
	else if (id == "AC") {
		clearDisplay();
	}
	else if (id == "+" || id == "-" || id == "*" || id == "/") {
		opPressed.push(btnPressed.join("") + id);
		btnPressed = []; 
		console.log(opPressed);
		updateDisplay();
	}
	else {
		btnPressed.push(id);
		console.log(btnPressed);
		updateDisplay();
	}

}

function updateDisplay() {
	if (display.innerHTML == "0") {
		display.innerHTML = btnPressed.join("");
	}
	else {
		display.innerHTML = opPressed.join("") + btnPressed.join("");
	}
}

function clearDisplay() {
	display.innerHTML = 0;
	btnPressed = []; 
	opPressed = [];
}

function evaluate() {
	temp_str = opPressed.join("") + btnPressed.join(""); 
	answer = eval(temp_str);
	display.innerHTML = answer;
	btnPressed = [String(answer)];
	opPressed = [];
}


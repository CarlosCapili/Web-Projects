var button = document.querySelector(".calc-keypad");
var display = document.getElementById("display");
var numPressed = [];

button.addEventListener('click', btn_clicked);

function btn_clicked() {
	var id = event.target.id;

	if (id == "equal"){
		evaluate();
	}
	else if (id == "AC"){
		clearDisplay();
	}
	else {
		numPressed.push(id);
		console.log(numPressed);
		updateDisplay(id);
	}
}

function updateDisplay(id) {
	if (display.innerHTML == "0"){
		display.innerHTML = id;
	}
	else {
		display.innerHTML += id;
	}
}

function clearDisplay() {
	display.innerHTML = 0;
	numPressed = []; // empty array
}

function evaluate() {
	temp_str = numPressed.join(""); 
	answer = eval(temp_str);
	display.innerHTML = answer;
	numPressed = [String(answer)];
}


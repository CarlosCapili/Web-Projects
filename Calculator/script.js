var button = document.querySelector(".calc-keypad");
var display = document.getElementById("display");
var btnPressed = [];
var opPressed = [];
var opClicked = 0; //1 means op clicked

button.addEventListener('click', btn_clicked);

function btn_clicked() {
	var id = event.target.id;
	 
	if (id == "equal") {
		evaluate();
	}
	else if (id == "AC") {
		clearDisplay();
	}
	else {
		if (id == "+" || id == "-" || id == "*" || id == "/") {
			if (opClicked == 1){
				// does not allow more than 1 operation to be displayed eg. ++
				// if an operation is already present it will replace it 
				// eg. before: 12+ after: 12-
				var lastEle = opPressed[opPressed.length-1];
				var newStr = lastEle.slice(0,lastEle.length-1) + id;
				opPressed.pop()
				opPressed.push(newStr);
			}
			else if (btnPressed.length == 0){ 
				opPressed.push("0" + id);
			}
			else {
				opPressed.push(btnPressed.join("") + id);
				btnPressed = []; 
			}

			opClicked = 1;
			console.log(opPressed);
		}
		else {
			opClicked = 0;
			btnPressed.push(id);
			if (id == "0" && btnPressed.length >= 1) {
				btnPressed.pop(); //prevent leading zeroes from displaying
			}
			if (id == "0" && opPressed.length >= 1 && btnPressed.length == 0) {
				btnPressed.push(id);	
			}
			console.log(btnPressed);
		}
		updateDisplay();
	}
}

function updateDisplay() {

	display.innerHTML = opPressed.join("") + btnPressed.join("");
	
	//if an operator is pressed first, then display 0
	if (display.innerHTML.length == 0){
		display.innerHTML = 0;
	}
}

function clearDisplay() {
	opClicked = 0;
	display.innerHTML = 0;
	btnPressed = []; 
	opPressed = [];
}

function evaluate() {
	opClicked = 0;
	if (opPressed.length == 0 && btnPressed.length == 0) {
		display.innerHTML = 0;
	}
	else {
		temp_str = opPressed.join("") + btnPressed.join(""); 
		answer = eval(temp_str);
		display.innerHTML = answer;
		btnPressed = [String(answer)];
		opPressed = [];
	}
}


// javascript code references from w3schools js tutorials
(function () {

var state = "";


function ready() {
var n0 = document.getElementById("0");
var n1 = document.getElementById("1");
var n2 = document.getElementById("2");
var n3 = document.getElementById("3");
var n4 = document.getElementById("4");
var n5 = document.getElementById("5");
var n6 = document.getElementById("6");
var n7 = document.getElementById("7");
var n8 = document.getElementById("8");
var n9 = document.getElementById("9");
var clr = document.getElementById("C");
var dot = document.getElementById(".");
var add = document.getElementById("+");
var sub = document.getElementById("-");
var mul = document.getElementById("*");
var div = document.getElementById("/");
n0.addEventListener("click",setNumber);
n1.addEventListener("click",setNumber);
n2.addEventListener("click",setNumber);
n3.addEventListener("click",setNumber);
n4.addEventListener("click",setNumber);
n5.addEventListener("click",setNumber);
n6.addEventListener("click",setNumber);
n7.addEventListener("click",setNumber);
n8.addEventListener("click",setNumber);
n9.addEventListener("click",setNumber);
dot.addEventListener("click",setNumber);
clr.onclick=operate;
add.onclick=operate;
sub.onclick=operate;
mul.onclick=operate;
div.onclick=operate;
}





function setNumber(){
var input=document.getElementById("input");
if(state!=0) {
 var param = state.split(" ");
	if(param[0]==input.value){
		input.value="";
	}
}
input.value+=this.id;
}

function clear() {

var number = document.getElementById("input");
number.value="";

}

function operate(){

var number = document.getElementById("input");

switch (this.id) {

case "+" :

	if (number.value=="") {
		break;
	}
	if (state == 0 || state==number.value) {
		state = number.value + " /+";
		//alert(state);
	}

	else {
		var operator = findOperator(state);
		if(operator == "+") {
			//alert("both are +");
			var param = state.split(" ");
			//alert(state);
			var result = calculate(param[0], number.value, operator);
			state=result+" /+";
		}
		else {
			var param = state.split(" ");
			//alert(param[0] + " " + param[2] + " " + operator);
			var result = calculate(param[0], number.value, operator);
			state=result + " /+";
			
		}
		number.value=result;
	}

break;
	
case "-" :
	if (number.value == "") {
		break;
	}
	if (state == 0 || state==number.value) {
		state = number.value + " /-";
		//alert(state);
	}

	else {       
		var operator = findOperator(state).toString();
		if(operator == "-") {
			//alert("both are -");
			var param = state.split(" ");
			//alert(state);
			var result = calculate(param[0],number.value,operator);
			state=result + " /-";
			
		}
		else {
			var param = state.split(" ");
			//alert(param[0] + " " + param[2] + " " + operator);
			var result = calculate(param[0],number.value,operator);
			state=result + " /-";
			
		}
		number.value=result;
	}

break;

case "*" :
	if (number.value=="") {
		break;
	}	

	if (state == 0 || state==number.value) {
		state = number.value + " /*";
		//alert(state);
	}

	else {       
		var operator = findOperator(state).toString();
		if(operator == "*") {
			//alert("both are *");
			var param = state.split(" ");
			//alert(state);
			var result = calculate(param[0],number.value,operator);
			state=result+" /*";
			number.value=result;
		}
		else {
			var param = state.split(" ");
			//alert(param[0] + " " + param[2] + " " + operator);
			var result = calculate(param[0],number.value,operator);
			state=result+" /*";
			number.value=result;
		}
	}

break;

case "/" :
	if (number.value == "") {
		break;
	}

	if (state == 0 || state==number.value) {
		state = number.value + " //";
		//alert(state);
	}

	else {       
		var operator = findOperator(state).toString();
		if(operator == "/") {
			//alert("both are /");
			var param = state.split(" ");
			//alert(state);
			var result = calculate(param[0],number.value,operator);
			state=result + " //";
			number.value=result;
		}
		else {
			var param = state.split(" ");
			//alert(param[0] + " " + param[2] + " " + operator);
			var result = calculate(param[0],number.value,operator);
			state=result + " //"
			number.value=result;
		}
	}

break;

case "C" :
number.value="";
state="";
break; 

}

}

function findOperator(currState) {
	var input=document.getElementById("input");
	var operator="";
	if(currState!=input.value) {
	var index = currState.search("/");
		if(index!=-1){
			operator = currState.substr(index+1,1).toString();
		}
	}
return operator;
}

function calculate(num1,num2,operator){

switch(operator) {

case "+":
return Number(num1)+Number(num2);
break;

case "-":
return Number(num1)-Number(num2);
break;

case "*":
return Number(num1)*Number(num2);
break;

case "/":
return Number(num1)/Number(num2);
break;

}

}

function test()
{
var input=document.getElementById("input");
input.value="";

ready();
}

window.addEventListener("load", test ,false);
})();

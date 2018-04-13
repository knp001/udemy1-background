var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// console.log(body);

function setGradient() {
	body.style.background = "linear-gradient(to right, "
	+ color1.value + ", "
	+ color2.value + ")";

	css.textContent = body.style.background;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function reInit() {
	color1.value = "#ff0000";
	color2.value = "#ffff00";
	setGradient();
}

function randomColors() {
	color1.value = "#"+random255()+random255()+random255();
	color2.value = "#"+random255()+random255()+random255();
	setGradient();
}

function random255() {
	var tNum=(Math.floor((Math.random()*255)+1)).toString(16);
	if (tNum.length < 2) tNum+="0";
	return tNum;
}

window.addEventListener("load", setGradient);

// initialize  variables
 
let canvas = document.getElementById('gameCanvas')
let context = canvas.getContext('2d')
let parentDiv = document.getElementById('gameCanvas').parentElement.offsetWidth;


canvas.height = window.innerHeight * 0.15;
canvas.width = parentDiv;

let color=  "#2D749F";
let pen = 10;


canvas.addEventListener("mousemove", mouseMove);
canvas.addEventListener("click", mouseMove);
canvas.addEventListener("ontouchstart", mouseMove);



function update() {

	if (parentDiv != document.getElementById('gameCanvas').parentElement.offsetWidth )  {
		canvas.width = document.getElementById('gameCanvas').parentElement.offsetWidth;
		parentDiv = document.getElementById('gameCanvas').parentElement.offsetWidth;
		}
	
}

function clearCanvas (){
	context.clearRect(0,0, canvas.width, canvas.height);
	
}


function mouseMove (){
	
	paint();

	update();
	
}

function blue(){
	color = "#2D749F"

}

function black(){
	color = "#010101"
}

function red(){
	color = "#C31123"
}

function paint(){
	context.fillStyle = color;
  var rect = event.target.getBoundingClientRect();
  var x = event.clientX - rect.left; //x position within the element.
  var y = event.clientY - rect.top;  //y position within the element.
	context.fillRect(x, y, pen, pen);
}



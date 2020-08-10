// initialize config variables here

let shouldPaint = true;

canvas = document.getElementById('gameCanvas')
context = canvas.getContext('2d')

canvas.height = window.innerHeight * 0.15;
canvas.width = window.innerWidth * 0.98;

canvas.addEventListener("mousedown", mouseDown);
canvas.addEventListener("mouseup", mouseUp);
canvas.addEventListener("mousemove", mouseMove);
object.addEventListener("touchmove", mouseMove);
object.addEventListener("touchend", mouseUp);


function mouseDown (event) {
	shouldPaint = true;
	context.clearRect(0,0, canvas.width, canvas.height);
	
}

function mouseUp (){
	
	shouldPaint = true;
	context.clearRect(0,0, canvas.width, canvas.height);
}

function mouseMove (){
	if (shouldPaint){
		paint();
	};
	
}

function paint(){
	context.fillStyle = "#2D749F";

  var rect = event.target.getBoundingClientRect();
  var x = event.clientX - rect.left; //x position within the element.
  var y = event.clientY - rect.top;  //y position within the element.
	context.fillRect(x, y, 15, 15);
}


let snek;
let scale = 10;

function setup() {
	colorMode(HSB);
	createCanvas(400,400);
	snek = new Snake
	frameRate(scale);
}
function keyPressed(){
	if(keyCode == UP_ARROW && snek.yspeed != scale){
		snek.direction(0,-1)
	}
	else if(keyCode == DOWN_ARROW && snek.yspeed != -scale){
		snek.direction(0,1)
	}
	else if(keyCode == LEFT_ARROW && snek.xspeed != scale){
		snek.direction(-1,0)
	}
	else if(keyCode == RIGHT_ARROW && snek.xspeed != -scale){
		snek.direction(1,0)
	}
}

function draw() {
	background(0);
	snek.update();
	snek.show();
	
}
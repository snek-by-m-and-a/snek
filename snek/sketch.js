let snek;
let scale = 20;

function setup() {
	colorMode(HSB,360,100,100);
	createCanvas(400,400);
	snek = new Snake
	frameRate(7);
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
	background(25);
	snek.update();
	snek.show();
	
}
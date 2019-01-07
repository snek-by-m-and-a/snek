let snek;
let mongoose
let scale = 15;

function setup() {
	createCanvas(40*scale,40*scale);
	snek = new Snake(0);
	mongoose = new Snake(1);
	food = new Food();
	frameRate(7);
}

function draw() {
	background(100);
	snek.update();
	snek.show();
	for(let i=0;i<snek.tail.length;i++){
		snek.tail[i].show()
	}
	mongoose.update();
	mongoose.show();
	for(let i=0;i<mongoose.tail.length;i++){
		mongoose.tail[i].show()
	}
	food.show();
	food.eat()
	
	
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
	else if(keyCode == 87 && mongoose.yspeed != scale){
		mongoose.direction(0,-1)
	}
	else if(keyCode == 83 && mongoose.yspeed != -scale){
		mongoose.direction(0,1)
	}
	else if(keyCode == 65 && mongoose.xspeed != scale){
		mongoose.direction(-1,0)
	}
	else if(keyCode == 68 && mongoose.xspeed != -scale){
		mongoose.direction(1,0)
	}
}

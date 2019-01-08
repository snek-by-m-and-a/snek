let snek;
let mongoose
let scale = 15;
let sscore = 0;
let mscore = 0;
let round = 1;

function setup() {
	createCanvas(40*scale,40*scale);
	snek = new Snake(0);
	mongoose = new Snake(1);
	food = new Food();
	frameRate(7);
}

function draw() {
	background(100);
	textSize(12);
	text(['mongoose:' ,mscore],5,10);
	text(['snek:' ,sscore],width-45,10);
	fill(180);
	noStroke();
	textSize(40*scale);
	text(round,width/4,5*height/6);
	food.show();
	food.eat()
	snek.update();
	snek.show();
	for(let i=1;i<snek.tail.length;i++){
		snek.tail[i].show();
		snek.tail[i].kill();
	}
	mongoose.update();
	mongoose.show();
	for(let i=1;i<mongoose.tail.length;i++){
		mongoose.tail[i].show();
		mongoose.tail[i].kill();
	}
	
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

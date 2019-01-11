let snek;
let mongoose;
let scale = 20;
let start = false;
let end = false;
let sscore = 0;
let mscore = 0;
let round = 1;
let player = 0;

function setup() {
	createCanvas(40*scale,40*scale);
	frameRate(10);
	startscreen();
}

function draw() {
	if(start && !end){
		if (players ==2){
			runTwoPlayer()
		}
		if (players ==1){
			runSinglePlayer()
		}
	};
	if(end){endscreen()}
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

//START AND END SCREENS
//START SCREEN
function startscreen(){
	background(100);
	let twoPlayer;
	twoPlayer = createButton("two player");
	twoPlayer.mousePressed(twoPlayerSetup);
	twoPlayer.position(windowWidth/2,height/2);
	
	singlePlayer = createButton("Single Player");
	singlePlayer.mousePressed(singlePlayerSetup);
	singlePlayer.position(windowWidth/2,3*height/4);
}
//END START SCREEN

//END SCREEN
function endscreen(){
	background(100);
}
//END OF SCREENS

//TWO PLAYER GAME
function twoPlayerSetup(){
	removeElements();
	snek = new Snake(1);
	mongoose = new Snake(0);
	food = new Food();
	start = true;
	players = 2;
} 

function runTwoPlayer(){
	background(100);
	textSize(scale);
	stroke(0)
	text(['mongoose:'+mscore],5,scale);
	text(['snek:'+sscore],width-3.5*scale,scale);
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
	if(sscore == 5){
		end = true;
	}
	else if(mscore==5){
		end = true;
	}
}
//END OF TWO PLAYER GAME

//SINGLE PLAYER GAME
function singlePlayerSetup(){
	removeElements();
	snek = new Snake(1);
	mongoose = new Snake(0);
	food = new Food();
	start = true;
	players = 1;
} 

function runSinglePlayer(){
	background(100);
	textSize(scale);
	text(['snek:'+sscore],width-3.5*scale,scale);
	food.show();
	food.eat()
	snek.update();
	snek.show();
	for(let i=1;i<snek.tail.length;i++){
		snek.tail[i].show();
		snek.tail[i].kill();
	}
}
//END OF SINGLE PLAYER GAME
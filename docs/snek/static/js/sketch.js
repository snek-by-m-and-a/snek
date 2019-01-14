//GLOBALS
let scale = 20;
let sscore = 0;
let mscore = 0;
let round = 1;
let players = 0;
//page stuff
var element = document.createElement('pageContent');
element.style.width = `${40*scale}px`;

function setup() {
	var myCanvas = createCanvas(40*scale,40*scale);
	myCanvas.parent("gameHolder");
	frameRate(10);
	startscreen();
}

let start = false;
let end = false;
function draw() {
	if(!start){
		startscreen();
	}
	else if(start && !end){
		if (players ==2){
			runTwoPlayer()
		}
		else if (players ==1){
			runSinglePlayer()
		}
	}
	else if(end){endscreen()}
}

function keyPressed(){
	//SNEK MOVE
	if(keyCode == UP_ARROW && snek.yspeed != scale && !snekHasPressed){
		snek.direction(0,-1);
		snekHasPressed = true;
	}
	else if(keyCode == DOWN_ARROW && snek.yspeed != -scale && !snekHasPressed){
		snek.direction(0,1)
		snekHasPressed = true;
	}
	else if(keyCode == LEFT_ARROW && snek.xspeed != scale && !snekHasPressed){
		snek.direction(-1,0)
		snekHasPressed = true;
	}
	else if(keyCode == RIGHT_ARROW && snek.xspeed != -scale && !snekHasPressed){
		snek.direction(1,0)
		snekHasPressed = true;
	}
	//MUNGOSE MOVE
	else if(keyCode == 87 && mungose.yspeed != scale && !mungoseHasPressed){
		mungose.direction(0,-1)
		mungoseHasPressed = true;
	}
	else if(keyCode == 83 && mungose.yspeed != -scale){
		mungose.direction(0,1)
		mungoseHasPressed = true;
	}
	else if(keyCode == 65 && mungose.xspeed != scale){
		mungose.direction(-1,0)
		mungoseHasPressed = true;
	}
	else if(keyCode == 68 && mungose.xspeed != -scale){
		mungose.direction(1,0)
		mungoseHasPressed = true;
	}
}

//START AND END SCREENS
//START SCREEN
function startscreen(){
	removeElements();
	background(100);
	let twoPlayer;
	twoPlayer = createButton("two player");
	twoPlayer.parent("gameHolder");
	twoPlayer.mousePressed(twoPlayerSetup);
	twoPlayer.position(windowWidth/2,height/2);
	
	singlePlayer = createButton("Single Player");
	singlePlayer.parent("gameHolder");
	singlePlayer.mousePressed(singlePlayerSetup);
	singlePlayer.position(windowWidth/2,3*height/4);
}
//END START SCREEN

//END SCREEN
function endscreen(){
	background(100);
}
//END OF SCREENS

//THE SNEKS
let snek;
let mungose;

//TWO PLAYER GAME
let snekHasPressed = false;
let mungoseHasPressed = false;
function twoPlayerSetup(){
	removeElements();
	snek = new Snake(1);
	mungose = new Snake(0);
	grape = new grape();
	start = true;
	players = 2;
} 

function runTwoPlayer(){
	mungoseHasPressed = false;
	snekHasPressed = false;
	background(100);
	textSize(scale);
	stroke(0)
	text(['mungose:'+mscore],5,scale);
	text(['snek:'+sscore],width-3.5*scale,scale);
	fill(180);
	noStroke();
	textSize(40*scale);
	text(round,width/4,5*height/6);
	grape.show();
	grape.eat()
	snek.update();
	snek.show();
	for(let i=1;i<snek.tail.length;i++){
		snek.tail[i].show();
		snek.tail[i].kill();
	}
	mungose.update();
	mungose.show();
	for(let i=1;i<mungose.tail.length;i++){
		mungose.tail[i].show();
		mungose.tail[i].kill();
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
	mungose = new Snake(0);
	grape = new grape();
	start = true;
	players = 1;
} 

function runSinglePlayer(){
	snekHasPressed = false;
	background(100);
	textSize(scale);
	text(['snek:'+sscore],width-3.5*scale,scale);
	grape.show();
	grape.eat()
	snek.update();
	snek.show();
	for(let i=1;i<snek.tail.length;i++){
		snek.tail[i].show();
		snek.tail[i].kill();
	}
}
//END OF SINGLE PLAYER GAME
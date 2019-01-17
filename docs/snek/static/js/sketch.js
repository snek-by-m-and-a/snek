//GLOBALS
let scale = 20;
let sscore = 0;
let mscore = 0;
let round = 1;
let players = 0;
let hasRun = false;

function setup() {
	console.log(windowWidth);
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
	//mongoose MOVE
	else if(keyCode == 87 && mongoose.yspeed != scale && !mongooseHasPressed){
		mongoose.direction(0,-1)
		mongooseHasPressed = true;
	}
	else if(keyCode == 83 && mongoose.yspeed != -scale && !mongooseHasPressed){
		mongoose.direction(0,1)
		mongooseHasPressed = true;
	}
	else if(keyCode == 65 && mongoose.xspeed != scale && !mongooseHasPressed){
		mongoose.direction(-1,0)
		mongooseHasPressed = true;
	}
	else if(keyCode == 68 && mongoose.xspeed != -scale && !mongooseHasPressed){
		mongoose.direction(1,0)
		mongooseHasPressed = true;
	}
}

//START AND END SCREENS
//START SCREEN
function startscreen(){
	hasRun = false;
	removeElements();
	background(100);
	let twoPlayer;
	twoPlayer = createButton("Two Player");
	twoPlayer.parent("gameHolder");
	twoPlayer.mousePressed(twoPlayerSetup);
	twoPlayer.position((width+twoPlayer.offsetWidth)/2,height/2);
	
	singlePlayer = createButton("Single Player");
	singlePlayer.parent("gameHolder");
	singlePlayer.mousePressed(singlePlayerSetup);
	singlePlayer.position((width+singlePlayer.offsetWidth)/2,3*height/4);
}
//END START SCREEN

//END SCREEN
function endscreen(){
	removeElements();
	background(100);
	sscore = 0;
	mscore = 0;
	round = 1;
	let startAgain = createButton("Back to Start");
	startAgain.parent("gameHolder");
	startAgain.mousePressed(beginAgain);
	startAgain.position((width+startAgain.offsetWidth)/2,height/2);

	if(players==1){
		let singlePlayerAgain = createButton("Play Single Player Again?");
		singlePlayerAgain.parent("gameHolder");
		singlePlayerAgain.mousePressed(singleAgain);
		singlePlayerAgain.position((width+singlePlayerAgain.offsetWidth)/2,3*height/4);
	}
	else if(players==2){
		let twoPlayerAgain = createButton("Play Two Player Again?");
		twoPlayerAgain.parent("gameHolder");
		twoPlayerAgain.mousePressed(twoAgain);
		twoPlayerAgain.position((width+twoPlayerAgain.offsetWidth)/2,3*height/4);
	}
}

function singleAgain(){
	end = false;
	sscore = 0;
	singlePlayerSetup();
	runSinglePlayer();
}
function twoAgain(){
	end = false;
	sscore = 0;
	mscore = 0;
	round = 1;
	twoPlayerSetup();
	runTwoPlayer();
}
function beginAgain(){
	start = false;
	end = false;
}
//END OF SCREENS

//THE SNEKS
let snek;
let mongoose;

//THE ALLMIGHTY GRAPE
let grape;

//TWO PLAYER GAME
let snekHasPressed = false;
let mongooseHasPressed = false;
function twoPlayerSetup(){
	removeElements();
	snek = new Snake(1);
	mongoose = new Snake(0);
	if(hasRun){grape.anotherOne()}
	else{grape = new Grape();}
	start = true;
	players = 2;
	hasRun = true
} 

function runTwoPlayer(){
	mongooseHasPressed = false;
	snekHasPressed = false;
	background(100);
	textSize(scale);
	stroke(0)
	text(['Mongoose: '+mscore],5,scale);
	text(['Snek: '+sscore],width-3.5*scale,scale);
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
	grape = new Grape();
	start = true;
	players = 1;
} 

function runSinglePlayer(){
	snekHasPressed = false;
	background(100);
	textSize(scale);
	text(['Snek: '+sscore],width-3.5*scale,scale);
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
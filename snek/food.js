function Food(){
	this.x = floor(random(40))*scale;
	this.y = floor(random(40))*scale;
	
	this.show = function(){
		fill(255,0,0);
		rect(this.x,this.y,scale,scale)
	}
	
	this.anotherOne = function(){
		this.x = floor(random(40))*scale;
		this.y = floor(random(40))*scale;
	}
	
	this.eat = function(){
		if (mongoose.x == this.x && mongoose.y == this.y){
			mongoose.grow();
			this.anotherOne();
			
		}
		else if (snek.x == this.x && snek.y == this.y){
			snek.grow();
			this.anotherOne();
		}
	}
	
}

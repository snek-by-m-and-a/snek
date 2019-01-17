function Grape(){
	this.x = floor(random(40))*scale;
	this.y = floor(random(40))*scale;
	
	this.show = function(){
		stroke(218,172,213);
		fill(142,69,133);
		ellipse(this.x+scale/2,this.y+scale/2,scale,scale);
	}
	
	this.anotherOne = function(){
		this.x = floor(random(40))*scale;
		this.y = floor(random(40))*scale;
		
		for(let i=0; i<snek.tail.length; i++){
			if(this.x==snek.tail[i].x && this.y==snek.tail[i].y){
				console.log("hi");
				this.anotherOne();
			}
		}
		
		if(players == 2){
			for(let i=0; i<mongoose.tail.length; i++){
				if(this.x==mongoose.tail[i].x && this.y==mongoose.tail[i].y){
					this.anotherOne();
				}
			}
		}
	}
	
	this.eat = function(){
		if (Math.round(mongoose.x/scale) == Math.round(this.x/scale) && Math.round(mongoose.y/scale) == Math.round(this.y/scale) && players == 2){
			mongoose.grow();
			this.anotherOne();
			
		}
		else if (Math.round(snek.x/scale) ==Math.round(this.x/scale) && Math.round(snek.y/scale) ==Math.round(this.y/scale)){
			snek.grow();
			this.anotherOne();
			if (players ==1){sscore++} 
		}
	}
	
}

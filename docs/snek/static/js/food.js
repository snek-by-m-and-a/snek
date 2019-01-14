function grape(){
	this.x = floor(random(40))*scale;
	this.y = floor(random(40))*scale;
	
	this.show = function(){
		stroke(218,172,213)
		fill(142,69,133);
		ellipse(this.x+scale/2,this.y+scale/2,scale,scale)
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
			for(let i=0; i<mungose.tail.length; i++){
				if(this.x==mungose.tail[i].x && this.y==mungose.tail[i].y){
					this.anotherOne();
				}
			}
		}
	}
	
	this.eat = function(){
		if (mungose.x == this.x && mungose.y == this.y && players == 2){
			mungose.grow();
			this.anotherOne();
			
		}
		else if (snek.x == this.x && snek.y == this.y){
			snek.grow();
			this.anotherOne();
			if (players ==1){sscore++} 
		}
	}
	
}

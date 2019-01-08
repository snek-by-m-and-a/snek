function Snake(color){
	this.x = (20+color)*scale;
	this.y = 20*scale;
	this.xspeed = pow(-1,color)*scale;
	this.yspeed = 0;
	
	this.update = function(){
		this.x += this.xspeed;
		this.y += this.yspeed;
		this.x = constrain(this.x, 0, width-scale);
		this.y = constrain(this.y, 0, height-scale);
		for (i=this.tail.length-1;i>0;i--){
			if(i==0){
				this.tail[i].x = this.x;
				this.tail[i].y = this.y;
			}
			else if(i!==0){
				this.tail[i].x = this.tail[i-1].x;
				this.tail[i].y = this.tail[i-1].y;
			}
		}
	}
	this.show = function(){
		fill(255-(255*color));
		rect(this.x, this.y, scale, scale);
		fill(255*color);
		rect(this.x+2, this.y+2, scale-4, scale-4);
	}
	this.direction = function(x,y){
		this.xspeed = x*scale;
		this.yspeed = y*scale;
	}
	
	this.tail = [];
	this.grow = function(){
		this.tail.push(new segment())
	}
	
	this.kill = function(){
		if(color == 0){
			//mongoose wins
		}
		else if(color==1){
			//snek wins
		}
	}
	
}
function segment(){
	this.x = 0;
	this.y = 0;
	
	this.show = function(){
		fill(255-(255*color));
		rect(this.x, this.y, scale, scale);
		fill(255*color);
		rect(this.x+2, this.y+2, scale-4, scale-4);
	}
	
	this.kill = function(){
		if (mongoose.x == this.x && mongoose.y == this.y){
			mongoose.kill();
		}
		else if (snek.x == this.x && snek.y == this.y){
			snek.kill();
		}
	}
}

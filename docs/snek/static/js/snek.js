function Snake(color){
	this.x = (19+color)*scale;
	this.y = 19*scale;
	this.xspeed = pow(-1,color+1)*scale;
	this.yspeed = 0;
	
	this.update = function(){
		this.x += this.xspeed;
		this.y += this.yspeed;
		this.x = constrain(this.x, 0, width-scale);
		this.y = constrain(this.y, 0, height-scale);
		for (i=this.tail.length-1;i>=0;i--){
			if(i==0){
				this.tail[i].x = this.x;
				this.tail[i].y = this.y;
				
			}
			else if(i!=0){
				this.tail[i].x = this.tail[i-1].x;
				this.tail[i].y = this.tail[i-1].y;
			}
		}
	}
	this.show = function(){
		stroke(255-(255*color));
		strokeWeight(2);
		fill(255,0,0);
		rect(this.x, this.y, scale, scale);
		fill(255);
	}
	this.direction = function(x,y){
		this.xspeed = x*scale;
		this.yspeed = y*scale;
	}
	
	this.tail = [new segment];
	this.grow = function(){
		this.tail.push(new segment(color,this.tail.length))
	}
	
	this.kill = function(){
		if(players ==1){
			end = true;
			alert(`final length is ${sscore}`)
		}
		else{
			if(color == 0){
				alert(`mungose wins round ${round}`);
				mscore +=1;
				round +=1;
				twoPlayerSetup();
			}
			else if(color==1){
				alert(`snek wins round ${round}`);
				sscore +=1;
				round +=1;
				twoPlayerSetup();
			}
		}
	}
	
}
function segment(color,index){
	this.x = 0;
	this.y = 0;
	
	this.show = function(){
		fill(255-(255*color));
		rect(this.x, this.y, scale, scale);
		colorMode(HSB);
		fill((32*index)%255,255,255);
		colorMode(RGB);
		rect(this.x+2, this.y+2, scale-4, scale-4);
		fill(255);
	}
	
	this.kill = function(){
		if (mungose.x == this.x && mungose.y == this.y && players == 2){
			mungose.kill();
		}
		else if (snek.x == this.x && snek.y == this.y){
			snek.kill();
		}
	}
}

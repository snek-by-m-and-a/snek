function Snake(){
	this.x = width/2;
	this.y = height/2;
	this.xspeed = scale;
	this.yspeed = 0;
	
	this.update = function(){
		this.x += this.xspeed;
		this.y += this.yspeed;
		this.x = constrain(this.x, 0, width-scale);
		this.y = constrain(this.y, 0, height-scale);
		this.hue = map(this.x, 0, width-scale, 0, 360);
		this.sat = map(this.y, 0, height-scale, 0, 255);
	}
	this.show = function(){
		fill(this.hue, this.sat, 255);
		rect(this.x, this.y, scale, scale);
	}
	this.direction = function(x,y){
		this.xspeed = x*scale;
		this.yspeed = y*scale;
	}
}
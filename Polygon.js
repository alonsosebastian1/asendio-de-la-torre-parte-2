class Polygon {
	constructor(x, y, width, height)
	{
		var options={
			restitution :2,
            friction :1,
			}
	   
		this.x=x;
		this.y=y;
        this.width = width;
        this.height = height;
		this.polygon_image=loadImage("polygon.png")
		this.body = Bodies.rectangle(x, y, width, height, options);
		World.add(world,this.body);
		this.trajectory =[];
	}

	display()
	{	
        var angle = this.body.angle;
        var pos= this.body.position;
		push()
		translate(pos.x,pos.y);
		rectMode(CENTER);
		rotate(angle)
		fill("black")
		imageMode(CENTER);
		image(this.polygon_image,pos.x,pos.y,this.width,this.height)
	    pop()
	

		
 }
}

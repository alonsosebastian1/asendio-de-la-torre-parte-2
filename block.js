class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
       
        this.image0 = loadImage("block.png");
        this.Visiblity = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

        
        
      }
      display(){
        if(this.body.speed < 2){
          var angle = this.body.angle;
          var pos= this.body.position;
          image(this.image0,pos.x-15,pos.y-20,this.width,this.height)
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          pop();
        }else{
          World.remove(world, this.body,this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          image(this.image0,this.body.position.x, this.body.position.y,this.width,this.height);
          pop();
         }
      }
}

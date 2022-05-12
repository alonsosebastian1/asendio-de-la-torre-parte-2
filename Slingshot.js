class Slingshot{
    constructor(bodyA,pointB){
        var options={ bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:1
        
    }
    this.pointB=pointB
    this.sling =Constraint.create(options);
    World.add(world,this.sling);
    this.Visiblity = 255;
    }
   fly(){
       this.sling.bodyA = null
   }
   display(){
       if(this.sling.bodyA){
           var pointA =this.sling.bodyA.position;
           var pointB = this.pointB;
           strokeWeight(2);
          line(pointA.x +20,pointA.y+20,pointB.x+20,pointB.y)
       }
   }
   attach(body){
    this.sling.bodyA = body;
}
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var imageBlock


function preload(){
 polygon_img = loadImage("polygon.png");
 image0 = loadImage("block.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(685,200,250,10);

  //nivel uno
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //nivel dos
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //nivel tres
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //parte superior
  block16 = new Block(390,155,30,40);
/////////////////////////////////////////////////////////////////////////////////////////////////////////
    //nivel 1
    block17 = new Block(600,175,30,40);
    block18 = new Block(630,175,30,40);
    block19 = new Block(660,175,30,40);
    block20 = new Block(690,175,30,40);
    block21 = new Block(710,175,30,40);
    block22 = new Block(740,175,30,40);
    block23 = new Block(770,175,30,40);
    //nivel 2
    block24 = new Block(625,130,30,40);
    block25 = new Block(655,130,30,40);
    block26 = new Block(685,130,30,40);
    block27 = new Block(715,130,30,40);
    block28 = new Block(745,130,30,40);
    //nivel 3
    block29 = new Block(655,90,30,40);
    block30 = new Block(685,90,30,40);
    block31 = new Block(715,90,30,40);
    //parte 4
    block32 = new Block(685,55,30,40);
     ball = Bodies.circle(50,200,20);
     World.add(world,ball);
     slingShot = new Slingshot(this.ball,{x:100,y:200})


  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();
 
  block16.display();
 
  fill("skyblue");
 
 
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();

  block29.display();
  block30.display();
  block31.display();
  
  block32.display();
  image(polygon_img,ball.position.x,ball.position.y,40,40);
 
  slingShot.display();
  
}
    //crea aquí la función mouseDragged
    function mouseDragged(){
      Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
      }
      
      //crea aquí la función mouseReleased 
      function mouseReleased(){
      slingShot.fly();
      }
      function keyPressed(){
        if(keyCode === 32 ){
           slingShot.attach(this.ball);
           
        }
      }
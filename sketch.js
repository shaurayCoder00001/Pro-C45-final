var score = 0

function preload(){
backgroundImg = loadImage("Background.jfif")
bottleImg= loadImage('bottle steel.jpeg')
plasticbottleImg=loadImage("plastic bootle.jpg")
}

function setup() {
  createCanvas(800,400);
  
  
  stand1 = createSprite (420,318,250,10);

 bottle =createSprite(100, 200, 50, 50);
 bottle.addImage(bottleImg)
 bottle.scale = 0.2

 plasticbottle = createSprite(390,270,10 ,10)
 plasticbottle.addImage(plasticbottleImg)
 plasticbottle.scale = 0.3
 
 plasticbottle2 = createSprite(440,270,10 ,10)
 plasticbottle2.addImage(plasticbottleImg)
 plasticbottle2.scale = 0.3
 
 
 
}

function draw() {
  background(backgroundImg);  
  drawSprites();

  text("press the space button  to change bottles",210,42)
  text("you have to use space button to change the bootles below ",300,89)

  fill("white")
  
text("score:"+ score,208,60)

}

function keyPressed(){
  if(keyCode === 32){
    plasticbottle.addImage(bottleImg)
    plasticbottle.scale = 0.1
    plasticbottle2.addImage(bottleImg)const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var stand1
var score = 0
var slingShot
var polygon_img;
function preload(){
  polygon_img=loadImage("bottle steel.jpeg");
 backgroundimg=loadImage("Background.jfif")
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
 
  stand1 = new Stand(430,300,250,10);
 
  
  plasticbootle1 = new Block(30,275,30,40);
  plasticbootle2 = new Block(330,275,30,40);
  plasticbootle3 = new Block(360,275,30,40);
  plasticbootle4 = new Block(390,275,30,40);
  plasticbootle5 = new Block(420,275,30,40);
  plasticbootle6 = new Block(450,275,30,40);
  plasticbootle7 = new Block(480,275,30,40);

  plasticbootle8 = new Block(330,235,30,40);
  plasticbootle9 = new Block(360,235,30,40);
  plasticbootle10 = new Block(390,235,30,40);
  plasticbootle11 = new Block(420,235,30,40);
  plasticbootle12 = new Block(450,235,30,40);
  
  plasticbootle13 = new Block(360,195,30,40);
  plasticbootle14 = new Block(390,195,30,40);
  plasticbootle15 = new Block(420,195,30,40);
  
  plasticbootle16 = new Block(390,155,30,40);

 
 
  polygon = Bodies.circle(50 ,200,20);
  World.add(world,polygon)

  
  slingShot = new Slingshot(this.polygon,{x:100, y:200});

}
function draw() {
  background(backgroundimg)
 
  textSize(20);
  ;
  
  
if (polygon.body.speed =3 ){
   score+=2
}
  
  stand1.display();

  strokeWeight(2);
  stroke(15);
 
  plasticbootle1.display();
  plasticbootle2.display();
  plasticbootle3.display();
  plasticbootle4.display();
  plasticbootle5.display();
  plasticbootle6.display();
  plasticbootle7.display();
  plasticbootle8.display();
  plasticbootle9.display();
  plasticbootle10.display();
  plasticbootle11.display();
  plasticbootle12.display();
  plasticbootle13.display();
  plasticbootle14.display();
  plasticbootle15.display();
  plasticbootle16.display();
  
slingShot.display()

  
imageMode (CENTER)
image(polygon_img,polygon.position.x,polygon.position.y,100,100)
//ellipse(0,0,this.r, this.r);
//ellipseMode(CENTER)
text("press the space button to get another change",40,40)
fill("white")

text("goal : You need to dissepear  all plastic bottles from the stand",100,100)
text("score:"+score,100,120)
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly()
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon)
     
  }
  }
    plasticbottle2.scale = 0.1
    
    score=+2


}

  }

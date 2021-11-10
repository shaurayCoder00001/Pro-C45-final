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
    plasticbottle2.addImage(bottleImg)
    plasticbottle2.scale = 0.1
    
    score=+2


}

  }

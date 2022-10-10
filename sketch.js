
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//variables here=>
var newton,newtonimg;
var backGround;
var apples,apples1,apples2,apples3,applesImg;
var applesA=[]

 var yaxis = [-40, -60, -70, -100,-80,-90];
 var xaxis = [40, 60, 70, 20,300,200,100,18,50,160,190,259,236,155,806,662,159,168,308,760];
  
function preload(){
backGround=loadImage("images/bg.jpg");
newtonimg=loadImage("images/newton.png");
applesImg=loadImage("images/apple.png");

}


function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;


  
 newton=createSprite(width/2,550,100,100);
 newton.addImage(newtonimg);
 newton.scale = 1
 var ypos = random(yaxis);
  var xpos = random(xaxis);

  var ypos2 = random(yaxis);
  var xpos2 = random(xaxis);

  var ypos1 = random(yaxis);
  var xpos1 = random(xaxis);

  var ypos3 = random(yaxis);
  var xpos3 = random(xaxis);
 
  apples =new apple(xpos,ypos);
  apples1 =new apple(xpos1,ypos1);
  apples2 =new apple(xpos2,ypos2);
  apples3 =new apple(xpos3,ypos3);
 

  console.log(windowWidth)
} 


function draw() 
{
  background(backGround);
  Engine.update(engine);
 

     
    
  
  //showapples()
  newtonMove();

 apples.display()
 apples2.display()
 apples3.display()
 apples1.display()
 
  drawSprites();
}
function newtonMove(){
  if(keyDown("right_arrow")){
    newton.x+=10
  }
  if(keyDown("left_arrow")){
    newton.x-=10
  }
}
function showapples() {
  if (apples.length > 0) {
    if (
      apples[apples.length - 1]==undefined||
      apples[apples.length - 1].body.position.x < width - 300
    ) {
      var yaxis = [-40, -60, -70, -100,-80,-90];
      var xaxis = [40, 60, 70, 20,300,200,100,18,50,160,190,259,236];
      var ypos = random(yaxis);
      var xpos = random(xaxis);
      var apples = new apple(
       xpos,
       ypos
      );

      apples.push(applesA);
    }

    for (var i = 0; i < apples.length; i++) {
      Matter.Body.setVelocity(apples[i].body, {
        x: -5,
        y: 0
      });

      apples[i].display();
     
    }
  } else {
    var apples = new apple(width, height - 60, 170, 170, -60);
    apples.push(applesA);
  }
}
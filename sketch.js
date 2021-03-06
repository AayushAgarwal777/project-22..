
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,680,800,20)
bin1=new Log(600,670,100,20)
bin2=new Log(550,630,20,100)
bin3=new Log(650,630,20,100)
ball=new Box(100,650,15,15)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ball.display();
  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:10,y:-8})
}


}


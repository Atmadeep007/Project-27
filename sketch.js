
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var log1;
var ball1;
var string1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	log1 = new Log(400,200);
	ball1 = new Balls(400,250,20);
	string1 = new String(ball1,{x:400, y:200});

	Engine.run(engine);
  
}


function draw() {
  background(0);
  drawSprites();
  log1.display();
  ball1.display();
}




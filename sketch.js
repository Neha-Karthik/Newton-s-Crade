
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(260,400);
	bob2 = new Bob(330,400);
	bob3 = new Bob(400,400);
	bob4 = new Bob(470,400);
	bob5 = new Bob(540,400);

	roof = new Ground(405,130,350,20);

	rope1 = new Rope(bob1.body,roof.body,-145,0);
	rope2 = new Rope(bob2.body,roof.body,-75,0);
	rope3 = new Rope(bob3.body,roof.body,-5,0);
	rope4 = new Rope(bob4.body,roof.body,65,0);
	rope5 = new Rope(bob5.body,roof.body,135,0);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  roof.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-150,y:-100});
	}
}
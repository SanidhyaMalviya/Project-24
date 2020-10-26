const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground

function preload(){
	
}

function setup() {
	createCanvas(1000, 400);

	engine = Engine.create();
	world = engine.world;

	//Creating Bodies Here.
	ground = Bodies.rectangle(width/2, 380, width, 10 , {isStatic:true} );
	World.add(world, ground); 

	bottomSide = new Dustbin(800,360,200,20)
	leftSide = new Dustbin(700,320,20,100)
	rightSide = new Dustbin(900,320,20,100)
	paper = new Paper(100,370,30) 

	keyPressed();
	
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  text(mouseX+" , "+mouseY,100,100);  

  push();
  fill("yellow");
  rect(width/2, 380, width, 10)
  pop();

  bottomSide.display();
  leftSide.display();
  rightSide.display();
  paper.display();

  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Body.applyForce(paper.body,paper.body.position,{x:70,y:-70})
	}
}
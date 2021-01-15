const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var box1, box2, box3;
var paper;

function setup() {
	createCanvas(1400, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, 375, width, 20);
	box1 = new Box(1140, 290, 20, 150);
	box2 = new Box(1200, 355, 100, 20);
	box3 = new Box(1260, 290, 20, 150);
	paper = new Paper(50, 290);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();

}

console.log(paper)

function keyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body, paper.body.position, {x: 90, y: -90});

	}
	
}


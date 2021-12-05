
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(1200, 600);
	var bo={
		isStatic : false,
		restitution : 0.3,
		friction : 0 ,
		density : 1.2
	}
	ground =new Ground(600,580,1200,20);
	lw = new Ground(900,580,20,150);
	rw = new Ground(1080,580,20,150);

	ball = Bodies.circle(200,540,25,bo);

    World.add(world,ball);

	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	background(0);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25);

  ground.show();
  lw.show();
  rw.show();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode=== UP_ARROW){
		Matter.Body.applyForce(ball,ball.position, {x:80,y:-80})
	}
}



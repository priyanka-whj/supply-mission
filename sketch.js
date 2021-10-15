var helicopterSprite, helicopterIMG;
var packageSprite, packageBody, packageIMG;
var ground;
var myEngine;
var myWorld;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");
}

function setup() 
{
	createCanvas(800, 700);

	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	myEngine = Engine.create();
	myWorld = myEngine.world;

	packageBody = Bodies.circle(width/2, 200, 5, {restitution:1, isStatic:true});
	World.add(myWorld, packageBody);

	ground = Bodies.rectangle(width/2, 650, width, 10, {isStatic:true});
 	World.add(myWorld, ground);

	Engine.run(myEngine);
}


function draw() 
{
  rectMode(CENTER);
  background(0);

  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;

  drawSprites();
 
}

function keyPressed() 
{
 if (keyCode === DOWN_ARROW) 
 {
	Matter.Body.setStatic(packageBody, false);
 }
}




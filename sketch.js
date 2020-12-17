
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, treeImage, mango1;
var ground;
var stone, slingShot;
var boy, boyImage;

function preload(){
	boyImage = loadImage('images/boy.png');
	treeImage = loadImage('images/tree.png');
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;


	ground = new Ground(400, 650, 800, 50);
	stone = new Stone(150, 500);

  slingShot = new Slingshot(stone.body, {x:150, y:500});
  
  mango1 = new Mango(200,200);
  mango2 = new Mango(150,170);
  mango3 = new Mango(290,200);
  mango4 = new Mango(220,130);
  mango5 = new Mango(300,150);

	Engine.run(engine);
  
}


function draw() {
  background(255);

  ground.display();
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  stone.display();
  slingShot.display();

  image(boyImage, 100, 425, 200, 300);
  image(treeImage, 250, 125, 500, 500);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  

  drawSprites();
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    //}
}

function mouseReleased(){
  slingShot.fly();
}

function detectcollision(stone, mango){
  mangoBodyPosition = mango.body.position
  stoneBodyPosition = stone.body.position

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=mango.r+stone.r){
    Matter.Body.setStatic(mango.body, false);
  }
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body, {x:150, y:500});
    slingShot.attach(stone.body)
  }
}
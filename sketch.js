var car;
var wall;

var speed;
var weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);

  wall = createSprite(15000, 200, 60, height/2)
  wall.shapeColor=color(80, 80, 80)

  car.velocityX = speed;

  speed=random(55, 90)
  weight=random(400, 1500)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
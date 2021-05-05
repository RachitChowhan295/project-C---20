var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1400,400);
  
speed = random(50,90);
weight = random(400,1500)

car = createSprite(50,200,50,50);
wall = createSprite(1300,200,60,200);

wall.shapeColor = color(80,80,80);

car .velocityX = speed;



}

function draw() {
  background(0);  

  if (wall.x-car.x < (car.width + wall.width)/2){

    deformation = 0.5 * weight * speed * speed / 22500;

    car.velocityX = 0;

    if (deformation> 180){
     car.shapeColor = color(255,0,0);

    } else if (deformation >100 && deformation < 180){
      car.shapeColor = color(230,230,0);

    }else if(deformation < 100){
      car.shapeColor =color(0,255,0);

    }

    }

  drawSprites();
}
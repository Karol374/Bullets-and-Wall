var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet =createSprite(50, 200, 50, 50);
  bullet.velocityX=speed;
  bullet.shapeColor=color(255);


  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor=color(25,23,0);
  

}

function draw() {
  background(0);  

if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
    wall.shapeColor=color(255,0,0)
  }
  else
  {
    wall.shapeColor=color(0,255,0)
  }

}

  drawSprites();
}

function hasCollided(lbullet,lwall){

  bulletRigtEdge=lbullet.x+lbullet.width
  wallLeftEdge=lwall.x
  if(bulletRigtEdge>=wallLeftEdge){
    return true
  }
  else
  {
    return false
  }







}





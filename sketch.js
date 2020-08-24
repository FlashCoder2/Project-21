var bullet, speed, weight;
var wall, thickness;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(400, 200, 30, 7);
  bullet.shapeColor = "white";

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  wall = createSprite(1200, 200, thickness, height/2);
}

function draw() {
  background(255,255,255);  

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness0)
  }
  if(damage>10){
    wall.shapeColor = color(255,0,0)
  }
  if(damage<10){
    wall.shapeColor = color(0,255,0);
  }


  drawSprites();
}
function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bullet.rightEdge >= wallLeftEdge){
    return true
  }
  return false;
}

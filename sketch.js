function setup() {
  createCanvas(800,400);
  

  
  fixedRect = createSprite(200,200,50,80);
  fixedRect.shapeColor = "green"
  movingRect = createSprite(400,200,80.30);
  movingRect.shapeColor = "green";
}

function draw() {
  background(0,255,255);  
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  if(Math.round(movingRect.x - fixedRect.x) < Math.round(movingRect.width/2+fixedRect.width/2)
  && Math.round(fixedRect.x - movingRect.x) < Math.round(movingRect.width/2+fixedRect.width/2)
  && Math.round(movingRect.y - fixedRect.y) < Math.round(movingRect.height/2+fixedRect.height/2)
  && Math.round(fixedRect.y - movingRect.y) < Math.round(movingRect.height/2+fixedRect.height/2)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  drawSprites();
}
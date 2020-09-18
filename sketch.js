var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200, 200, 30, 80);
  movingRect.shapeColor = "red";
  movingRect.debug = true;
  fixedRect = createSprite(400,200,80,30);
  fixedRect.shapeColor = "red";
  fixedRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 &&  
    fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 && 
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
movingRect.shapeColor = "blue";
fixedRect.shapeColor = "blue";
   }
   else{
     movingRect.shapeColor = "green";
     fixedRect.shapeColor = "green";
   }
  drawSprites();
}
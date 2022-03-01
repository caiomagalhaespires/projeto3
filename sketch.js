var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var runner
var coin
var bomb 
var jake

function preload(){
  
  runner=loadAnimation("runner-1.png","runner-2.png")
  coin = loadAnimation("coin.png")
  bomb = loadAnimation("bomb.png")
  jake = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png")
  path = loadAnimation("path.png")
  

}

function setup(){
  
  createCanvas(400,400);
  path=createSprite(100,40)
  path.addAnimation("path",path)
  path.x = path.width/2
  path.velocityY= 4
  path.scale=1.2;

boy=createSprite(200,30);
boy.addAnimation("boy",boy)
boy.scale=0.08;
  

leftBoundary=createSprite(0,0,100,800);
leftBoundary.addAnimation("leftBoundary",leftBoundary)
leftBoundary.visible=false

}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moving on Xaxis with mouse
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  runner.collide(leftBounda)
    
  
  
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}

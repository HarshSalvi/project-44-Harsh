var object1,sky,boy,bj;
function preload(){
  sky=loadImage("images/sky.jpg")
  object1=loadImage("images/boy.png")

}



function setup() {
  createCanvas(displayWidth,displayHeight);
  
  bj=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
  bj.addImage("sky",sky);
  bj.velocityY=2;
  boy=createSprite(displayWidth/2,displayHeight-38, 50, 50);
  object1.addImage("boy",boy);
}

function draw() {
  background(0); 
  console.log(displayHeight)
  if(bj.y>=displayHeight-230){
bj.y=displayHeight/2

  }
  
  drawSprites();
}
var fixedRect,movingRect;
var go1,go2,go3,go4;

function setup(){
createCanvas(1200,800);

fixedRect = createSprite(200,200,50,90);
movingRect = createSprite(200,400,50,90);
fixedRect.shapeColor="green"
movingRect.shapeColor="green"
//go1=createSprite(100,100,50,50);
//go1.shapeColor="green"
//go2=createSprite(200,100,50,50);
//go2.shapeColor="green"
//go3=createSprite(300,100,50,50);
//go3.shapeColor="green"
//go4=createSprite(400,100,50,50);
//go4.shapeColor="green"
fixedRect.velocityY=5
movingRect.velocityY=-5

}

function draw(){
background(0,0,0)
///movingRect.x = World.mouseX;
//movingRect.y = World.mouseY;

//if(isTouching(movingRect,go2))
//{
  //movingRect.shapeColor="blue"
///  go2.shapeColor="blue"

//}
//else{
//  movingRect.shapeColor="green"
  //go2.shapeColor="green"
//}
bounceOff(movingRect,fixedRect)

drawSprites();

}
function bounceOff(object1,object2){
  if((object1.x-object2.x<object1.width/2+object2.width/2 )
  &&(object2.x - object1.x< object2.width/2 + object1.width/2)){
 object1.velocityX=object1.velocityX*(-1)
 object2.velocityX=object2.velocityX*(-1)
  }
  if((object1.y-object2.y<object2.height/2+object2.height/2)
  && (object2.y - object1.y <object2.height/2 + object1.height/2))
   {
    object1.velocityY=object1.velocityY*(-1)
    object2.velocityY=object2.velocityY*(-1)
}}


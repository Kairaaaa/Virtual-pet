var dog, Happydog;
var Database;
var foodS;
var Foodstock;

function preload()
{
new Image=(doglmg.png);
new Image=(dolmg1.png);
}

function setup() {
  createCanvas(500,500);
  
  feedstock=Database.ref('food');
  feedstock.on("value",readstock);
  
}


function draw() {  
  background(46,139,87)
 
if (keyWentDown(UP_ARROW)){
  writeStock(foods);
  dog.addImage(doglmg);
}
  drawSprites();
textSize = 30
fill(white)
stroke(black)

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){

  if (x<0){
    x=0;
  
  }

  else {
    x=x-1;
  }
  Database.ref('/').update({
    food:x

  })
}



var brick1,brick2,brick3,brick4;
var box;
var music;
var boundary,boundary1,boundary2,boundary3;
var text;
function preload(){
    music = loadSound("music.mp3");
}

function setup(){
     createCanvas(800,600);
    
    brick1= createSprite(0,580,360,30);
    brick1.shapeColor="orange";
    brick2= createSprite(295,580,200,30);
    brick2.shapeColor= "purple";
    brick3= createSprite(515,580,200,30);
    brick3.shapeColor="yellow";
    brick4= createSprite(740,580,220,30);
    brick4.shapeColor="blue";
    box= createSprite(random(20,750),100, 40,40);
    box.shapeColor="white";
    box.velocityY=4;
    box.velocityX=4;
    boundary= createSprite(800,200,5,900);
    boundary.shapeColor="black";
    boundary1= createSprite(400,600,900,5);
    boundary1.shapeColor="black";
    boundary2= createSprite(0,200,5,900);
    boundary2.shapeColor="black";
    boundary3= createSprite(100,0,1500,5);
    boundary3.shapeColor="black";
}

function draw() {
    background(0);

    box.bounceOff(boundary);
    box.bounceOff(boundary1);
    box.bounceOff(boundary2);
    box.bounceOff(boundary3);

if(box.isTouching(brick1) && box.bounceOff(brick1)){ 
    box.shapeColor="orange";
    music.play();
}
 
if(box.isTouching(brick2) && box.bounceOff(brick2)){
    box.shapeColor="purple";
    music.stop();
}

if(box.isTouching(brick3) && box.bounceOff(brick3)){
    box.shapeColor="yellow";
    music.play();
}

if(box.isTouching(brick4) && box.bounceOff(brick4)){
    box.shapeColor="blue";
    box.velocity=0;
    music.stop();
    
}
drawSprites();
}    
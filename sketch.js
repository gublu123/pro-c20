
var garden, gardenImg;
var jerry, jerryImg1, jerryImg2, jerryImg3, jerryImg4, jerrysGroup;
var tom, tomImg1, tomImg2, tomImg3, tomImg4, tomsGroup;

function preload() {
    //load the images here
    gardenImg = loadImage("garden.png");
    jerry = loadImage("jerryOne.png", "jerryTwo.png", "jerryThree.png", "jerryFour.png")
    tom = loadImage("tomOne.png", "tomTwo.png", "tomThree.png", "tomFour.png");
}

function setup(){
    createCanvas(1000,800);
    
    //create tom and jerry sprites here
    tom = createSprite("200, 200, 50, 50");
    tom.scale = 0.1;
    tom.addImage("sleeping", tom);

    jerry = createSprite("200, 200, 50, 50");
    jerry.scale = 0.3;
    jerry.addImage("standing", jerry);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
        //write code here to change animation
        cat.addAnimation("catLastImage", catImg3);
        cat.changeAnimation("catLastImage");
    }

    text(mouseX + ',' + mouseY, 10, 45);

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW)
{
    tom.velocityX = -5;
    tom.addAnimation("catRunning", catImg2);
    tom.changeAnimation("tomRunning");
}

}

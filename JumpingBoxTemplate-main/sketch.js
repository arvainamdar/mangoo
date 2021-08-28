var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1200,600);

    //create 4 different surfaces
 block1 = createSprite(100,580,250,30);
block1.shapeColor = rgb(0,0,255)

 block2 = createSprite(400,580,250,30);
block2.shapeColor = rgb(255,128,0)

 block3 = createSprite(700,580,250,30);
block3.shapeColor = rgb(153,0,76)

 block4 = createSprite(1000,580,250,30);
block4.shapeColor = rgb(102,155,102)

 ball = createSprite(random(20,750),100,40,40)
ball.shapecolor= rgb(255,255,255)
ball.velocityX = 4
ball.velocityY = 9


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edge = createEdgeSprites();
    ball.bounceOff(edge)

if(ball.isTouching(block1)&& ball.bounceOff(block1)) {
    ball.shapeColor = rgb(0,0,255)
    ball.velocityX =0
    ball.velocityY = 0
    music.stop();
}

if(ball.isTouching(block2)&& ball.bounceOff(block2)) {
    ball.shapeColor = rgb(255,128,0)
    music.play();
}

if(ball.isTouching(block3)&& ball.bounceOff(block3)) {
    ball.shapeColor = rgb(153,0,76)

    music.play();
}

if(ball.isTouching(block4)&& ball.bounceOff(block4)) {
    ball.shapeColor = rgb(102,155,102)
    music.play();
}



drawSprites();
    //add condition to check if box touching surface and make it box
}



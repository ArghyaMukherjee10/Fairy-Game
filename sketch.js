var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	starImg = loadImage("star.png")
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);
	engine = Engine.create();
	world = engine.world;
ground = new Ground(400,500,800,15)
	 fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = new Star(650,30);
	//star.addImage(starImg);
	//star.scale = 0.2;

	
	//starBody = Bodies.circle(650 , 30 , 5 , {restitution:1, isStatic:false});
	//World.add(world, starBody);
	//starBody.addImage(starImg);
	//star.y = starBody.postion.y
	//star.x = starBody.postion.x
	//var star_options ={
      //restitution: 1
	//}
	//star = Bodies.circle(200,100,20, star_options);
    

	Engine.run(engine);

}


function draw() {
  background(bgImg);
  /*
 if (star.body.position.y > 470){
	Matter.Body.setStatic(star,true);
 }
 */

 star.display();
  drawSprites();
}

function keyPressed() {
	//write code here
	if(keyCode === LEFT_ARROW){
		fairy.x -= 50;
	 }
	 if(keyCode === RIGHT_ARROW){
		fairy.x += 50;
	 }
	 if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	} 
	
}

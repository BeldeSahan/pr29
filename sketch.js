const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var Matter,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14
,block15,block16,ground,slingShot,polygon;



function setup(){
createCanvas(1500,1000);
engine = Engine.create();
world = engine.world;


ground=new Ground(100,100,100,100);
polygon=new Polygon(200,100,50,50);
slingShot=new SlingShot(polygon.body,{x:200, y:100});
}


function draw(){
background(255);
Engine.update(engine);
ground.display();
slingShot.display();
polygon.display();
drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


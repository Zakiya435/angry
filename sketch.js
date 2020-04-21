const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground;
var pig1;
var log1;
var bird1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,300,50,50);
    box2 = new Box(720,200,50,50);
    ground = new Ground(500,380,400,40);
    pig1 = new pig(810,350);
    log1 = new Log(710,260,300,PI/2);
    bird1 = new Bird(600,200,50,50);
}

function draw()
{
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    bird1.display();
   
}
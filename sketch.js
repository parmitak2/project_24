const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone;
var iron;
var rubber,rubber1,rubber2,rubber3,rubber4;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(600,300,60,60);
   iron = new Iron(400,300,30,100);
   rubber = new Rubber(500,00,60);
   rubber1 = new Rubber(200,400,15);
   rubber2 = new Rubber(140,400,15);
   rubber3 = new Rubber(170,400,15);
   rubber4 = new Rubber(135,400,15);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
    iron.display();
    rubber.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
}
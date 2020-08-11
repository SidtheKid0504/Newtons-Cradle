const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var roof, bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    roof = new Roof();
    bob1 = new Bob(800,450, 80);
    bob2 = new Bob(850, 450, 80);
    bob3 = new Bob(900, 450, 80);
    bob4 = new Bob(750, 450, 80);
    bob5 = new Bob(700, 450, 80);

    rope1 = new Rope(bob1.body, roof.body, -160, 0);
    rope2 = new Rope(bob2.body, roof.body, -16, 0);
    rope3 = new Rope(bob3.body, roof.body, -16, 0);
    rope4 = new Rope(bob4.body, roof.body, -16, 0);
    rope5 = new Rope(bob5.body, roof.body, -16, 0);

}

function draw(){
    background(225);
    Engine.update(engine);

    
    roof.display();
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    rope1.display();
    
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();

    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:74,y:-75});
    }
}

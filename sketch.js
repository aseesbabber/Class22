const Engine = Matter.Engine;
const World =  Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
  var canvas=createCanvas(800,400);
engine = Engine.create();
world = engine.world;

var Goption = {
isStatic: true

}

ground = Bodies.rectangle(400,375,800,50, Goption);

World.add(world,ground);
console.log(ground);
var option = {
  restitution:1.7
}

ball = Bodies.rectangle(400,70,15,15,option);
World.add(world,ball);

Engine.run(engine);


}
function draw()
{
  background(0);
  rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,50);
  rect(ball.position.x,ball.position.y,15,15);
}
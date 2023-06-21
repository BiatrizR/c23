
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var angle1=60; var angle2=60, angle3=60;
//é preciso 3 variavés de ângulos, para cada um girar a partiro do seu prórpio angulo


function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	var plane_options = {
		isStatic: true
	}
    var particle_options = {
        restitution: 0.4,
		frictionAir: 0.2,
		density: 1

	}
	var rotator_options={ isStatic:true };



    plane = Bodies.rectangle(600,height,1200,20,plane_options);
    World.add(world,plane);
    block1=Bodies.rectangle(100,400,150,20,plane_options);
    World.add(world,block1);
    particle1 = Bodies.circle(150,10,10,particle_options); 
	World.add(world,particle1);
	particle2 = Bodies.circle(350,10,10,particle_options); 
	World.add(world,particle2);
    particle3 = Bodies.circle(250,10,10,particle_options); 
	World.add(world,particle3);
	particle4 = Bodies.circle(200,10,10,particle_options); 
	World.add(world,particle4);

	 rotator1 = Bodies.rectangle(250,200,150,20,rotator_options); 
	 World.add(world,rotator1);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	Engine.update(engine)
	fill("red")
	rect(plane.position.x,plane.position.y,1200,20);
	rect(block1.position.x,block1.position.y,150,20);
	ellipse(particle1.position.x,particle1.position.y,50);
	ellipse(particle2.position.x,particle2.position.y,50);
	ellipse(particle3.position.x,particle3.position.y,50);
	ellipse(particle4.position.x,particle4.position.y,50);
 	Matter.Body.rotate(rotator1,angle1); 
	push();
	translate(rotator1.position.x,rotator1.position.y);
	rotate(angle1);
        rect(0,0,150,20);
        pop();
    	angle1 +=5;

	Matter.Body.rotate(rotator1,angle1); 
	push();
	translate(rotator1.position.x,rotator1.position.y);
	rotate(angle2);
	//x e y tem que ser 0 pois ele rodara em torno do próprio eixo, já modificado na função translate
	rect(0,0,150,20);
	pop();
	angle2-= 5

	Matter.Body.rotate(rotator1,angle1); 
	push();
	translate(rotator1.position.x,rotator1.position.y);
	//função rotate terá sua variável de agulo
	rotate(angle3); 
	rect(0,0,150,20);
	pop();
	angle3-=0.5;



	drawSprites();

}




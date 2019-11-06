//Original code by Ikkchung

var t=[];

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(37);
  fill(255);
   fill(255);
  noStroke();
  
  fill(200,46,87);
  ellipse(150,150,300,300);
  fill(200,340,60);
  arc(150,150,300,300,1.5*PI,((hour()%12)/6*PI-HALF_PI+0.0001));

  
  fill(0);
  ellipse(100,100,100,100);
  fill(30,200,250);
  arc(100,100,100,100,1.5*PI,(minute()/30*PI-HALF_PI+0.0001));
  
  fill(255);
  ellipse(200,200,100,100);
  fill(250,79,280);
  arc(200,200,100,100,1.5*PI,(second()/30*PI-HALF_PI+0.0001));

   
  fill(255);
  textAlign(RIGHT);
  text(hour()%12,184.6,380);
  text(":",190,380);
  textAlign(CENTER);
  text(minute(),200,380);
  text(":",210,380);
  textAlign(LEFT);
  text(second(),213.5,380);
}
function setup() {
  createCanvas(1000,1000);
  background (0);
}

function draw() {
  //random dots
  stroke (255);
  strokeWeight(1);
  fill (0,150,242);
  ellipse (random (1,1000),random (1,1000), random(6,21));
  fill (255,36,222);
  ellipse (random (1,1000),random (1,1000), random(5,20));
  fill (250)
  //HEAD
  stroke(255);
  strokeWeight(5)
  fill(0)
  ellipse (500,300,200,200);
  //eyeball
  fill(255)
  ellipse(459,290,30,30);
  //eyeball
  fill(255)
  ellipse(540,290,30,30);
  //inside eyeball
  fill(57,138,54);
  ellipse(540,290,15,15);
  //inside eyeball
  fill(57,138,54);
  ellipse(459,290,15,15);
  //pupil
  fill(0);
  ellipse(459,290,15,15);
  //pupil 
  fill(0);
  ellipse(540,290,15,15);
  //body
  fill(0,250,0);
  rect(400,400,220,240);
  noStroke()
  fill(255,0,0);
  ellipse(500,500,mouseX,50);
  fill(0,0,255)
  rect(400,646,70,150)
  fill(0,0,255)
  rect(548,646,70,150)
  //rect(400,646,300,150);

  
  
  
  
}
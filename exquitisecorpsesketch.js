function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(0,0,0);

//face1
push()
noStroke()
 fill(100,100,200);
 ellipse(200,100,120);
pop()
  
//face2
 push()
  noStroke();
  fill(100,100,200);
  rect(140,100,120,80);
 pop()
  
  //ear
 push()
  noStroke();
  fill(100,100,200);
  rect(120,100,40,30);
  rect(240,100,40,30);
 pop()
  
  //eyes
  eyes(170,100,30);
  eyes(230,100,30);
  
  function eyes(x,y,diameter){
    noStroke();
    fill(225,225,225);
    ellipse(x,y,diameter,diameter);
    
    fill(0,0,0);
    ellipse(x-5,y-3,diameter/3,diameter/3);
    
  }
  
  //mouse
   push()
  noStroke();
  fill(255, 116, 85);
  rect(180,120,30,10);
   pop()
  
  //blush
  push()
   noStroke();
   fill(255, 191, 184 );
   ellipse(160,123,20,10);
   ellipse(240,123,20,10);
  pop()
  
  //shoes
  push()
   noStroke();
   translate(170,550);
   rotate(15);
   fill(135, 94, 56);
   rect(0,0,60,20,0,10,10,0);
  pop()
  
  push()
   noStroke();
   translate(290,580);
   rotate(-15);
   fill(135, 94, 56);
   rect(0,0,60,20,10,0,0,10);
  pop()
  
  //legs
  push()
    noStroke();
    translate(100,480);
    rotate(200);
    fill(232, 161, 93);
    rect(0,0,80,30);
  pop()
  
  push()
    noStroke()
    translate(270,400);
    rotate(-200);
    fill(232, 161, 93);
    rect(0,0,80,30);
  pop()
  
  push()
    noStroke()
    translate(125,465);
    rotate(45);
    fill(232, 161, 93);
    rect(0,0,80,30);
  pop()
  
  push()
    noStroke()
    translate(240,525);
    rotate(-45);
    fill(232, 161, 93);
    rect(0,0,80,30);
  pop()
  
  //body
  push()
   noStroke()
   fill(225,225,225)
   ellipse(200,350,180,180)
  pop()
  
  push()
   noStroke();
   fill(225,225,225);
   translate(250,270);
   rotate(50);
   ellipse(0,0,60,180);
  pop()
  
  push()
   noStroke();
   fill(225,225,225);
   translate(150,270);
   rotate(-50);
   ellipse(0,0,60,180);
  pop()
  
  push()
   noStroke();
   fill(225,225,225);
   rect(170,180,60,180);
  pop()
  
  //arms
  push()
   noStroke()
   fill(225,225,225)
   translate(70,240)
   rotate(QUARTER_PI)
   ellipse(0,0,40,180)
  pop()
  
  push()
   noStroke()
   fill(225,225,225)
   translate(330,240)
   rotate(-QUARTER_PI)
   ellipse(0,0,40,180)
  pop()
  
    //collar
  collar(150,170,40)
  collar(170,170,40)
  collar(190,170,40)
  collar(210,170,40)
  collar(230,170,40)
  collar(250,170,40)
function collar(x,y,diameter){
  noStroke();
  fill(252, 190, 234);
  ellipse(x,y,diameter-15,diameter);
}

  
  
}

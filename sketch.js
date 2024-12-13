
function setup() {
 createCanvas(400,400);
}

function draw() {
 
  background(135, 206, 235);
  
  push()
  //sandground
  strokeWeight(0)
  fill(235,214,138)
  rect(0,205,500)
  pop()
  
  push()
  //sand
  strokeWeight(0)
  fill(231, 152, 45)
  rect(-50,300,4,4,1)
  rect(0,300,4,4,1)
  rect(50,300,4,4,1)
  rect(100,300,4,4,1)
  rect(150,300,4,4,1)
  rect(200,300,4,4,1)
  rect(250,300,4,4,1)
  rect(300,300,4,4,1)
  rect(350,300,4,4,1)
  rect(400,300,4,4,1)
  rect(450,300,4,4,1)
  pop()
  
   push()
  //sand2
  translate(-20,-30)
  strokeWeight(0)
  fill(231, 152, 45)
  rect(-50,300,4,4,1)
  rect(50,300,4,4,1)
  rect(100,300,4,4,1)
  rect(150,300,4,4,1)
  rect(200,300,4,4,1)
  rect(250,300,4,4,1)
  rect(300,300,4,4,1)
  rect(350,300,4,4,1)
  rect(400,300,4,4,1)
  rect(450,300,4,4,1)
  pop()
  
    push()
  //sand3
  translate(-40,-60)
  strokeWeight(0)
  fill(231, 152, 45)
  rect(-50,300,4,4,1)
  rect(50,300,4,4,1)
  rect(100,300,4,4,1)
  rect(150,300,4,4,1)
  rect(200,300,4,4,1)
  rect(250,300,4,4,1)
  rect(300,300,4,4,1)
  rect(350,300,4,4,1)
  rect(400,300,4,4,1)
  rect(450,300,4,4,1)
  pop()
  
  
  push()
  //sand3
  translate(20,30)
  strokeWeight(0)
  fill(231, 152, 45)
  rect(-50,300,4,4,1)
  rect(0,300,4,4,1)
  rect(50,300,4,4,1)
  rect(100,300,4,4,1)
  rect(150,300,4,4,1)
  rect(200,300,4,4,1)
  rect(250,300,4,4,1)
  rect(300,300,4,4,1)
  rect(350,300,4,4,1)
  rect(400,300,4,4,1)
  rect(450,300,4,4,1)
  pop()
  
  push()
  //sand4
  translate(40,60)
  strokeWeight(0)
  fill(231, 152, 45)
  rect(-50,300,4,4,1)
  rect(0,300,4,4,1)
  rect(50,300,4,4,1)
  rect(100,300,4,4,1)
  rect(150,300,4,4,1)
  rect(200,300,4,4,1)
  rect(250,300,4,4,1)
  rect(300,300,4,4,1)
  rect(350,300,4,4,1)
  rect(400,300,4,4,1)
  rect(450,300,4,4,1)
  pop()
  
  push()
  //sand5
  translate(60,90)
  strokeWeight(0)
  fill(231, 152, 45)
  rect(-50,300,4,4,1)
  rect(0,300,4,4,1)
  rect(50,300,4,4,1)
  rect(100,300,4,4,1)
  rect(150,300,4,4,1)
  rect(200,300,4,4,1)
  rect(250,300,4,4,1)
  rect(300,300,4,4,1)
  rect(350,300,4,4,1)
  rect(400,300,4,4,1)
  rect(450,300,4,4,1)
  pop()
  
  translate(-30,40)
  
  push();
   // Blade, Give each corner a unique radius
  fill(192,192,192);
  rect(130,145,150,30,50,0,0,0);
  pop();
  
   push();
   // Blade with highlight, Give each corner a unique radius 
  fill(230,230,230);
  strokeWeight(0);
  rect(132,150,150,10,50,0,0,0);
  pop();
  
  push()
  //brown handle
  fill(192,123,35)
  rect(250,145,60,30)
  
  push();
  //handle on the knife
  fill(150,150,150);
  rect(240,135,10,50,20,0,0,20);
  pop();
  
  push()
   //fish fin
  translate(170,150,150);
  fill(137,207,240);
  triangle(95, 0, 120, -10, 120, 0);
  pop()
  
  push();
  //fish body
  fill(137,207,240);
  translate(227,110,150);
  ellipse(50,50,50,30);
  pop();
  
  //fish eye
  fill(0,0,120); 
  translate(145,50,150)
  ellipse(120, 110, 8, 8); 
  
  //fish tail
  fill(137,207,240);
  translate(20,100,100);
  triangle(137, 10, 145, -5, 145, 25);
  
  push()
  //string
  fill(190,140,80)
  translate(75,-115,80);
  rotate(45);
  rect(145,5,15,3,2)
  pop()
  

  
  
}

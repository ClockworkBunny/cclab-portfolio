let timer=0
let dia=0
let startTime;
let elapsedTime = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  // Record the start time
  startTime = millis();
  
  //mapping for the color of the flower petal
  let mappedValue = map(mouseX, 0, width, 0, 255);
  
  //background color changing
      if (mouseX > 500)
{
  background(255, 247, 69);
}
  else if (mouseX > 150)
    {
  background (97, 210, 255);
    }
  else  
  {
  background (208, 238, 240);
  }

  //flower stem
  push()
   noStroke()
   fill(80, 255, 10);
   translate(-10,0)
   rect(300,300,20,300)
  pop()
  
  //flower petals
{ 
    push()
     fill(mappedValue,150,150);
     translate(300, 300);
     rotate(radians(90));
     noStroke();
     rotate(radians(45));
     ellipse(100, 0,80+dia,80+dia/4)
     rotate(radians(45));
     ellipse(100, 0, 80+dia, 80+dia/4)
     rotate(radians(45));
     ellipse(100, 0, 80+dia, 80+dia/4)
     rotate(radians(45));
     ellipse(100, 0, 80+dia, 80+dia/4)
     rotate(radians(45));
     ellipse(100, 0,80+dia, 80+dia/4)
     rotate(radians(45));
     ellipse(100, 0,80+dia, 80+dia/4)
     rotate(radians(45));
     ellipse(100, 0,80+dia, 80+dia/4)
     rotate(radians(45));
     ellipse(100, 0,80+dia,80+dia/4)
    pop()
   
  //flower center
  push()
   noStroke()
   fill(255, 242, 122);
   ellipse(300, 300, 160,160);
  pop()
  }
  
  //time pass for blooming of the flowers
  timer+=millis()
  if(timer>=10000){
    dia += 1;
    if (dia >= 300) {
      dia = 0;
    }
}
  
 // Calculate elapsed time
  elapsedTime += deltaTime / 1000;

  // Display the elapsed time
  fill(255,77,147);
  textSize(16);
  text("Blooming: " + floor(elapsedTime) + "s", 240, 300);
}
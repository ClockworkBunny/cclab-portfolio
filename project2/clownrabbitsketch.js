let x=20
function setup() {
  let container = document.getElementById('clownrabbitsketch-container');
  let canvas = createCanvas(400, 400);
  canvas.parent(container); // Attach the canvas to the container
  createCanvas(400, 400);
}
function draw() {
  background(91, 130, 226);


  //face
  noStroke();
  fill(255, 182, 193);
  ellipse(200,200,300,260);
  
  push()
  //ears
  noStroke();
  fill(255, 182, 193);
  ellipse(100,80,70,150);
  ellipse(300,80,70,150);
  pop()
  

  push()
  //ears
  noStroke();
  fill(255, 229, 229 );
  ellipse(100,80,30,100);
  ellipse(300,80,30,100);
  pop()
  
  push()
  //eyes
  noStroke();
  fill(0,0,0);
  translate(mouseX/10,mouseY/10)
  ellipse(120,200,mouseX/5,60);
  ellipse(280,200,50,mouseY/5);
  pop()
  
  push()
  //mouth
  fill(252, 109, 130);
  translate(200, 260);
  scale(mouseX / 1200, mouseY / 1200);
  triangle(0, 0, -100, 50, 100, 50);
  pop()
  
    //red nose
  push()
    noStroke();
    fill(225,0,0);
    ellipse(mouseX, mouseY, x);
  pop();
}  

function mousePressed(){
    x=random(20,100)
    console.log("x is this: " + x);

    //console.log("x is this: " + x);
   
}  


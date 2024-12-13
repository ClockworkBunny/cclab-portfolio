function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  noStroke()
//sqares
  let box = 30; 
  let rows = height / box; 
  let cols = width / box; 


  for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
      let remainder =(i + j) % 2;
      
// Checkered pattern
      if (remainder === 0) {
        fill(255, 140, 0); 
      } else {
        fill(203, 197, 188);
      }
    
      rect(j * box, i * box, box, box,5); 
    }
  }
// balls
  push()
  strokeWeight(3)
  let ball = 3; 
  let rows1 = height / ball; 
  let cols2 = width / ball; 

  for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
      let remainder =(i+j) % 3;
      
// Checkered balls
      if (remainder === 0) {
        fill(0); 
      } 
    if (remainder === 1){
        fill(255);
      }
      ellipse(j * box, i * box,6); 
    }
  }
  pop()
}
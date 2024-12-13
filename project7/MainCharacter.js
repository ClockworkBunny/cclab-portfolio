// Main character class
class MainCharacter {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.speed = 2;
    this.sizeX = 40;
    this.sizeY = 60;
  }

  move(amtX, amtY) {
    this.x += amtX * this.speed;
    this.y += amtY * this.speed;
  }
  
//Main character Moving
  update() {
    if (keyIsDown(LEFT_ARROW)) this.move(-1, 0);
    if (keyIsDown(RIGHT_ARROW)) this.move(1, 0);
    if (keyIsDown(UP_ARROW)) this.move(0, -1);
    if (keyIsDown(DOWN_ARROW)) this.move(0, 1);

//Check if main character reaches the edge of the canvas , if yes, move to the opposite edge
    if (this.x < 0) {
      this.x = 0;
    }
    else if (this.x > width) {
      this.x = width;
    }
    else if (this.y < 0) {
      this.y = 0;
    }
    else if (this.y > height) {
      this.y = height;
    }
  }

  display() {
    push();
      imageMode(CENTER);
      image(mainCharacterImage,this.x, this.y, this.sizeX, this.sizeY);
    pop();
  }
}
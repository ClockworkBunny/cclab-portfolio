// InteractiveObject class
class InteractiveObject {
  constructor(x, y, width, height, objectImage, message) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.objectImage = objectImage;
    this.message = message;
    this.showText = false;
    this.wasInteractedWith = false;
  }
  
  checkCollision(playerX, playerY) {
    if (playerX > this.x && playerX < this.x + this.width &&
        playerY > this.y && playerY < this.y + this.height) {
      this.showText = true;
      this.wasInteractedWith = true;
    } else {
      this.showText = false;
    }
  }
  
display() {
    push();
    //imageMode(CENTER);
    image(this.objectImage, this.x, this.y, this.width, this.height);

    if (this.showText) {
      textSize(12);
      textAlign(CENTER, CENTER); // Center-align text both horizontally and vertically

      // Background rectangle at the bottom of the canvas
      let padding = 20; // Padding for the background
      let textBoxHeight = 60; // Height of the background box
      let textBoxWidth = width; // Full width of the canvas

      // Draw background rectangle
      fill(119, 159, 185); // Background color
      noStroke();
      rectMode(CORNER);
      rect(0, height - textBoxHeight - padding, textBoxWidth, textBoxHeight);
      fill(101, 130, 149)
        rect(3,323,394,53);

      // Draw the text centered in the middle of the rectangle
      fill(255); // Text color
      translate(-190,0)
      text(this.message, width / 2, height - textBoxHeight / 2 - padding,380);
    }

    pop();
}
}
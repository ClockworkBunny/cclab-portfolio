class Door {
  constructor(x, y, targetScene) {
    this.x = x;
    this.y = y;
    
    this.targetScene = targetScene;
    
    if (this.targetScene === undefined) {
      console.log("target scene was undefined");
    }
  }
  
enter() {
    console.log("entered door");

    mainCharacter.x = width - mainCharacter.x;
    mainCharacter.y = height - mainCharacter.y;

    mainCharacter.x += (width / 2 - mainCharacter.x) * 0.25;
    mainCharacter.y += (height / 2 - mainCharacter.y) * 0.25;

  console.log("calling switch scene in door.js");
    switchScene(this.targetScene);
  }
  
  checkPlayerCollision() {
    if (dist(mainCharacter.x, mainCharacter.y, this.x, this.y) < 10) {
      this.enter();
    }
  }
  
  display() {
    push();
      imageMode(CENTER);
      image(doorImage, this.x, this.y, 40, 40)
    pop();
  }
  
}
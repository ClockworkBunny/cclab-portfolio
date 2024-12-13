// Modify Level class to support multiple interactive objects
class Level {
  constructor(playerStartPosX, playerStartPosY,
               objectivePosX, objectivePosY,
               bgImage, message,
               doorToThePreviousScene, doorToTheNextScene)
  {
    this.spawnX = playerStartPosX;
    this.spawnY = playerStartPosY;
    this.objectiveX = objectivePosX;
    this.objectiveY = objectivePosY;
    this.objWidth = 40;
    this.objHeight = 30;
    this.bgImage = bgImage;
    this.message = message;
    this.showText = false;
    this.objectCollected = false;
    this.doorToThePreviousScene = doorToThePreviousScene;
    this.doorToTheNextScene = doorToTheNextScene;
// Array to hold interactive objects
    this.interactiveObjects = []; 
  }

  addInteractiveObject(interactiveObject) {
    this.interactiveObjects.push(interactiveObject);
  }
  
//if the player has interacted with all the objects in that scene,
  everyObjectInteracted() {
    
    for (let i = 0; i < this.interactiveObjects.length; i++) {
      if (!this.interactiveObjects[i].wasInteractedWith) return false;
    }
    return true;
  }
  
//Check collision
  checkPlayerCollision() {
    if (mainCharacter.x > this.objectiveX &&
        mainCharacter.x < this.objectiveX + this.objWidth &&
        mainCharacter.y > this.objectiveY &&
        mainCharacter.y < this.objectiveY + this.objHeight) {
      this.showText = true;
      this.objectCollected = true;
    } else {
      this.showText = false;
    }
    
// Check collision with each interactive object
    for (let obj of this.interactiveObjects) {
      obj.checkCollision(mainCharacter.x, mainCharacter.y);
    }
  }

  update() {
    this.checkPlayerCollision();
    mainCharacter.update();
    
    this.doorToThePreviousScene.checkPlayerCollision();
    
    if (this.everyObjectInteracted()) {
      this.doorToTheNextScene.checkPlayerCollision();
    }
  }

  display() {
    background(this.bgImage);
    //fill();
    //rect(this.objectiveX, this.objectiveY, this.objWidth, this.objHeight);
    
    
    this.doorToTheNextScene.display();
    this.doorToThePreviousScene.display();

    // Display each interactive object
    for (let obj of this.interactiveObjects) {
      obj.display();
    }
    
    mainCharacter.display();

// Show the level message
    if (this.showText) {
      fill(255);
      textSize(20);
      textAlign(CENTER);
      text(this.message, width / 2, height / 2);
    }
  }
  enterScene(){
    // optionally empty
}
  exitScene() {
    this.showText = false;
  }
}

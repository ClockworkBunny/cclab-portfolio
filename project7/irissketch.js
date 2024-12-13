let music;

//Images 
let bedRoomImage;
let mainCharacterImage;
let doorImage;
let bedImage;
let deskImage;
let diaryImage;
let bunnyDollImage;

let livingRoomImage;
let carpetImage;
let diningtableImage;
let hotteaImage;
let irisphotoImage;
let tvImage;
let vaseImage;

let gardenImgs;
let irisImgs;
let rabbitImgs;

let balconyImgs;
let fireImgs;
let flowerImgs;
let flower2Imgs;
let Iris2Imges;

let bedroom2Imgs;

let mainCharacter;
let currentScene;

let endImage;

let mainMenuScene;

//Scene building with objects
let bedroomScene;
let desk;
let bed;
let diary;

//livingRoom objects
let livingRoomScene;
let carpet;
let diningtable;
let hottea;
let irisphoto;
let tv;
let vase;

//Garden objects
let gardenScene;
let iris;
let rabbit;

//livingroom2 objects
let livingRoom2Scene;

//bedroom2 objects
let bedroom2Scene;



//balcony objects
let balconyScene;
let fire;
let flower;
let flower2;
let iris2;


let endScene;

let state = "cover"; // Initial state is the cover screen
let coverImage; // Variable to hold the cover image

function preload(){
// Load the music file
  music = loadSound('music.mp3'); 

   // Load the cover image
  coverImage = loadImage("irisCover.png"); // Replace with your image path
  
  mainCharacterImage = loadImage("mainCharacter.png");
  bedRoomImage = loadImage("imgs/bedRoom.png");
  doorImage = loadImage("imgs/door.png");
  diaryImage = loadImage("imgs/diary.png");
  bedImage = loadImage("imgs/bed.png");
  deskImage = loadImage("imgs/desk.png");
  bunnyDollImage = loadImage("imgs/bunnyDoll.png");
  livingRoomImage = loadImage("lmImgs/livingRoom.png");
  carpetImage = loadImage("lmImgs/carpet.png");
  diningtableImage =loadImage("lmImgs/diningtable.png");
  hotteaImage = loadImage("lmImgs/hottea.png");
  irisphotoImage = loadImage("lmImgs/irisphoto.png");
  tvImage = loadImage("lmImgs/tv.png");
  vaseImage = loadImage("lmImgs/vase.png");
  irisImage = loadImage("gdImgs/iris.png");
  gardenImage = loadImage("gdImgs/garden.png");
  rabbitImage = loadImage("gdImgs/rabbit.png");
  balconyImage = loadImage("bcnImgs/balcony.png")
  fireImage = loadImage("bcnImgs/fire.png")
  flowerImage = loadImage("bcnImgs/flower.png")
  flower2Image = loadImage("bcnImgs/flower2.png")
  iris2Image = loadImage("bcnImgs/iris2.png")
  bedroom2Image = loadImage("bedroom2.png")
  endImage = loadImage("end.png")
}

function setup() {
  createCanvas(400, 400);
  music.loop();
  music.setVolume(0.8);
  mainCharacter = new MainCharacter(20, 20);

//Create bedroom Scene
  createBedroomScene();
  
function createBedroomScene() {
  bedroomScene =
    new Level(
      5,5,390,20, bedRoomImage, "Iris' Bedroom",
      null, null
    );

//Create interactive objects
   desk =
     new InteractiveObject(
     40, 70, 120, 80, deskImage,
    "desk and chair"
   );
   diary =
     new InteractiveObject(
     150, 200, 40, 30, diaryImage,
     "Iris's Diary....'I was so excited that I got into my dream school! I should take a walk outside.'     The date was Feb 2nd, right before that car accident."
   );
 
   bed = 
     new InteractiveObject(
     210, 130, 120, 80,bedImage,
     "Iris's bed. As tidy as no one has lived here."
   );
   bunnyDoll = 
     new InteractiveObject(
     300, 250, 40, 30,bunnyDollImage,
     "Doll: Ooooo another friend! Hi,welcome! Call me Icey. And dont ask why I am lying on the ground. I know u miss Iris, that's why you're here,right?"
   );
  
// Add interactive objects to bedroomScene
  bedroomScene.addInteractiveObject(desk);
  bedroomScene.addInteractiveObject(bed);
  bedroomScene.addInteractiveObject(diary);
  bedroomScene.addInteractiveObject(bunnyDoll);
}
  
//Create livingRoom scene
   createLivingRoomScene();

function createLivingRoomScene() {
  livingRoomScene =
    new Level(
      20, 350, 300, 50, livingRoomImage,"Living room",
      null, null
    );
//Create interactive objects
  irisphoto = 
     new InteractiveObject(
     320, 320, 80, 40, irisphotoImage,
     "Iris's photo....I miss her...."
   );
  vase =
     new InteractiveObject(
     60, 250, 40, 80, vaseImage,
     "Fresh flowers. Why is it not withering?"
   );
  carpet = 
     new InteractiveObject(
     70, 130, 250, 60, carpetImage,
     "A nice carpet."
   );

   tv =
     new InteractiveObject(
     170, 40, 80, 80, tvImage,
     "A tv. Seems no longer working."
   );

   diningtable = 
     new InteractiveObject(
     150, 200, 200, 90, diningtableImage,
     "Dining table."
   );
  hottea = 
     new InteractiveObject(
     280, 200, 40, 40, hotteaImage,
     "A cup of hot tea. Isn't the house empty?"
   );
  
// Add interactive objects to livingRoomScene
  livingRoomScene.addInteractiveObject(carpet);
  livingRoomScene.addInteractiveObject(irisphoto);
  livingRoomScene.addInteractiveObject(tv);
  livingRoomScene.addInteractiveObject(vase);
  livingRoomScene.addInteractiveObject(diningtable);
  livingRoomScene.addInteractiveObject(hottea);
}

//Create gardenscene
  creategardenScene();
  function creategardenScene(){
  gardenScene =
    new Level(
      200, 20, 100, 300, gardenImage, "garden",
      null, null
    );
    
//Create interactive objects
   iris =
     new InteractiveObject(
      210, 50, 50, 60, irisImage,
     "Iris：Long time no see my good friend! So nice to see you again. Why don't you wait for me at the balcony in my room? Let's spend our time there, just like the good old days."
   );
 
   rabbit = 
     new InteractiveObject(
     120, 160, 40, 50, rabbitImage,
     "A rabbit, smilling at me."
   );
  
// Add interactive objects to bedroomScene
  gardenScene.addInteractiveObject(iris);
  gardenScene.addInteractiveObject(rabbit);

  }

//Create livingRoom scene
   createLivingRoom2Scene();

function createLivingRoom2Scene() {
  livingRoom2Scene =
    new Level(
      20, 350, 300, 50, livingRoomImage,"Living room",
      null, null
    );
//Create interactive objects
  vase =
     new InteractiveObject(
     60, 250, 40, 80, vaseImage,
     "Fresh flowers. I should go to balcony to meet Iris."
   );
  carpet = 
     new InteractiveObject(
     70, 130, 250, 60, carpetImage,
     "A nice carpet. I should go to balcony to meet Iris."
   );

   tv =
     new InteractiveObject(
     170, 40, 80, 80, tvImage,
     "A tv. I should go to balcony to meet Iris. I order to do this, I should go back to her room."
   );

   diningtable = 
     new InteractiveObject(
     150, 200, 200, 90, diningtableImage,
     "Dining table. I should go to balcony to meet Iris."
   );
  hottea = 
     new InteractiveObject(
     280, 200, 40, 40, hotteaImage,
     "The tea is still hot. I should go to balcony to meet Iris."
   );
  
// Add interactive objects to livingRoomScene
  livingRoom2Scene.addInteractiveObject(carpet);
 // livingRoom2Scene.addInteractiveObject(irisphoto);
  livingRoom2Scene.addInteractiveObject(tv);
  livingRoom2Scene.addInteractiveObject(vase);
  livingRoom2Scene.addInteractiveObject(diningtable);
  livingRoom2Scene.addInteractiveObject(hottea);
}

//Create bedroom2Scene
  createBedroom2Scene();
  
function createBedroom2Scene() {
  bedroom2Scene =
    new Level(
      5,5,390,20, bedroom2Image, "Iris' Bedroom",
      null, null
    );

//Create interactive objects
   desk =
     new InteractiveObject(
     40, 70, 120, 80, deskImage,
    "Am I*&^$(@$sup$*posed to be here?"
   );
   diary =
     new InteractiveObject(
     150, 200, 40, 30, diaryImage,
     "I mI$@$iss !ris."
   );
 
   bed = 
     new InteractiveObject(
     210, 130, 120, 80,bedImage,
     "Is it t&*$( @rea! her I& $aw?"
   );
  
   bunnyDoll = 
     new InteractiveObject(
     300, 250, 40, 30,bunnyDollImage,
     "Doll: Go to the ba!$&*@cony!Go to &$*~@^the balc0ny! Gooooo000oo&$*@#&%!@#)$!!!!"
   );
  
// Add interactive objects to bedroomScene
  bedroom2Scene.addInteractiveObject(desk);
  bedroom2Scene.addInteractiveObject(bed);
  bedroom2Scene.addInteractiveObject(diary);
  bedroom2Scene.addInteractiveObject(bunnyDoll);
}
  
//Create balconyscene
  createbalconyScene();
  function createbalconyScene(){
  balconyScene =
    new Level(
      200, 20, 100, 300, balconyImage, "0",
      null, null
    );
    
//Create interactive objects
   iris2 =
     new InteractiveObject(
      220, 260, 50, 60, iris2Image,
     "Iris: I lied to you.. I am here only because of you, your imagination created this place. Now everything is collapsing.. maybe it is time for you to leave... "
   );
    
    fire = 
     new InteractiveObject(
     300, 50, 80, 110, fireImage,
     "The tree is on fire. Everything is on fire."
   );
    
   flower = 
     new InteractiveObject(
     80, 260, 60, 60, flowerImage,
     "Withered flowers. How I wish to stay with Iris for a little bit longer..."
   );
    
   flower2 = 
     new InteractiveObject(
     260, 260, 80, 60, flower2Image,
     "Withered flowers. I don't want to go....but I can bearly breath."
   );
  
// Add interactive objects to bedroomScene
  balconyScene.addInteractiveObject(iris2);
  balconyScene.addInteractiveObject(fire);
  balconyScene.addInteractiveObject(flower);
  balconyScene.addInteractiveObject(flower2);
  
}

//Create endscene
  createendScene();
  function createendScene(){
  endScene =
    new Level(
      200, 20, 100, 300, endImage, "end",
      null, null
    );
    
//Create interactive objects
   rabbit = 
     new InteractiveObject(
     120, 160, 40, 50, rabbitImage,
     "A rabbit, smilling at me."
   );
  
// Add interactive objects to bedroomScene
  endScene.addInteractiveObject(rabbit);

  }


  // Define doors after creating scenes
  bedroomScene.doorToThePreviousScene =
    new Door(width/2, -400, gardenScene);
  bedroomScene.doorToTheNextScene =
    new Door(width, height/2, livingRoomScene);

  livingRoomScene.doorToThePreviousScene =
    new Door(0, height/2, bedroomScene);
  livingRoomScene.doorToTheNextScene =
    new Door(width/2, 0, gardenScene);

  gardenScene.doorToThePreviousScene =
    new Door(width/2, -400, bedroomScene);
  gardenScene.doorToTheNextScene =
    new Door(width/2, height, livingRoom2Scene);

  livingRoom2Scene.doorToThePreviousScene =
    new Door(width/2, 0, gardenScene);
  livingRoom2Scene.doorToTheNextScene =
    new Door(0, height/2, bedroom2Scene);

  bedroom2Scene.doorToThePreviousScene =
    new Door(width, height/2, livingRoom2Scene);
  bedroom2Scene.doorToTheNextScene =
    new Door(width/2, 0, balconyScene);

  balconyScene.doorToThePreviousScene =
    new Door(width/2, height, bedroom2Scene);
  balconyScene.doorToTheNextScene =
    new Door(width/2, 0, endScene);

  // Start mainCharacter at the first level
  currentScene = bedroomScene;
  currentScene.enterScene();
}

function mousePressed() {
      console.log("Mouse pressed");
  if (state === "cover") {
    // Change the state to "game" to switch scenes
    state = "game";
     console.log("Switched to game state");
  }
    
}

function draw() {

  if (state === "cover") {
    displayCover();
  } else if (state === "game") {
    displayGame();
  }
}
  
  function displayCover() {
  background(0);
     // Display the cover image
    push()
  imageMode(CENTER);
  image(coverImage, width / 2, height / 2, width, height); // Adjust size as needed
    pop()

  // Display some instructions or title text
  fill(59, 71, 198);
  textSize(14);
  textFont('Courier New');
  textAlign(CENTER, CENTER);
  text("Click Anywhere to Start",200,385);
}

function displayGame() {
  
  currentScene.update();
  currentScene.display();

}
  
function switchScene(targetScene) {
  currentScene.exitScene();
  currentScene = targetScene;
  currentScene.enterScene();
}
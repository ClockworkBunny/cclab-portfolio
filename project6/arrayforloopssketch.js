let Money;
function preload(){

Money = loadImage('bgimage.png')
}

const myData = [4.4, 36];
const myData2 = [20.5]
const myData3 = [12,3,7,25]
const myData4 = [23.48,7.27,79,10.8,7.07]
const myData5 = [14.37,8.8]
const myData6 = [28,8.7,31.6]
const myData7 = [21.3,8.7,8.7,15.75]

// spacing between coins
const coinSpacing =70;

// x position of first coin
const StartX = 100;

// generic y position for coins
const coinY = 150;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  image(Money,0,0)
// Display the elapsed time
  fill(255, 255, 116);
  textSize(32);
  text("Money spent over the last week",100, 100);

  
//Money spent on 1st day
  push()
    for (let i = 0; i < myData.length; i++) {
    fill(3*myData[i],225,225);
    ellipse(StartX + i * coinSpacing, coinY, myData[i]);
}
  pop()
  
//Money spent on 2nd day 
  push()
    translate(70,60);
    for (let i = 0; i < myData2.length; i++) {
    fill(225,3*myData[i],225);
    ellipse(StartX + i * coinSpacing, coinY, myData2[i]);
}
  pop()
  
//Money spent on 3rd day 
  push()
    translate(100,100);
    for (let i = 0; i < myData3.length; i++) {
    fill(225,225,3*myData3[i]);
    ellipse(StartX + i * coinSpacing, coinY, myData3[i]);
}
  pop()
  
//Money spent on 4th day 
  push()
    translate(100,150);
    for (let i = 0; i < myData4.length; i++) {
    fill(3*myData4[i],100,225);
    ellipse(StartX + i * coinSpacing, coinY, myData4[i]);
}
  pop()
  
//Money spent on 5th day 
  push()
    translate(100,200);
    for (let i = 0; i < myData5.length; i++) {
    fill(225,5*myData5[i],100);
    ellipse(StartX + i * coinSpacing, coinY, myData5[i]);
}
  pop()
  
//Money spent on 6th day 
  push()
    translate(200,250);
    for (let i = 0; i < myData6.length; i++) {
    fill(225,5*myData6[i],100);
    ellipse(StartX + i * coinSpacing, coinY, myData6[i]);
}
  pop()
  
//Money spent on 7th day 
  push()
    translate(50,300);
    for (let i = 0; i < myData7.length; i++) {
    fill(225,5*myData7[i],100);
    ellipse(StartX + i * coinSpacing, coinY, myData7[i]);
}
  pop()
}
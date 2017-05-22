var sunX;
var sunY;

function setup() {
 
}
function draw() {
  createCanvas(windowWidth, windowHeight);
  if(mouseX>mouseY){
    sunY=height/2;
    sunX=(width/2) - Math.sqrt(Math.pow((250 + (mouseX/2))/2, 2)-Math.pow((250 + (mouseY/2))/2, 2));
  }
  else {
    sunX=width/2;
    sunY= (height/2) -Math.sqrt(Math.pow((250 + (mouseY/2))/2, 2)-Math.pow((250 + (mouseX/2))/2, 2));
  }
  background(0);
  fill(253, 184, 19);
  ellipse(sunX, sunY, 25, 25);
  noFill();
  stroke(70, 137, 102);
  strokeWeight(1);
  ellipse((width/2), (height/2), 250 + (mouseX/2) , 250 + (mouseY/2));
}
//refer to bit.ly/2qWNMgW for terminology about ellipses 

var sunX;
var sunY;
var velocity;
var theta;
var distance;

function setup() {
  //starting theta and velocity
  theta = 0;
  velocity=.005; 
}
function draw() {
  //sets width and heigth to size of the window.
  createCanvas(windowWidth, windowHeight);
  
  //sets the sun at the ellipse's focus
  
  //if the width of the ellipse is greater than the height
  if(mouseX>mouseY){
    
    //the y position of the sun is set at the middle of the screen
    sunY=height/2;
    
    //the x position of the sun is set at the focus of the ellipse by usind the equation c^2 = a^2-b^2
    sunX=(width/2) - Math.sqrt(Math.pow((250 + (mouseX/2))/2, 2)-Math.pow((250 + (mouseY/2))/2, 2));
  }
  
  //heigh of the ellipse is greater
  else {
    
    //the x position of the sun is set to the middle of screen
    sunX=width/2;
    
    //the y position of the sun is set at the focus of the ellipse using the equation c^2 = b^2-a^2 
    sunY= (height/2) -Math.sqrt(Math.pow((250 + (mouseY/2))/2, 2)-Math.pow((250 + (mouseX/2))/2, 2));
  }
  

  
  //draws sun at sunX and sunY
  background(0);
  fill(253, 184, 19);
  ellipse(sunX, sunY, 25, 25);
  
  //draws orbit based on mouseX and mouseY at the center of the screen
  noFill();
  stroke(70, 137, 102);
  strokeWeight(1);
  ellipse((width/2), (height/2), 250 + (mouseX/2) , 250 + (mouseY/2));
  
  //draws the planet and controls the planets motion
  
  //sets the x position of the planet multiplying a, the width of the ellipse /2, and the sin of two theta
  var x = (((mouseX/2)+250)/2)*sin(2*theta);
  
  //sets the y position of the planet multiplying b, the height of the ellipse /2, and the cos of two theta
  var y =  (((mouseY/2)+250)/2)*cos(2*theta);
  
  //centers the planet at the center of the screen 
  translate(width/2, height/2);
  
  //draws planet at x and y
  fill(70, 137, 102);
  ellipse(x, y, 10, 10);
  
  //working on making the planet go faster near the sun
  
  //calculates distance based on the distance formula
  distance = Math.sqrt((Math.pow((sunX-x), 2))+Math.pow((sunY-y), 2));
  
  //trying to change velocity of the planet, only slows the planet down for now
  //velocity-=(distance/1000000000);
  
  //incrementing theta by velocity
  theta+=velocity;
  
}
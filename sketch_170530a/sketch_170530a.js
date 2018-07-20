//refer to bit.ly/2qWNMgW for terminology about ellipses 

var sunX;
var sunY;
var velocity;
var theta;
var distance;
var r;

function setup() {
  //starting theta and velocity
  theta = 0;
  velocity = 0; 
}
function draw() {
   //sets width and heigth to size of the window.
  createCanvas(windowWidth, windowHeight);
  
  var a = (250 + (mouseX/2))/2;
  var b = (250 + (mouseY/2))/2;
  
  //sets the sun at the ellipse's focus
  
  //if the width of the ellipse is greater than the height
  if(mouseX>mouseY){
    
    //the y position of the sun is set at the middle of the screen
    sunY=height/2;
    
    //the x position of the sun is set at the focus of the ellipse by usind the equation c^2 = a^2-b^2
    sunX=(width/2) + Math.sqrt(Math.pow(a, 2)-Math.pow(b, 2));
    
  }
  
  //heigh of the ellipse is greater
  else {
    
    //the x position of the sun is set to the middle of screen
    sunX=width/2;
    
    //the y position of the sun is set at the focus of the ellipse using the equation c^2 = b^2-a^2 
    sunY= (height/2) + Math.sqrt(Math.pow(b, 2)-Math.pow(a, 2));
  }
  

  
  //draws sun at sunX and sunY
  background(0);
  fill(253, 184, 19);
  ellipse(sunX, sunY, 25, 25);
  
  //draws orbit based on mouseX and mouseY at the center of the screen
  noFill();
  stroke(70, 137, 102);
  strokeWeight(1);
  ellipse(width/2, height/2, 2*a, 2*b);
  
  //draws the planet and controls the planets motion
  
  //sets the x position of the planet multiplying a, the width of the ellipse /2, and the sin of 15 theta
  var x = a * sin(3000*theta);
  
  //sets the y position of the planet multiplying b, the height of the ellipse /2, and the cos of 15 theta
  var y =  b * cos(3000*theta);
  
  //centers the planet's orbit at the center of the screen 
  translate(width/2, height/2);
  
  //draws planet at x and y
  fill(70, 137, 102);
  ellipse(x, y, 10, 10);
  
  //making the planet go faster near the sun
  
  //calculates distance based on the distance formula
  distance = Math.sqrt((Math.pow((sunX-x), 2))+Math.pow((sunY-y), 2));
  
  //calculates the raidus of curvature of the orbit at the planets position
  r = (Math.pow(((a*a*sin(theta)*sin(theta))+(b*b*cos(theta)*cos(theta))), 1.5)/(a*b));
  
  //velocity of the planet is dependent on the square root of the radius of curvature divided by distance 
  velocity=(Math.sqrt(r))/(50000*distance);
   
  //incrementing theta by velocity
  theta+=velocity;
  
  //displays the eccentricity of the planet's orbit
  
  noStroke();
  fill(142, 40, 0);
  textSize(20);
  if(a>b)
  text("Eccentricity: " + (Math.sqrt(Math.pow(a, 2)-Math.pow(b, 2))/a), 10-(width/2), 20-(height/2));
  else text("Eccentricity: " + (Math.sqrt(Math.pow(b, 2)-Math.pow(a, 2))/b), 10-(width/2), 20-(height/2));
  text("\nTry the eccentricities of the following objects!\nTriton: 0\nMoon: 0.0549\nMercury: 0.2056\nEris: 0.4407\nHalley's Comet: 0.9671", 10-(width/2), 20-(height/2));
}

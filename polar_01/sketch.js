var r;

// Angle and angular velocity, accleration
var theta;
var theta_vel;
var theta_acc;
var diam = 32;

function setup() {
    createCanvas(windowWidth, windowHeight);
  background(0);
  
  // Initialize all valuesa
  r = .1;
  r_acc = .1;
  theta = 0;
  theta_vel = 0;
  theta_acc = 0.0001;
}

function draw() {
  
  //background(0, 0, 0, .10);
  
  // Translate the origin point to the center of the screen
  //translate(width/2, height/2);
  
  // Convert polar to cartesian
  var x = r * cos(theta);
  var y = r * sin(theta);
  
  // Draw the ellipse at the cartesian coordinate
  ellipseMode(CENTER);
  noStroke();
  fill('rgba(100%,0%,100%,0.05)');
  ellipse(x, y, diam, diam);
    diam *= .9998;
  
  // Apply acceleration and velocity to angle 
  // (r remains static in this example)
  theta_vel += theta_acc;
  theta += theta_vel;
  if (r < (height * 0.45)){
  	r += r_acc;
  }else{
  	r = height * 0.45;
  }
}
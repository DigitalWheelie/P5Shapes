var biggestDim, ratioX, ratioY, scaledDim, daOpacity;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    
    if(width > height){
        biggestDim = height;
    }else{
        biggestDim = width;
    }
    
    fill(204, 101, 192, 0);
    stroke(127, 63, 120);

}

function draw() {
    ratioX = mouseX/width;
    scaledDim = ratioX * biggestDim;
    ratioY = mouseY/height;
    fill(204, 101, 192, daOpacity);
    translate(width/2, height/2);
    rotate(ratioY * 360);
    rect(-scaledDim/2, -scaledDim/2, scaledDim, scaledDim);
    daOpacity = 0;
}

function mouseMoved() {
    daOpacity = ratioX * ratioY * 5;
    // prevent default
    return false;
}
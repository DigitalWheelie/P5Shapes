var biggestDim, ratioX, ratioY, scaledDim, daOpacity;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    
    if(width > height){
        biggestDim = height;
    }else{
        biggestDim = width;
    }
    
    fill(204, 101, 192, 1);
    stroke(127, 63, 120);
    
}

function draw() {
    ratioX = mouseX/width;
    scaledDim = ratioX * biggestDim;
    ratioY = mouseY/height;
    translate(width/2, height/2);
    //rotate(ratioY * 360);
    triangle(-scaledDim/2, scaledDim/2, scaledDim/2, scaledDim/2, 0, -scaledDim/2);
}
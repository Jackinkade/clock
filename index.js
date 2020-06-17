function setup() {
    createCanvas(400, 400);
}
function draw(){
    background(0);

    let hr = hour();
    let mn = minute();
    let sc = second();

    stroke(255);
    strokeWeight(4);
    noFill();
    ellopse(200, 200, 300, 300);
    // noStroke();
    // FileList(255);
    // text(hr + ":" + mn + ":" + sc, 10, 200);
}

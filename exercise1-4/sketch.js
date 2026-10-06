function setup () {
    createCanvas (600,600)
}

function draw () {
    background (255)
    rectMode(CENTER)
    fill (200,0,200)
    rect(300, 300, (mouseX -300)*2, (mouseY -300)*2)
}
let posicaoXbolinha=200 //fornece a posição x da bolinha
let posicaoYbolinha=200 //fornece a posição y da bolinha
let diametro=50
let cor
function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0,255,255);
  circle(posicaoXbolinha, posicaoYbolinha, diametro)
  cor=color(random(0,255), random(0,255), random(0,255))
  fill(cor)
}
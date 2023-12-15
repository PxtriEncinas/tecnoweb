let img = [];
let boto = [];
let deci = [];
let fondo, ImgInstrucciones, manzana, paleta, ladri;
let aventura;

function preload() {
  for (let e = 0; e<14; e++) {
    img[e]= loadImage("assets/p" + e + ".png");
  }
  
   for (let b = 0; b<5; b++) {
    boto[b]= loadImage("assets/b" + b + ".png");
  }
  
  for (let d = 0; d<6; d++) {
    deci[d]= loadImage("assets/da" + d + ".png");
  }
  
  fondo = loadImage("assets/fondo.png");
  ImgInstrucciones = loadImage("assets/ins.png");
  manzana = loadImage("assets/manzana.png");
  paleta = loadImage("assets/paleta.png");
  ladri = loadImage("assets/ladrillo.png");
}

function setup() {
  createCanvas(700, 700);
  aventura = new Aventura();
}


function draw() {
  background(200);
  aventura.dibujar();
}
function mouseClicked() {
  aventura.click(mouseX, mouseY);
}

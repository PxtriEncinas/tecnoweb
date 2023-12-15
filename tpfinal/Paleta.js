class Paleta {
  constructor() {
    this.paleta = paleta;
    this.x = 300;
    this.y = height - 40;
    this.ancho = 150;
    this.alto = 40;
    this.velocidad = 5;
  }

  dibujar() {
    image(this.paleta, this.x, this.y, this.ancho, this.alto);
  }

  moverIzquierda() {
    this.x =  constrain(this.x - this.velocidad, 0, width - this.ancho); 
  }

  moverDerecha() {
    this.x = constrain(this.x + this.velocidad, 0, width - this.ancho);
  }
  teclaPresionada() {
    if (keyIsPressed) {
      if (keyCode == LEFT_ARROW) {
        this.moverIzquierda();
      } else if (keyCode == RIGHT_ARROW) {
        this.moverDerecha();
      }
    }
    
  }
  mover(){
    this.moverIzquierda();
    this.moverDerecha();
    }
}

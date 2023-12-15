class Boton {
  constructor(x, y, ancho, altura, imgb) {
    this.boton = imgb;
    this.posX = x;
    this.posY = y;
    this.ancho = ancho;
    this.altura = altura;
  }

  unBoton() {
    image(this.boton, this.posX, this.posY, this.ancho, this.altura);
  }

  click(x, y) {
    return x >= this.posX && x <= this.posX + this.ancho &&
      y >= this.posY && y <= this.posY + this.altura;
  }
}

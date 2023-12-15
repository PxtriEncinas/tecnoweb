class Ladrillo {
  constructor(x, y, ancho, altura) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.altura = altura;
    this.visible = true;
    this.ladri = ladri;
  }
  dibujar() {
    if (this.visible) {

      image(this.ladri, this.x, this.y, this.ancho, this.altura);
    }
  }
}

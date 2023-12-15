class PantallaUnBoton {
  constructor(escena, imgBoton, btX, btY, btAncho, btAlutura, siguiente) {
    this.escena = escena;
    this.imgBoton = imgBoton;
    this.btX = btX;
    this.btY = btY;
    this.btAncho = btAncho;
    this.btAltura = btAlutura;
    this.siguiente = siguiente;
    this.boton = new Boton(this.btX, this.btY, this.btAncho, this.btAltura, this.imgBoton);
  }
  dibujar() {
    image(this.escena, 0, 0, width, height);
    this.boton.unBoton();
  }
  click(x, y) {
    if (this.boton.click(x, y)) {
      return this.siguiente;
    }
    return false;
  }
}

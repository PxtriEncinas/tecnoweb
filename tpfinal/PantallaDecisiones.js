class PantallaDecisiones {
  constructor(escenaDecisiones, deciA, btaX, btaY, btaAncho, btaAltura, deciB, btbX, btbY, btbAncho, btbAltura, siguienteA, siguienteB) {
    this.escenaDecisiones = escenaDecisiones;
    // Decisión A
    this.deciA = deciA;
    this.btaX = btaX;
    this.btaY = btaY;
    this.btaAncho = btaAncho;
    this.btaAltura = btaAltura;
    this.siguienteA = siguienteA;
    this.botonA = new Boton(this.btaX, this.btaY, this.btaAncho, this.btaAltura, this.deciA);
    // Decisión B
    this.deciB = deciB;
    this.btbX = btbX;
    this.btbY = btbY;
    this.btbAncho = btbAncho;
    this.btbAltura = btbAltura;
    this.siguienteB = siguienteB;
    this.botonB = new Boton(this.btbX, this.btbY, this.btbAncho, this.btbAltura, this.deciB);
  }

  dibujar() {
    image(this.escenaDecisiones, 0, 0, width, height);
    this.botonA.unBoton();
    this.botonB.unBoton();
  }

  click(x, y) {
    if (this.botonA.click(x, y)) {
      return this.siguienteA;
    }
    if (this.botonB.click(x, y)) {
      return this.siguienteB;
    }
    return false;
  }
}

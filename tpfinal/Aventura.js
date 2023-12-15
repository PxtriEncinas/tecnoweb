class Aventura {
  constructor() {
    this.pantallas = [];
    this.pantallaActual = 0;
    this.escenas();
    this.juego = new Juego(7, 14);
  }


  dibujar() {
    if (this.pantallaActual === 0) {
      this.juego.reiniciarJuego();
    }
    if (this.pantallaActual == 6) {
      this.juego.dibujar();
      if (this.juego.JTerminado()) {
        this.pantallaActual = this.juego.ganarOperder();
      }
    } else {
      this.pantallas[this.pantallaActual].dibujar();
    }
  }
  escenas() {
    this.pantallas[0] = new PantallaMenu(img[0], 200, 480, 130, 45, 200, 540, 130, 45, 1, 15); //escenaMenu, btIX, btIY, btIAncho, btIAltura, btCX, btCY, btCAncho, btCAltura, inicio, creditos
    this.pantallas[1] = new PantallaUnBoton(img[1], boto[2], 450, 650, 100, 40, 2); //escena, imgBoton, btX, btY, btAncho, btAlutura, siguiente
    this.pantallas[2] = new PantallaUnBoton(img[2], boto[2], 450, 650, 100, 40, 3);
    this.pantallas[3] = new PantallaDecisiones(img[3], deci[0], 80, 600, 230, 55, deci[1], 400, 600, 230, 55, 4, 11); //escenaDecisiones, deciA, btaX, btaY, btaAncho, btaAltura, deciB, btbX, btbY, btbAncho, btbAltura, siguienteA, siguienteB
    this.pantallas[4] = new PantallaDecisiones(img[4], deci[2], 80, 600, 230, 55, deci[3], 400, 600, 230, 55, 5, 14);
    this.pantallas[5] = new PantallaUnBoton(ImgInstrucciones, boto[2], 300, 650, 100, 40, 6);
    //juego
    this.pantallas[7] = new PantallaUnBoton(img[5], boto[2], 450, 650, 100, 40, 8);
    this.pantallas[8] = new PantallaDecisiones(img[6], deci[4], 80, 600, 230, 55, deci[5], 400, 600, 230, 55, 9, 12);
    this.pantallas[9] = new PantallaUnBoton(img[7], boto[2], 450, 650, 100, 40, 10);
    this.pantallas[10] = new PantallaUnBoton(img[8], boto[3], 300, 640, 90, 40, 0);
    this.pantallas[11] = new PantallaUnBoton(img[9], boto[3], 300, 640, 100, 40, 0);
    this.pantallas[12] = new PantallaUnBoton(img[10], boto[2], 450, 650, 100, 40, 13);
    this.pantallas[13] = new PantallaUnBoton(img[11], boto[3], 300, 640, 100, 40, 0);
    this.pantallas[14] = new PantallaUnBoton(img[13], boto[3], 300, 640, 100, 40, 0);
    this.pantallas[15] = new PantallaUnBoton(img[12], boto[4], 150, 530, 100, 40, 0);
  }

  click(x, y) {
    if (this.pantallas[this.pantallaActual]) {
      const siguiente = this.pantallas[this.pantallaActual].click(x, y);
      if (siguiente !== false) {
        this.pantallaActual = siguiente;
      }
    }
  }
}

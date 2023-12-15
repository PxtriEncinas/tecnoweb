class PantallaMenu {
  constructor(escenaMenu, btIX, btIY, btIAncho, btIAltura, btCX, btCY, btCAncho, btCAltura, inicio, creditos) {
    this.escenaMenu = escenaMenu;
    //Iniciar
    this.inicio = inicio;
    this.btIX = btIX;
    this.btIY = btIY;
    this.btIAncho = btIAncho;
    this.btIAltura = btIAltura;
    this.botonM = new Boton(this.btIX, this.btIY, this.btIAncho, this.btIAltura, boto[0]);
    //Creditos
    this.creditos = creditos;
    this.btCX = btCX;
    this.btCY = btCY;
    this.btCAncho = btCAncho;
    this.btCAltura = btCAltura;
    this.botonC = new Boton(this.btCX, this.btCY, this.btCAncho, this.btCAltura, boto[1]);
  }
  
  dibujar() {
    image(this.escenaMenu, 0, 0, width, height);
    this.botonM.unBoton();
    this.botonC.unBoton();
  }

  click(x, y) {
    if (this.botonM.click(x, y)) {
      return this.inicio;
    }
    if (this.botonC.click(x, y)) {
      return this.creditos;
    }
    return false;
  }
}

class Juego {
  constructor(escganar, escperder) {
    this.fondo = fondo;
    this.ladrillos = [];
    this.paleta = new Paleta();
    this.pelota = new Pelota();
    this.iniciarLadrillos();
    this.filaLadri = 4;
    this.columnaLadri = 9;
    this.ladrilloAncho = width / this.columnaLadri;
    this.ladrilloAltura = 30;
    this.perder = escperder;
    this.ganar = escganar;
    this.terminar = false;
    this.puntos = 0;
  }

  iniciarLadrillos() {
    for (let i = 0; i < this.filaLadri; i++) {
      for (let j = 0; j < this.columnaLadri; j++) {
        let x = j * this.ladrilloAncho;
        let y = i * this.ladrilloAltura;
        this.ladrillos.push(new Ladrillo(x, y, this.ladrilloAncho, this.ladrilloAltura));
      }
    }
  }

  dibujar() {
    this.dibujarFondo();
    this.ladrillos.map((ladrillo) => ladrillo.dibujar());
    this.pelota.dibujar();
    this.paleta.teclaPresionada();
    this.paleta.dibujar();
    this.dibujarVidas();
    this.dibujarPuntos();
    this.pelota.mover();
    this.paleta.mover();
    this.comprobarColisionPaleta();
    this.comprobarColisionLadrillos();
  }
  dibujarFondo() {
    image(this.fondo, 0, 0, width, height);
  }

  comprobarColisionPaleta() {
    if (
      this.pelota.posY + this.pelota.alto >= this.paleta.y &&
      this.pelota.posY <= this.paleta.y + this.paleta.alto &&
      this.pelota.posX + this.pelota.ancho >= this.paleta.x &&
      this.pelota.posX <= this.paleta.x + this.paleta.ancho
      ) {
      this.pelota.velY *= -1;
    }
  }

  comprobarColisionLadrillos() {
    for (let i = this.ladrillos.length - 1; i >= 0; i--) {
      const ladrillo = this.ladrillos[i];
      if (ladrillo.visible) {
        if (
          this.pelota.posY <= ladrillo.y + ladrillo.altura &&
          this.pelota.posY + this.pelota.alto >= ladrillo.y &&
          this.pelota.posX + this.pelota.ancho >= ladrillo.x &&
          this.pelota.posX <= ladrillo.x + ladrillo.ancho
          ) {
          this.pelota.velY *= -1;
          ladrillo.visible = false;
          this.puntos += 10;
        }
      }
    }
  }

  ganarOperder() {
    if (this.pelota.CantVidas === 0 ) {
      return this.perder;
    } else if (this.puntos === this.filaLadri * this.columnaLadri * 10) {
      return this.ganar;
    }
  }

  JTerminado() {
    if (this.pelota.CantVidas === 0 ) {
      return  this.terminado = true;
    } else if (this.puntos === this.filaLadri * this.columnaLadri * 10) {
      return  this.terminado = true;
    } else {
      return  this.terminado = false;
    }
  }

  reiniciarJuego() {
    this.fondo = fondo;
    this.ladrillos = [];
    this.paleta = new Paleta();
    this.pelota = new Pelota();
    this.iniciarLadrillos();
    this.terminar = false;
    this.puntos = 0;
  }

  dibujarVidas() {
    fill(255);
    textSize(30);
    text(this.pelota.CantVidas, 60, 640);
  }

  dibujarPuntos() {
    fill(255);
    textSize(30);
    text(this.puntos, 623, 640);
  }
}

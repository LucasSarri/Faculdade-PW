class Porta {
  constructor() {
    this.altura = 1;
    this.largura = 2;
    this.material = "madeira";
    this.aberto = true
  }

  abrirFechar() {
    if (this.aberto == true) {
      alert("Porta aberta");
    }
    else {
      alert("Porta fechada");
    }
  }
}

port1 = new Porta();

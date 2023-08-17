function encontraTermo() {
    const texto = document.getElementById("texto").value;
    const termo = document.getElementById("termo").value;

    const posicaoTermo = texto.indexOf(termo);
    const elemento = document.createElement("p");
    elemento.textContent= "A posição do elemento é "+posicaoTermo;
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.appendChild(elemento);
}
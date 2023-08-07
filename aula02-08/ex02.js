function descobreCodigo()
{
    let palavra = prompt("Informe uma palavra")
    let ordem = prompt("Informe a ordem")
    let codigo = palavra.charCodeAt(ordem)
    alert("O caractere na ordem "+ordem+" tem o codigo "+codigo)
}
descobreCodigo()
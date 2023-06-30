/*
    Dada uma sequência de caracteres, inverta o seu conteúdo e apresente ao usuário o resultado invertido.
*/

function inverteTexto()
{
    let texto = prompt('Informe uma sequência de caracteres');
    let i = texto.length-1;
    let textoInvertido = [];

    while (i >= 0)
    {
        textoInvertido.push(texto[i]);
        i--;
    }

    alert(textoInvertido);
}
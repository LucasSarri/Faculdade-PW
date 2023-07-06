/*
    Faça um programa JavaScript em que o usuário informará 3 números e o programa calculará a média aritmética desses números.
*/

function media()
{
    let n1 = parseInt(prompt('Informe o primeiro número'));
    let n2 = parseInt(prompt('Informe o segundo número'));
    let n3 = parseInt(prompt('Informe o terceiro número'));

    let media = (n1+n2+n3)/3;
    alert('Média é '+media);
}
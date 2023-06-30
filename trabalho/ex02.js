/*
    Faça um programa JavaScript em que o usuário informará a sua idade e o programa emitirá uma mensagem dizendo se o usuário e ou não menor 
    de idade.
*/ 

function idade()
{
    let idade = parseInt(prompt("Informe sua idade"));

    if (idade >= 18)
    {
        alert('Maior de idade');
    }
    else
    {
        alert('Menor de idade');
    }
}
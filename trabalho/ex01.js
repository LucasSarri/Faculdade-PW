/*  
    Faça um programa JavaScript que receba 3 números informados pelo usuário e em seguida apresente uma mensagem de alerta informando qual é 
    o maior número dentre os números informados.
*/

function comparacao() 
{
    let n1 = parseInt(prompt('Informe o primeiro número:'));
    let n2 = parseInt(prompt('Informe o segundo número:'));
    let n3 = parseInt(prompt('Informe o terceiro número:'));

    if (n1>n2)
    {
        if (n1>n3)
        {
            alert('O número '+n1+' é o maior');
        }
        else
        {
            alert('O número '+n3+' é o maior');
        }
    }
    else if (n3>n2)
    {
        if (n3>n1)
        {
            alert('O número '+n3+' é o maior');
        }
        else
        {
            alert('O número '+n1+' é o maior');
        }
    }
    else if (n2>n1)
    {
        if(n2>n3)
        {
            alert('O número '+n2+' é o maior');
        }
        else
        {
            alert('O número '+n3+' é o maior');
        }
    }

}
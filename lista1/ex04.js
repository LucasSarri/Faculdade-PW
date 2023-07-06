/*
    Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 ou 5, obtemos 3, 5, 6 e 9. A soma desses múltiplos é 23. 
    Faça um programa JavaScript que encontre a soma de todos os múltiplos de 3 ou 5 abaixo de 1000.
*/ 

function somaMultiplos()
{
    soma = 0;

    for (let i = 0; i < 1000; i++)
    {
        if (i%3==0 || i%5==0)
        {
            soma += i;
        }
    }

    alert('A soma é '+soma);
}
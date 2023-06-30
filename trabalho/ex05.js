/*
    Cada novo termo na sequência de Fibonacci é gerado adicionando os dois termos anteriores. Começando com 0 e 1, os primeiros termos serão:
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ( ... )
    Considerando os termos da sequência de Fibonacci a partir dos pares 0 e 1, cujos valores não excedam cinquenta mil, 
    encontre a soma dos termos pares.
*/

function Fibonacci()
{
    let fib = [0,1];
    let i = 2;
    let soma = 0;
    let elemento;

    do
    {
        elemento = fib[i-1] + fib[i-2];
        if (elemento < 50000)
        {
            fib.push(elemento);
            if (elemento % 2 == 0)
            {
                soma += elemento;
            }
        }
        i++;
    }while(elemento < 50000);

    alert('A soma é de '+soma);
}
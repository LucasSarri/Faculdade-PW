/*
    Coloque em ordem crescente uma sequência de caracteres:
    Dada uma sequência de caracteres, coloque em ordem crescente e apresente ao usuário a sequência original e o resultado ordenado.
*/

function ordenaCaracteres()
{
    const numeros = prompt("Digite uma sequência de números separados por espaço:").split(" ");

    let numInt = [];
    for(let i = 0; i < numeros.length; i++)
    {
        numInt.push(parseInt(numeros[i]));
    }

    const numOrd = numInt.sort((a, b) => a - b);
   
    alert("Sequência original: "+numInt);
    alert("Sequência dos números ordenados: "+numOrd);
}
  
/*
    Coloque em ordem crescente uma sequência de caracteres:
    Dada uma sequência de caracteres, coloque em ordem crescente e apresente ao usuário a sequência original e o resultado ordenado.
*/

function ordenaCaracteres()
{
    let sequencia = prompt("Informe uma sequência de números para ordenação");
    let novaSeq = [];
    for(let i = 0; i<sequencia.length; i++) 
    {
        min = i;
        for(let j = i+1; j<sequencia.length; j++)
        {
            let elemento1 = parseInt(sequencia[j]);
            let elemento2 = parseInt(sequencia[min]);
            if(elemento1 < elemento2)
            {
                min = j;
            }
        }
        novaSeq.push(sequencia[min]);
    }
    alert("A sequência original é: "+sequencia);
    alert("A nova sequência é: "+novaSeq);
}
function exp()
{
    let base = parseInt(prompt("Informe um número inteiro positivo"));
    let expoente = parseInt(prompt("Informe um número inteiro positivo"));
    let resultado = 1;
    for(let i = 0; i < expoente; i++)
    {
        resultado *= base;
    }
    alert("Resultado é: "+base+" elevado a "+expoente+" é igual a "+resultado);
}
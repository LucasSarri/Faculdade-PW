function exp()
{
    let resultado = 1;
    let resultElement = document.getElementById("resultado");

    for(let i = 0;i <= 8; i++)
    {
        resultElement.innerHTML += '<p>'+2+'<sup>'+i+'</sup> = '+resultado+'</p>';
        resultado *= 2;
    }
}
function sequenciaCodigos()
{
    let palavra = prompt("Informe uma palavra")
    let codigo = []
    for(let i = 0; i<palavra.length; i++)
    {
        codigo.push(palavra.charCodeAt(i))
    } 
    alert(palavra+" contém os caracteres UNICODE "+codigo)
}
sequenciaCodigos()
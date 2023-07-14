function inverteString() 
{
    let string = prompt("Informe sequência de caracteres");
    var splitString = string.split("");
    let stringR = splitString.reverse();
    alert("Sequência invertida: "+stringR);
}
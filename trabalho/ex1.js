let anos = parseInt(prompt('Informe sua idade em anos'));
let meses = parseInt(prompt('Informe sua idade em meses'));
let dias = parseInt(prompt('Informe sua idade em dias'));

dias = anos*365 + meses*30 + dias;

alert("Sua idade em dias é: "+dias)
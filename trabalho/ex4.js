let ipi = parseFloat(prompt("Informe a porcentagem de IPI"));

let codPeca1 = parseInt(prompt("Informe o código da peça 1"));
let vlrPeca1 = parseFloat(prompt("Informe o valor da peça 1"));
let qtdPeca1 = parseInt(prompt("Informe a quantidades de peças 1"));

let codPeca2 = parseInt(prompt("Informe o código da peça 2"));
let vlrPeca2 = parseFloat(prompt("Informe o valor da peça 2"));
let qtdPeca2 = parseInt(prompt("Informe a quantidades de peças 2"));

let formula = (vlrPeca1*qtdPeca1 + vlrPeca2*qtdPeca2)*(ipi/100 +1);

alert("O total a ser pago é "+formula)
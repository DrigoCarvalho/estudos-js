// Uma função pura é uma função em que o valor
// de retorno é determinado APENAS por seus valores
// de entrada, sem efeitos colaterais observáveis

let qtdeDeExecucoes = 0;

// pura
function somar(a, b) {
  qtdeDeExecucoes++; // efeito colateral observável
  return a + b;
}

console.log(qtdeDeExecucoes);
console.log(somar(68, 31));
console.log(somar(68, 31));
console.log(somar(68, 31));
console.log(somar(68, 31));
console.log(somar(68, 31));
console.log(qtdeDeExecucoes);

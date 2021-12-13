// Para o reduce pode-se passar dois parâmetros, um sendo função 
// e outro vlor inicial
// reduce pode transformar o array em qualquer coisa, diferente de map e filter 
// inicialmente utilizamos dois valores para operações acc(acumulador) e el(elemento), podemos passar o valor inicial ou nao
// tambem podemos passar indice e array, ficando (acc, el, i, a) 

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

const getTotal = item => item.qtde * item.preco
const somar = (acc, el) => acc + el

const totais = carrinho.map(getTotal)
const totalGeral = totais.reduce(somar, 0) // valor inicial do reduce é 0

console.log(totalGeral)

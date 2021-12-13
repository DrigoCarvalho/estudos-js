// função dentro do filter tem q ser booleana
// Gera um array resultante igual ou MENOR
// tambem recebe uma função como parâmetro que 
// tenha valor, indice e array


const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

const qtdeMaiorQueZero = item => item.qtde > 1
const getNome = item => item.nome

const itensValidos = carrinho.filter(qtdeMaiorQueZero)

console.log(itensValidos)

// usando associado com o map 

const nomeItensValidos = carrinho
    .filter(qtdeMaiorQueZero)
    .map(getNome)

console.log(nomeItensValidos)

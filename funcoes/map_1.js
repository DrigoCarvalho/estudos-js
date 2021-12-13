// o tamanho do array final do map sempre terá o 
// msm tamanho do array original

const nums = [1, 2, 3, 4, 5]

// a função callback do map pode receber 3 parametros
// valor, índice e o array
const dobro = (n, i, a) => n * 2 + i + a.length

console.log(nums.map(dobro))

// o array original continua o mesmo, o que é feito é uma copia
const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)


const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

//pegar só os nomes e pegar qtde pelo preço

const pegarNome = produto => produto.nome
const precoTotal = produto => produto.qtde * produto.preco

const nomesProdutos = carrinho.map(pegarNome)
const valoresProdutos = carrinho.map(precoTotal)

console.log(nomesProdutos, valoresProdutos)
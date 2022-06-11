// função construtora - cria objetos
function Produto(nome, preco, desc = 0.15) {
    // vc utiliza this. para atribuir valor a instância gerada, toda vez que coloca 'new' 
    // esses atributos ficam publicos
    this.nome = nome
    this.preco = preco
    this.desc = desc

    this.precoFinal = function() {
        return this.preco * (1 - this.desc)
    }

}

console.log(typeof Produto) // function

const p1 = new Produto('Caneta', 8.59)
console.log(typeof p1) // object
console.log(p1.preco) // 8.59

const p2 = new Produto('Geladeira', 2345.98)
console.log(typeof p2) // object
console.log(p2.nome) // Geladeira
console.log(p2.precoFinal()) // 1994.0829999999999

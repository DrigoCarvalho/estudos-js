// função construtora - cria objetos
function Produto(nome, preco, desc = 0.15) {
    // vc utiliza this. para atribuir valor a instância gerada, toda vez que coloca 'new' 
    // esses atributos ficam publicos
    this.nome = nome
    this.preco = preco
    this._desc = desc

    this.precoFinal = function() {
        return this.preco * (1 - this._desc)
    }

}

// adicionar funcionalidade que nao foi definida na função construtora
Produto.prototype.log = function() {
    console.log(`Nome: ${this.nome} Preço: ${this.preco}`)
}

//com o defineProperty consigo criar getter e setter em uma função
Object.defineProperty(Produto.prototype, 'desc', {
    get: function(){
        return this._desc
    },
    set: function(novoDesc) {
        if(novoDesc >= 0 && novoDesc <= 1){
            this._desc = novoDesc
        }
    }
})

Object.defineProperty(Produto.prototype, 'descString', {
    get: function(){
        return `${this._desc * 100}% de desconto!`
    }
})

console.log(typeof Produto) // function

const p1 = new Produto('Caneta', 8.59)
console.log(typeof p1) // object
console.log(p1.preco) // 8.59

p1.log() // Nome: Caneta Preço: 8.59
p1.desc = 0.8
console.log(p1.descString) // 80%

const p2 = new Produto('Geladeira', 2345.98)
console.log(typeof p2) // object
console.log(p2.nome) // Geladeira
console.log(p2.precoFinal()) // 1994.0829999999999

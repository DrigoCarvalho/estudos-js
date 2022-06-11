class Produto { // classe é syntax sugar, acaba sendo função

    constructor(nome, preco, desc = 0.15){
        // posso ter apenas o this.nome ao inves de this._nome que seria o setter atribuindo valor
        this.nome = nome
        this.preco = preco
        this.desc = desc
    }

    get nome() {
        return `Produto: ${this._nome}`
    }
    // setter do get, assim podemos chamar a propriedade atribuindo valor
    set nome(novoNome) {
        this._nome = novoNome.toUpperCase()
    }

    // nesse caso nao usamos function
    // se usamos get na frente nós podemos usar a função com atributo
    get precoFinal() {
        return this.preco * (1 - this.desc)
    }

    //função dentro de classe nós chamamos de método
}

const p1 = new Produto('Caneta', 8.59)

console.log(typeof p1) // object
console.log(p1.preco) // 8.59

p1.nome = 'caneta'
console.log(p1.nome) // CANETA

const p2 = new Produto('Geladeira', 2345.98)
console.log(typeof p2) // object
console.log(p2.nome) // Geladeira
console.log(p2.precoFinal) // 1994.0829999999999
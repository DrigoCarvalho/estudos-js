// arrow function
const felizNatal = () => console.log('Feliz Natal!!!')
felizNatal()

const saudacao = (nome) => "Fala " + nome
console.log(saudacao('digo'))

// não é necessário colocar parenteses tendo um parâmetro só
const saudacao = nome => "Fala " + nome
console.log(saudacao('digo'))

// com ...(operador rest) pega os parametros e joga em um array
const somar = (...numeros) => {
    let total = 0
    for(let n of numeros) {
        total += n 
    }
    return total
}

console.log(1,2,3)
console.log(1,2,3,4,5,6)

// tranformando funcao de outra aula em arrow
const potencia = base => exp => Math.pow(base,exp) // segundo param indo para funcao interna
        
    
console.log(potencia(2)(2))


// lidando com this
Array.prototype.log = function () {
    console.log(this)
}

const numeros = [1, 2, 3]
numeros.log()

// prototype serve para vc criar novas funções para array 
Array.prototype.ultimo = function () {
    console.log(this[this.length -1]) // this não funciona com arrow function
}

const numeros = [1, 2, 3]
numeros.ultimo()



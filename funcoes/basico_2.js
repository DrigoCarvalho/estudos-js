function bomDia() {
    console.log('Bom dia')
}

// passando função como parâmetro pra outra função

function executarQualquerCoisa(fn) {
    if(typeof fn === 'function') {
        fn()
    }
}

executarQualquerCoisa(bomDia)


// retornar uma função a partir de outra

function potencia(base) {
    return function(exp) { // segundo param indo para funcao interna
        return Math.pow(base,exp)
    }
}

// pode-se usar a constante como função
const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

// pode-se chamar diretamente
const bits8 = potencia(2)(8)
console.log(bits8)
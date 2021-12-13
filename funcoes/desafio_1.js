// somar(3)(4)(5)

//calcular(3)(7)(fn)



function somar(num) {
    return function(num2) {
        return function (num3) {
            return num+num2+num3
        }
    }
}

const soma = somar(3)(4)(5)
console.log(soma)


function calcular (num) {
    return function (num2) {
        return function(fn){
            return fn(num, num2)
        }
    }
}

function sum (a, b) {
        return a +b
}

function mul (a, b) {
    return a * b
}

function div (a, b) {
    return a / b
}



const suma = calcular(4)(2)(sum)
console.log(suma)
const multi = calcular(4)(2)(mul)
console.log(multi)
const divi = calcular(4)(2)(div)
console.log(divi)
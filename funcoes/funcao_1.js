// JS é Multiparadigma ( OO, procedural e funcional )

// function declaration

function bomDia() {
    console.log('Bom dia')
}

bomDia()

// function expression - função anonima (normalmente) dentro de uma variável

const boaTarde = function () {
    console.log('Boa tarde!')
}

boaTarde()


function somar(a, b) {
    return a + b 
}

// pode-se ter um parâmetro padrão caso não seja passado algum valor
function somar2(a = 0, b = 0) {
    return a + b 
}

let resultado = somar(3, 4) // 7
console.log(resultado)

// js não reclama se vc passa valores adicionais
resultado = somar(3, 4, 5, 6, 7, 8) // 7
console.log(resultado)

// se não passo o valor de b, vai como undefined
resultado = somar(3) // NaN
console.log(resultado)

resultado = somar2() // 0


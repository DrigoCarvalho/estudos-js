// é necessário passar uma função como parametro de uma promise
// 
//promessa gera um unico valor

// cumprirPromessa é o resolve
let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(3)
})

// para acessar a promise, utiliza-se then, passa-se uma func como param

p.then(function(valor) {
    console.log(valor) // saída 3
})

// ou
p.then(valor => console.log(valor))

// é possível chamar o then várias vezes 
// resultado de um vai p o outro


let f = new Promise(function(resolve) {
    resolve(['aaa','bbb','ccc'])
})

f
.then(valor => valor[0])
.then(prim => console.log(prim))

// then recebe sempre um único param
// entao pode colocar só console.log q ele imprime


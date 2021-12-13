//fazemos await comente em funções que retornam promise

function esperarPor(tempo = 2000) {
    return new Promise (function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}


// esperarPor(2000)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'))
//     .then(esperarPor)


// equivale a uma promise
async function retornaRapido () {
    return 10
}

function retornaValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 2000)
    })
}


async function executar() {
    
    let a = await retornaValor()

    await esperarPor(1500)
    console.log(`Async/Await ${a + 1}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${a + 2}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${a + 3}...`)

    return a + 3
}

// como pegar o retorno de uma função async (then)
executar().then(console.log)
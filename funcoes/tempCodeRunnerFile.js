function gerarNumerosEntre(min, max, numerosProibidos) {
    if(min > max) [max, min] = [min, max] 

    return new Promise((resolve, reject) => {
        //para gerar numero aleatório
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdeNumeros) {
    const numeros = []
    for (let _ of Array(qtdeNumeros).fill()) {
        numeros.push(await gerarNumerosEntre(1, 60, numeros))
    }
    return numeros
}

gerarMegaSena(7)
    .then(console.log)
    .catch(console.log)
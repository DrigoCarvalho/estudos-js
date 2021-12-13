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
    //tratar o erro 
    try {

        const numeros = []
        for (let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch (e) {
        throw "Não foi dessa vez"
    }
}

gerarMegaSena(7)
    .then(console.log)
    .catch(console.log)


gerarNumerosEntre(1, 5, [1, 2, 4])
    .then(console.log)
    .catch(console.log)
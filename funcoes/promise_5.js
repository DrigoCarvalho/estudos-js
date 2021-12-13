// tratamento de erros com promise

function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        // tratar interno 
        try {
            consol.log('temp')
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }

        } catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('Teste', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .catch(err => console.log(`Erro: ${err}`))

    // catch é colocado sempre no final
function gerarNumerosEntre(min, max) {
    if(min > max) {
        // aplicando destruct
        [max, min] = [min, max] 
    }

    return new Promise(resolve => {
        //para gerar numero aleatório
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(10,30).then(console.log)
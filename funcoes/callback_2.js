
// bibliotecas do node para leitura de arquivos
const fs = require('fs')
const path = require('path')

// __dirname palavra reservada para diretorio atual
const caminho = path.join(__dirname, 'dados.txt')
console.log(__dirname)

// ter um '_' no parametro quer dizer que 
// não será utilizado
function exibirConteudo(_, conteudo) {
    console.log(conteudo.toString())
}

fs.readFile(caminho, {}, exibirConteudo)
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))
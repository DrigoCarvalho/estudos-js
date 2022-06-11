const path = require("path");
const fn = require("./funcoes");

const caminho = path.join(__dirname, "..", "dados", "legendas");

const simbolos = [
  ".",
  "?",
  "!",
  "-",
  ",",
  '"',
  "♪",
  "_",
  "<i>",
  "</i>",
  "\r",
  "[",
  "]",
  "(",
  ")",
];

fn.lerDiretorio(caminho)
  .then((caminhoArquivos) => fn.elementosTerminadosCom(caminhoArquivos, ".srt"))
  .then(fn.lerArquivos)
  .then(fn.mesclarElementos)
  .then(fn.separarTextoPor("\n"))
  .then(fn.removerSeVazio)
  .then(fn.removerSeIncluir("-->"))
  .then(fn.removerSeApenasNumero)
  .then(fn.removerCaracteresEspeciais(simbolos))
  .then(fn.mesclarElementos)
  .then(fn.separarTextoPor(" "))
  .then(fn.removerSeVazio)
  .then(fn.removerSeApenasNumero)
  .then(fn.agruparElementos) // importante perceber quando é retornado string ou array
  .then(fn.ordenarPorAtribNumerico("qtde", "desc"))
  .then(console.log);

const fs = require("fs");
const path = require("path");

//função que lista arquivos de determinado diretório
function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    try {
      let arquivos = fs.readdirSync(caminho);
      arquivos = arquivos.map((arquivo) => path.join(caminho, arquivo));
      resolve(arquivos);
    } catch (error) {
      reject(error);
    }
  });
}

function lerArquivo(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, { encoding: "utf8" });
      resolve(conteudo.toString());
    } catch (error) {
      reject(error);
    }
  });
}

function lerArquivos(caminhos) {
  // .all espera receber um array de promise
  return Promise.all(caminhos.map((caminho) => lerArquivo(caminho)));
}

function elementosTerminadosCom(array, padrao) {
  return array.filter((el) => el.endsWith(padrao));
}

function removerSeVazio(array) {
  return array.filter((el) => el.trim());
}

function removerSeIncluir(padraoTextual) {
  //refatoração de função que retorna outra função
  return function (array) {
    return array.filter((el) => !el.includes(padraoTextual));
  };
}

function removerSeApenasNumero(array) {
  return array.filter((el) => {
    const num = parseInt(el.trim());
    return isNaN(num);
  });
}

function removerCaracteresEspeciais(caracteres) {
  return function (array) {
    return array.map((el) => {
      let textoSemSimbolos = el; // refatorar com reduce !!
      caracteres.forEach((simbolo) => {
        textoSemSimbolos = textoSemSimbolos.split(simbolo).join("");
      });
      return textoSemSimbolos;
    });
  };
}

const mesclarElementos = (array) => array.join(" ");

function separarTextoPor(separador) {
  return function (texto) {
    return texto.split(separador);
  };
}

function agruparElementos(elementos) {
  return Object.values(
    elementos.reduce((agrupamento, elemento) => {
      const el = elemento.toLowerCase();
      const qtde = agrupamento[el] ? agrupamento[el].qtde + 1 : 1;
      agrupamento[el] = { elemento: el, qtde };
      return agrupamento;
    }, {})
  );
}

function ordenarPorAtribNumerico(attr, ordem = "asc") {
  return function (array) {
    const asc = (o1, o2) => o1[attr] - o2[attr];
    const desc = (o1, o2) => o2[attr] - o1[attr];
    return array.sort(ordem === "asc" ? asc : desc);
  };
}

module.exports = {
  lerDiretorio,
  elementosTerminadosCom,
  lerArquivo,
  lerArquivos,
  removerSeVazio,
  removerSeIncluir,
  removerSeApenasNumero,
  removerCaracteresEspeciais,
  mesclarElementos,
  separarTextoPor,
  agruparElementos,
  ordenarPorAtribNumerico,
};

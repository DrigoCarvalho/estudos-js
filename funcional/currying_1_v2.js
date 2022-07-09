// currying é quando vc passa os parametros de forma parcial

function textoComTamanhoEntre(min) {
  return function (max) {
    return function (erro) {
      return function (texto) {
        // Lazy evaluation
        const tamanho = (texto || "").trim().length;
        if (tamanho < min || tamanho > max) {
          throw erro;
        }
      };
    };
  };
}

// Lazy evaluation
// funções com versões parciais
const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255);
const forcarNomeProdutoValido = forcarTamanhoPadrao("Nome produto invalido");

const p1 = {
  nome: "A",
  preco: 14.99,
  desc: 0.25,
};

forcarNomeProdutoValido(p1.nome);

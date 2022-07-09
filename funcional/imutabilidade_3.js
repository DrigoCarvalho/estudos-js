// sempre que precisar q um objeto não seja modificado, utilizar Object.freeze({})
const pessoa = Object.freeze({
  nome: "Maria",
  altura: 1.76,
  cidade: "São Paulo",
  end: { rua: "Feliz" },
});

// atribuição por Referência
const novaPessoa = pessoa;

novaPessoa.nome = "João";
novaPessoa.cidade = "fortaleza";

// Passagem por referência
function alteraPessoa(newPessoa) {
  newPessoa.nome = "fer";
  newPessoa.cidade = "maua";
}

// 2a forma passagem por referência, fazendo cópia do objeto em primeiro nível (função impura)
function alteraPessoa2(pessoa) {
  const novaPessoa = { ...pessoa };
  novaPessoa.nome = "Eduardo";
  novaPessoa.cidade = "Mogi";
  novaPessoa.end.rua = "xxx"; // vai alterar dos dois
  return novaPessoa;
}

alteraPessoa(pessoa);

const novaPessoa2 = alteraPessoa2(pessoa);

console.log(novaPessoa2);
console.log(pessoa);

// quando for trabalhar com objetos ou arrays deve-se ter atenção com a imutabilidade
// já que são passados por referência
// slice filter map são exemplos de funções puras que nao alteram o array original

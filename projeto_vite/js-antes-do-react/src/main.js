// Nullish Coalescing Operator
// O operador de coalescência nula (??) retorna o valor do lado direito quando o valor do lado esquerdo é null ou undefined, estritamente.

const idade = 0

document.body.innerText = `Sua idade é ${idade ?? 'Idade não informada'}`;

// Objetos
const usuario = {
    nome: 'Diego',
    idade: 26,
    empresa: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
}

// Manipulacao de objetos
// propriedade in - verifica se a propriedade existe no objeto

document.body.innerText += `\n chave nome existe? ${'nome' in usuario}`;

// Object.keys() - retorna um array com as chaves do objeto
document.body.innerText += `\n Chaves do objeto: ${Object.keys(usuario)}`;

// Object.values() - retorna um array com os valores do objeto
document.body.innerText += `\nEmpresa: ${Object.values(usuario)[2]}`;
// Dica usar o JSON.stringify() para visualizar o objeto com mais clareza
document.body.innerText += `\nValores do objeto: ${JSON.stringify(Object.values(usuario))}`;

// Object.entries() - retorna um array com os pares [chave, valor] do objeto
const endereco = Object.entries(usuario.endereco);
document.body.innerText += `\n Entries: ${JSON.stringify(endereco)}`;

// Destructuring
// Atribuição via desestruturação de objetos
const { nome, idade: userIdade = 'Idade não informada', endereco: { cidade, estado, pais = 'Brasil' } } = usuario;

document.body.innerText += `\nNome (destructuring): ${nome}`;

//Destructing em arrays
const arr = [1, 2, 3, 4, 5];
const [primeiro, segundo, , quarto] = arr;
document.body.innerText += `\nArray (destructuring): ${JSON.stringify({ primeiro, segundo, quarto })}`;

// Rest operator
const { empresa, ...resto } = usuario;
document.body.innerText += `\nResto (destructuring + rest): ${JSON.stringify(resto)}`;

// Rest operator em arrays
const numeros = [1, 2, 3, 4, 5];
const [um, dois, ...outros] = numeros;
document.body.innerText += `\nNúmeros (destructuring + rest em array): ${JSON.stringify(outros)}`;

// Spread operator
const usuario2 = { ...usuario, nome: 'Gabriel' };
document.body.innerText += `\nUsuário 2 (spread): ${JSON.stringify(usuario2)}`;

const numeros2 = [...numeros, 6, 7, 8];
document.body.innerText += `\nNúmeros 2 (spread em array): ${JSON.stringify(numeros2)}`;

// Optional Chaining
// O encadeamento opcional (?.) permite acessar propriedades de um objeto que podem não existir sem causar um erro. Pode ser usado para funcoes tambem

document.body.innerText += `\nCidade (optional chaining): ${usuario.endereco?.cidade}`;
document.body.innerText += `\nPaís (optional chaining com valor padrão): ${usuario.endereco?.pais ?? 'País não informado'}`;

// --------------------------------//

// Métodos de arrays
const arrMetodos = [1, 2, 3, 4, 5];

// map - itera sobre o array e retorna um novo array
const arrMap = arrMetodos.map(item => item * 2);
document.body.innerText += `\nArray map: ${JSON.stringify(arrMap)}`;

// filter - filtra o array com base em uma condição e retorna um novo array
const arrFilter = arrMetodos.filter(item => item % 2 === 0);
document.body.innerText += `\nArray filter: ${JSON.stringify(arrFilter)}`;

// find - retorna o primeiro elemento que satisfaz a condição
const arrFind = arrMetodos.find(item => item === 3);
document.body.innerText += `\nArray find: ${arrFind}`;

// reduce - reduz o array a um único valor com base em uma função acumuladora
const arrReduce = arrMetodos.reduce((total, next) => total + next, 0);
document.body.innerText += `\nArray reduce: ${arrReduce}`;

// some - verifica se pelo menos um elemento satisfaz a condição
const arrSome = arrMetodos.some(item => item > 4);
document.body.innerText += `\nArray some: ${arrSome}`;

// every - verifica se todos os elementos satisfazem a condição
const arrEvery = arrMetodos.every(item => item < 10);
document.body.innerText += `\nArray every: ${arrEvery}`;

// includes - verifica se o array inclui um determinado elemento
const arrIncludes = arrMetodos.includes(3);
document.body.innerText += `\nArray includes: ${arrIncludes}`;

// --------------------------------//

// importante usar esses metodos por conta da imutabilidade dos dados no React
// nunca usar push, pop, shift, unshift, splice, sort em arrays no React
// nunca usar delete em objetos no React

// --------------------------------//

// Qual é melhor utilizar, promise ou async/await?
// Depende do caso, mas o async/await é mais fácil de ler e entender, principalmente quando se tem várias operações assíncronas encadeadas.
// Porém, em alguns casos, o uso de promises pode ser mais adequado, como quando se quer executar várias operações assíncronas em paralelo.


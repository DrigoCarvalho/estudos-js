// nao alterar propriedade de alguma var

// slice filter map são funções puras que nao alteram o array original

// função pura que nao altera o array original
function ordenar(array) {
  return [...array].sort();
}

//freeze congela as propriedades do objeto
const nums = Object.freeze([3, 1, 7, 9, 4, 6]);

const numsOrdenados = ordenar(nums);

console.log(numsOrdenados);
console.log(nums);

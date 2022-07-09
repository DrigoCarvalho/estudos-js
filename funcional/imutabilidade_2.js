const nums = [4, 8, 3, 2, 9, 1, 9, 3];

// 1a estrategia imperativa (como tem q ser feito) - dados mutaveis
let total = 0;

for (let i = 0; i < nums.length; i++) {
  total += nums[i];
}

console.log(total);

// 2a estrategia com reduce - funcional (o que tem q ser feito), declarativo

const somar = (a, b) => a + b;
const totalR = nums.reduce(somar);
console.log(totalR);

// 3a estratégia recursividade
function somarArray(array, total = 0) {
  if (array.length === 0) {
    return total;
  }
  return somarArray(array.slice(1), total + array[0]);
}

const somaREC = somarArray(nums);

console.log(somaREC);

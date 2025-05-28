let a: number = 10;
let b: number = 14;

//Aritméticos

console.log('soma', a + b);
console.log('subtração', a - b);
console.log('multiplicação', a * b);
console.log('Divisão', a / b);
console.log('Resto', a % b) /*percente*/

//Relacionais
console.log('Igual (==)', a == b);
console.log('diferente: ', a != b);
console.log('Maior que: ', a > b);
console.log('Menor que: ', a < b);
console.log('maior ou igual: ', a >= b);
console.log('menor ou igual: ', a <= b);

//identidade Restrita
console.log('Identico', a=== b);
console.log('Não identico', a !== b );

//logicos
let x: boolean = true;
let y: boolean = false;

console.log('AND', x && y);
console.log('OR', x || y);
console.log('NOT', !x);

//operador condicional
let idade: number = 17;
let acesso = idade >= 18 ? 'Permitido beijar na boca' : 'Não permitido'
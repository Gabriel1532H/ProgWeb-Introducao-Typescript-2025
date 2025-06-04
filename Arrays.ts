// === Arrays e Métodos de Manipulação

let notas: number[] = [6, 7.5, 8, 5];

//forEach
notas.forEach(n => console.log("Notas: ", n)); //iterar sobre elementos de uma coleção

//map
//criar um novo array com os resultados da chamada de uma função fornecida
let notasAjustadas = notas.map(n => n + 0.5);

//filter
//criar um novo array contendo somente elementos que atendem uma condição especifica
let aprovados = notas.filter(n => n >= 6);

//push e pop
notas.push(10); //adiciona um elemento no final do array
notas.pop(); //remover um elemento do final do array
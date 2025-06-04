// === FUNÇÕES ===

// Função tradicional
function saudacao(nome: string): string {
    return `Olá, ${nome}`
}

console.log(saudacao('camila'))

//Arrow function
const soma = (x: number, y: number): number => x + y;
console.log('Soma: ', soma(2,3))

//Função com valor padrão
function mensagem(texto: string = 'Bem vindo(a)!'){
    console.log(texto);
}

//Função parâmetro opcional
function apresentar(nome?: string){
    if(nome){
        console.log(`Olá, ${nome}`)
    }
    else{
        console.log('Olá, visitante')
    }
}
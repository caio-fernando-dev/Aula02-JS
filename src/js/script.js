//  declarações

let nome = "Caio Fernando"
const idade = 33
let altura = 1.70
let estudante = true

console.log("nome: ", nome, "- tipo: ", typeof nome)
console.log("idade: ", idade, "- tipo: ", typeof idade)
console.log("altura: ", altura, "- tipo: ", typeof altura)
console.log("estudante: ", estudante, "- tipo: ", typeof estudante)



// Métodos de exibição

// alert("Bem vindo ao sistema")

// let nomeUsuario = prompt("Qual o nome do usuáro?")
// // `${}` = concatenação
// console.log(`Olá, ${nomeUsuario}`)

// let desejaContinar = confirm("Deseja Realmente Continuar?")
// console.log("Resposta: ", desejaContinar)


// Operadores (Aritméticos, comparação e lógicos)
// -> Aritmeticos
console.log("")

let soma = 10 + 5;
console.log("soma: ", soma);

let multiplicacao = 4 * 2;
console.log("multiplicacao: ", multiplicacao);

let subtracao = 10 - 5;
console.log("subtracao: ", subtracao);

let resto = 10 % 3;
console.log("resto: ", resto);

let divisao = 5 / 3;
console.log("divisao: ", divisao)


// -> Comparação
console.log("")

let a = 10;
let b = "10";

// = ->  atribuição
// == -> compara valor
// === -> compara valor e tipo

console.log("a = 10")
console.log("b = '10'")

console.log("a == b? ", a == b)
console.log("a === b?", a === b)

console.log("a > b? ", a > b)
console.log("a >= b? ", a >= b)

console.log("a != b?", a != b)

console.log("(a + b) && (a - b)", (a + b) && (a - b))
console.log("(a < b) && (a > b)", (a < b) && (a > b))
console.log("(a > 20) || (b >= a)", (a > 20) || (b >= a))

console.log("")

let temIdade = 18;
let habilitacao = true;
let dirigir = (temIdade >= 18) && habilitacao;
console.log("O usuário pode dirigir?", dirigir)


// Estrutura condicional
// if
// if else
// if encadeado
// switch
// ternário

// if
console.log("")
console.log("if")
if (true){
    console.log("Verdadeiro")
}

// if else
console.log("")
console.log("if else")
if (true) {
    console.log("Verdadeiro")
} else {
    console.log("Falso")
}


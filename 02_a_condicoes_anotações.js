// Introdução à Lógica de Programação com JavaScript
// Marco André Mendes <marco.mendes@ifc.edu.br>
// Estruturas de decisão

// Condicional if
console.log("Estruturas de Decisão")
let numero

numero = 4
if (numero % 2 == 0) {
    console.log(`${numero} é par.`)
}

// Declaração if...else
numero = 3
if (numero % 2 == 0) {
    console.log(`${numero} é par.`)
} else {
    console.log(`${numero} é ímpar.`)
}

// operadores lógicos
6 > 3
3 > 7
4 < 8
4 >= 4
4 !== 5
4 === 4
4 === 5

// == significa comparação de igualdade
// = significa atribuição
if (5 === 5) console.log("Condição verdadeira")

if (true) console.log("Condição verdadeira")

// Atenção com a sintaxe
// if 4 > 3
//   console.log("Tudo funciona!")

// Atenção com a sintaxe
if (4 > 3) console.log("Tudo funciona!")

// Atenção com a sintaxe
if (4 > 3) {
    console.log("Tudo funciona!")
}

// Condicionais Aninhados
let idade
idade = 18
if (idade > 17) console.log("Você pode dirigir!")

let nome
idade = 18
nome = "Bob"
if (idade > 13)
    if (nome === "Bob") console.log("Ok Bob, você está autorizado a entrar!")
    else console.log("Desculpe, mas você não pode entrar!")
else console.log("Você ainda é muito novo!")

//else - if
let dia
dia = "Domingo"
if (dia == "Segunda") {
    console.log("Hoje fará sol!")
} else if (dia == "Terça") {
    console.log("Hoje vai chover!")
} else if (dia == "Quarta") {
    console.log("Hoje ficará nublado!")
} else if (dia == "Quinta") {
    console.log("Hoje vem uma frente fria!")
} else if (dia == "Sexta") {
    console.log("Hoje será um dia quente e úmido!")
} else {
    console.log("Não temos previsão para esse dia!")
}

// Operadores Lógicos

idade = 18
if (idade > 17) console.log("Você pode dirigir!")

idade = 18
nome = "Bob"
if (idade > 17 && nome == "Bob") console.log("Autorizado!")

// Usando mais de uma condição na cláusula if

let frequencia
let nota_final

frequencia = 70
nota_final = 9

if (frequencia >= 75 && nota_final >= 7) {
    console.log("Você foi aprovado!")
} else {
    console.log("Lamento, acho que você precisa estudar mais!")
}

// Usando template strings
frequencia = 75
nota_final = 9.5

if (frequencia >= 75 && nota_final >= 7) {
    console.log(
        `Você foi aprovado! com ${frequencia}% de frequência e nota final ${nota_final}`
    )
} else {
    console.log("Lamento, acho que você precisa estudar mais!")
}

// Fim

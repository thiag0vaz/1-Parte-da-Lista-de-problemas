//14°) Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.

import { question } from 'readline-sync'

//Entrada 
const nota1 = Number(question('Valor da nota 1: '))
const nota2= Number(question('Valor da nota 2: '))
const nota3 = Number(question('Valor da nota 3: '))
const peso1 = Number(question('Valor do peso da nota 1: '))
const peso2 = Number(question('Valor do peso da nota 2: '))
const peso3 = Number(question('Valor do peso da nota 3: '))

//Processamento 
const ponderada = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3)

//Saída
console.log(ponderada, 'é a média ponderada')
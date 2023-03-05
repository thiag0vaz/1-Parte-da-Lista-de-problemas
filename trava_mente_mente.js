//8°) Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.

import { question } from 'readline-sync'

//Entrada
const num1 = Number(question('Número 1: '))
const num2 = Number(question('Número 2: '))

//Processamento 
const soma = num1 + num2
const subt = num1 - num2
const divi = soma / subt

//Saída 
console.log('a divisão resultante é', divi)
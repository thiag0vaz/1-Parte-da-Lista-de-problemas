//10°) Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1º pelo 2º.

import { question } from 'readline-sync'

//Entrada 
const x = Number(question('Número 1: '))
const y = Number(question('Número 2: '))

//Processamento 
const quociente = Math.floor (x / y) 
const resto = x % y 

//Saída 
console.log('O quociente é', quociente, 'com resto', resto)
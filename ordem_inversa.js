//9°) Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).

import { question } from 'readline-sync'

//Entrada 
const nume1 = Number(question('Número 1: '))
const nume2 = Number(question('Número 2: '))

//Processamento 
const a = nume1
const b = nume2

//Saída 
console.log(b,'e', a)
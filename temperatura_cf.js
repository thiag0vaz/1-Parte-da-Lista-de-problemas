//20. Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)

import { question } from 'readline-sync'

//Entrada 
const tc = Number(question('valor da temperatura em C°: '))
const numerador = (9 * tc) + 160
const fixa = 5

//Processamento
const tf = numerador / fixa 

//Saída 
console.log(tc, 'graus celsius equivalem a', tf, 'graus fahrenheit')
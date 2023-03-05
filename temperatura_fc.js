//21. Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).

import { question } from 'readline-sync'

//Entrada 
const tf = Number(question('valor em fahrenheit: '))
const numerador = (5 * tf) - 160 
const fixa = 9

//Processamneto 
const tc = numerador / fixa

//Saída 
console.log(tf, 'graus fahrenheit equivalem a', tc, 'graus celsius')
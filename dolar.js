//4°) Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$). (Dia 04/03/2023)

import { question } from 'readline-sync'

//Entrada 
const vdolar = 5.20 

//Processamento 
const dolar = Number(question('valor em dolar: '))
const real = dolar * vdolar 

//Saída 
console.log('o dolar equivale á', vdolar, 'reais e', dolar, 'dolares é equivalente a', real,'reais')
//13°) Leia um valor em real (R$), calcule e escreva 70% deste valor.

import { question } from 'readline-sync'

//Entrada 
const real = Number(question('valor em real: '))

//Processamento 
const porcentagem = real * 0.7

//Saída 
console.log('70% de', real, 'reais é', porcentagem)
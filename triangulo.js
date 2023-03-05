//15°) Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)

import { question } from 'readline-sync'

//Entrada 
const base = Number(question('valor da base: '))
const altura = Number(question('valor da altura: '))

//Processamneto 
const area = base * (altura / 2)

//Saída 
console.log('um triângulo com', base, 'cm de base e', altura, 'cm de altura, terá', area, 'cm² de area')
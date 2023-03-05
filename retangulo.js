//17°) Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)

import { question } from 'readline-sync'

//Entrada 
const base = Number(question('valor da base: '))
const altura = Number(question('valor do lado: '))

//Processamento 
const area = base * altura

//Saída 
console.log('O retangulo que possui a base de', base, 'cm e altura de', altura, 'cm, terá uma area de', area, 'cm²')
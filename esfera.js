//19°) Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14)

import { question } from 'readline-sync'

//Entrada 
const raio = Number(question('valor do raio: '))
const pi = 3.14  //aproximadamente 
const fracao = 4 / 3 

//Processamento 
const volume = Math.floor(fracao * pi * (raio * raio * raio))

//Saída
console.log('A esfera que possui', raio, 'cm de raio, possuirá aproximadamente', volume, 'cm³ de volume')
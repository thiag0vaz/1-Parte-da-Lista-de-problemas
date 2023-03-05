//18°) Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)

import { question } from 'readline-sync'

//Entrada 
const raio = Number(question('valor do raio: '))
const pi = 3.14  //aproximadamente
const fixa = 2

//Processamneto 
const comprimento = Math.floor(fixa * pi * raio) 

//Saída 
console.log('O comprimento da circunferencia que tem o raio de', raio, 'cm é aproximadamente', comprimento, 'cm')
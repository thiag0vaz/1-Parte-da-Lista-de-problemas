//11°) Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)

import { question } from 'readline-sync'

//Entrada 
const um = Number(question('Número 1: '))
const dois = Number(question('Número 2: '))
const tres = Number(question('Número 3: '))

//Processamento 
const a = um
const b = dois 
const c = tres
const d = tres
const e = dois 
const f = um

//Saída 
console.log('O inverso de ', a, b, c, 'é', d, e, f)
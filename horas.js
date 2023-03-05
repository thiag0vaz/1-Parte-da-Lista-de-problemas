//2°) Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.

import { question } from 'readline-sync'

//Entrada
const horas = Number(question('valor em horas: ')) 
const minutos = Number(question('valor em minutos: '))

//Processamento 
const resultado_minutos = (horas * 60) + minutos 

//Saída 
console.log(horas, 'horas somado a', minutos, 'minutos resultam em', resultado_minutos, 'minutos')
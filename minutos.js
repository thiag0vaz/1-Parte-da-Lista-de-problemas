//3°) Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.

import { question } from 'readline-sync'

//Entrada
const minutos = Number(question('valor em minutos: '))

//Processamento
const horas = Math.floor(minutos / 60)
const minutos_restantes = Math.floor(((minutos / 60) - horas) * 60)

//Saída
console.log(minutos, 'minutos resultam em', horas, 'hora e', minutos_restantes, 'minutos' )
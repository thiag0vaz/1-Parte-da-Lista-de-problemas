//22. Leia um valor em km, calcule e escreva o equivalente em m.

import { question } from 'readline-sync'

//Entrada 
const km = Number(question('valor em km: '))
const fixa = 1000

//Processamento 
const metros = km * fixa

//Saída
console.log(km, 'quilometros é respctivamente', metros, 'metros')
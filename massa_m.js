//23°) Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).

import { question } from 'readline-sync'

//Entrada
const kg = Number(question('valor em kg: '))
const fixa = 1000

//Processamento 
const gramas = kg * fixa 

//Saída 
console.log(kg, 'quilos equivalem a', gramas, 'gramas')
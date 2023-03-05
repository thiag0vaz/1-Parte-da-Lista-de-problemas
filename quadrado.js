//16°) Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado2)

import { question } from 'readline-sync'

//Entrada 
const lado = Number(question('valor do lado: '))

//Processamento 
const area = lado * lado 

//Saída 
console.log('Um quadrado que possui o lado de', lado, 'cm, possuirá a area de', area, 'cm²')
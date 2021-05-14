let num = [8, 1, 7, 4, 2, 9]
num.sort()

/*
console.log(Valores[0])
console.log(Valores[1])
console.log(Valores[2])
console.log(Valores[3])
console.log(Valores[4])
console.log(Valores[5])
*/

/*for(let i = 0; i <= num.length; i++) {    
    console.log(`O Array na posicao ${i} tem o valor ${num[i]}`)
}*/

for(let i in num) {
    console.log(`O Array na posicao ${i} tem o valor ${num[i]}`)
}


let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posicoes`)
console.log(`A ordem crescente de nossos vetores e ${num.sort()}`)
console.log(`O primeiro valor do vetor e ${num[0]}`)


let pos = num.indexOf(44)

if (pos == -1) {
    console.log(`O valor nao foi encontrado`)
} else {
    console.log(`O valor esta na posicao ${pos}`)
}

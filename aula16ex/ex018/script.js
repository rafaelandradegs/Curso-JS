let num = document.getElementById('numeroadd')
let lista = document.getElementById('btnadd')
let res = document.getElementById('res')
let valores =[]

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}

function addNumero() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} Adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor invalido ou já encontrado na lista.')
    }  
    num.value = ''
    num.focus()
}

function finalizar() {    
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {        
        let maior = valores [0]
        let menor = valores [0]
        let soma  = 0  
        let media = 0
        for(let i in valores) {
            soma += valores[i]
            media = soma / valores.length
            if(valores[i] > maior)
                maior = valores[i]
            if(valores[i] < menor) {
                menor = valores[i]
            }
        }
        res.innerHTML = ''
        res.innerHTML = `<p>Foram cadastrados ${valores.length} numeros.<p>` 
        res.innerHTML += `<p>O maior numero digitado foi ${maior}<p>`
        res.innerHTML += `<p>O menor numero digitado foi ${menor}<p>`
        res.innerHTML += `<p>Somando todos valores temos ${soma}<p>`
        res.innerHTML += `<p>A merdia dos valores digitados foi ${media}<p>`
    }   
    
}
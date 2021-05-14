function contar() {
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementsByClassName('res')[0]   
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {         
        alert('Impossivel fazer contagem sem todos campos preenchidos')
        res.innerText = '[ERROR] Deve conter valores nos campos'
    } else {
        res.innerHTML = `Contando: `
        if (Number(passo.value) == 0) {
            alert('Passo invalido! Considerando PASSO 1 ')
            passo.value = 1
        }
        if (Number(ini.value) < Number(fim.value)) {
            for (var i = Number(ini.value); i <= Number(fim.value); i += Number(passo.value)) {
                res.innerHTML += ` ${i} \u{1F449}`
            }            
        } else {
            for (var i = Number(ini.value); i >= Number(fim.value); i -= Number(passo.value)) {
                res.innerHTML += ` ${i} \u{1F449}`
            }            
        }
        res.innerHTML += `\u{1F3C1}`        
    }

}


//
function gerar() {
    var nt = document.getElementById('ntabuada')
    var resposta = document.getElementById('seltab')
    if(nt.value.length == 0) {
        alert('Impossivel gerar Tabuada sem um  numero.')
    } else {
        resposta.innerHTML = ''
        for(var i = 1; i <= 10; i++) {
            var item = document.createElement('option')
            item.text = `${nt.value} x ${i} = ${nt.value * i}`
            item.value = `resposta${i}`
            resposta.appendChild(item)
        }
    }
}
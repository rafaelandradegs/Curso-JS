function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()   
    msg.innerText = `Agora sao ${hora} horas.`
    if (hora < 12) {
        img.src = './public/manha.png'
        document.body.style.background = '#e2cd9f'
        //bom dia
    } else if (hora <= 18) {
        document.body.style.background = '#b9846f'
        img.src = './public/tarde.png'
        //boa tarde 
    } else {
        document.body.style.background = '#515154'
        img.src = './public/noite.png'
        //boa noite
    }
}
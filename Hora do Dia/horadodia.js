function carregar(){
    var msg = document.getElementById ('mensagem')
    var img = document.getElementById ('imagem')
    var data = new Date ()
    var hora = data.getHours ()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos!`

    if (hora >=0 && hora < 12) {
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <18) {
        img.src = 'fototarde.jpg'
        document.body.style.background = '#b9864f'
    } else {
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#515154'
    }



}




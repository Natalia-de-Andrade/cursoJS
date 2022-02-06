function carregar() {
    var msg = window.document.querySelector('#msg')
    var img = window.document.querySelector('#imagem')
    var data = new Date()
    //var hora = 10
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`
    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src= 'fotomanha.png'
        document.body.style.background = '#F2D785'
    }else if (hora >= 12 && hora <= 18) {
        //Boa Tarde!
        img.src = 'fototarde.png'
        document.body.style.background ='#D99E91'
    }else {
        //Boa Noite!
        img.src = 'fotonoite.png'
        document.body.style.background = '#024059'
    }
}

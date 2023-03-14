function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    if (hora >= 0 && hora <12) {
        //bom dia!
        img.src = 'manha.jpg'  
        document.body.style.background= 'blue'
    } else if (hora >=12 && hora <= 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = "yellow"
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = 'black'
    }
}
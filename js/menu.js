var btnIcon = document.getElementById('btnIcon')
var btnVoltar = document.getElementById('btnVoltar')
var btnSobreMim = document.getElementById('btnSobreMim')
var btnContato = document.getElementById('btnContato')
var btnHabilidades = document.getElementById('btnHabilidades')

btnIcon.onclick = function(){
    var menu = document.getElementById('menu')
    menu.style.left = '0px'
}
btnVoltar.onclick = function(){
    var menu = document.getElementById('menu')
    menu.style.left = '-300px'
}
btnSobreMim.onclick = function(){
    var SobreMim = document.getElementById('SobreMim')
    var Contato = document.getElementById('Contato')
    var Habilidades = document.getElementById('Habilidades')
    var menu = document.getElementById('menu')
    var Titulo = document.getElementById('Titulo')
    Titulo.innerHTML = '<h2>Sobre mim</h2>'
    Contato.style.display = 'none'
    Habilidades.style.display = 'none'
    SobreMim.style.display = 'inline'
    menu.style.left = '-300px'
}
btnContato.onclick = function(){
    var SobreMim = document.getElementById('SobreMim')
    var Contato = document.getElementById('Contato')
    var Habilidades = document.getElementById('Habilidades')
    var menu = document.getElementById('menu')
    var Titulo = document.getElementById('Titulo')
    Titulo.innerHTML = '<h2>Contato</h2>'
    Contato.style.display = 'inline'
    Habilidades.style.display = 'none'
    SobreMim.style.display = 'none'
    menu.style.left = '-300px'
}
btnHabilidades.onclick = function(){
    var SobreMim = document.getElementById('SobreMim')
    var Contato = document.getElementById('Contato')
    var Habilidades = document.getElementById('Habilidades')
    var menu = document.getElementById('menu')
    var Titulo = document.getElementById('Titulo')
    Titulo.innerHTML = '<h2>Habilidades</h2>'
    Habilidades.style.display = 'inline'
    Contato.style.display = 'none'
    SobreMim.style.display = 'none'
    menu.style.left = '-300px'
}
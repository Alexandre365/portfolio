var btnIcon = document.getElementById('btnIcon')
var btnVoltar = document.getElementById('btnVoltar')
var btnSobreMim = document.getElementById('btnSobreMim')
var btnContato = document.getElementById('btnContato')
var btnHabilidades = document.getElementById('btnHabilidades')
var btnProjetos = document.getElementById('btnProjetos')
var btnCertificados = document.getElementById('btnCertificados')

document.body.onload = function(){
  var btnVoltar2 = document.getElementById('btnVoltar2')
    if (x.matches) { // If media query matches
        menu.style.left = '-300px'
      } else {
        btnVoltar2.style.display = 'none'
        menu.style.left = '0px'
      }
}
var x = window.matchMedia("(max-width: 1000px)")

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
    var Projetos = document.getElementById('Projetos')
    var btnCarrouseProjetos = document.getElementById('btnCarrouseProjetos')
    var Certificados = document.getElementById('Certificados')
    var OsCertificados = document.getElementById('OsCertificados')
    var menu = document.getElementById('menu')
    var Titulo = document.getElementById('Titulo')
    Titulo.innerHTML = '<h2>Sobre mim</h2>'
    Certificados.style.display = 'none'
    OsCertificados.style.display = 'none'
    Projetos.style.display = 'none'
    btnCarrouseProjetos.style.display = 'none'
    Contato.style.display = 'none'
    Habilidades.style.display = 'none'
    SobreMim.style.display = 'inline'

    if (x.matches) { // If media query matches
        menu.style.left = '-300px'
      } else {
        menu.style.left = '0px'
        btnVoltar.style.display = 'none'
      }
}
btnContato.onclick = function(){
    var SobreMim = document.getElementById('SobreMim')
    var Contato = document.getElementById('Contato')
    var Habilidades = document.getElementById('Habilidades')
    var Projetos = document.getElementById('Projetos')
    var btnCarrouseProjetos = document.getElementById('btnCarrouseProjetos')
    var Certificados = document.getElementById('Certificados')
    var OsCertificados = document.getElementById('OsCertificados')
    var menu = document.getElementById('menu')
    var Titulo = document.getElementById('Titulo')
    Titulo.innerHTML = '<h2>Contato</h2>'
    Certificados.style.display = 'none'
    OsCertificados.style.display = 'none'
    Projetos.style.display = 'none'
    btnCarrouseProjetos.style.display = 'none'
    Contato.style.display = 'inline'
    Habilidades.style.display = 'none'
    SobreMim.style.display = 'none'
    if (x.matches) { // If media query matches
        menu.style.left = '-300px'
      } else {
        menu.style.left = '0px'
        btnVoltar.style.display = 'none'
      }
}
btnHabilidades.onclick = function(){
    var SobreMim = document.getElementById('SobreMim')
    var Contato = document.getElementById('Contato')
    var Habilidades = document.getElementById('Habilidades')
    var Projetos = document.getElementById('Projetos')
    var btnCarrouseProjetos = document.getElementById('btnCarrouseProjetos')
    var Certificados = document.getElementById('Certificados')
    var OsCertificados = document.getElementById('OsCertificados')
    var menu = document.getElementById('menu')
    var Titulo = document.getElementById('Titulo')
    Titulo.innerHTML = '<h2>Habilidades</h2>'
    Certificados.style.display = 'none'
    OsCertificados.style.display = 'none'
    Projetos.style.display = 'none'
    btnCarrouseProjetos.style.display = 'none'
    Habilidades.style.display = 'inline'
    Contato.style.display = 'none'
    SobreMim.style.display = 'none'
    if (x.matches) { // If media query matches
        menu.style.left = '-300px'
      } else {
        menu.style.left = '0px'
        btnVoltar.style.display = 'none'
      }
}
btnProjetos.onclick = function(){
    var SobreMim = document.getElementById('SobreMim')
    var Contato = document.getElementById('Contato')
    var Habilidades = document.getElementById('Habilidades')
    var Projetos = document.getElementById('Projetos')
    var btnCarrouseProjetos = document.getElementById('btnCarrouseProjetos')
    var Certificados = document.getElementById('Certificados')
    var OsCertificados = document.getElementById('OsCertificados')
    var menu = document.getElementById('menu')
    var Titulo = document.getElementById('Titulo')
    Titulo.innerHTML = '<h2>Projetos</h2>'
    btnCarrouseProjetos.style.display = 'inline'
    Projetos.style.display = 'inline'
    OsCertificados.style.display = 'none'
    Certificados.style.display = 'none'
    Habilidades.style.display = 'none'
    Contato.style.display = 'none'
    SobreMim.style.display = 'none'
    if (x.matches) { // If media query matches
        menu.style.left = '-300px'
      } else {
        menu.style.left = '0px'
        btnVoltar.style.display = 'none'
      }
}
btnCertificados.onclick = function(){
    var SobreMim = document.getElementById('SobreMim')
    var Contato = document.getElementById('Contato')
    var Habilidades = document.getElementById('Habilidades')
    var Projetos = document.getElementById('Projetos')
    var btnCarrouseProjetos = document.getElementById('btnCarrouseProjetos')
    var Certificados = document.getElementById('Certificados')
    var OsCertificados = document.getElementById('OsCertificados')
    var menu = document.getElementById('menu')
    var Titulo = document.getElementById('Titulo')
    Titulo.innerHTML = '<h2>Certificados</h2>'
    Certificados.style.display = 'inline'
    OsCertificados.style.display = 'inline'
    btnCarrouseProjetos.style.display = 'none'
    Projetos.style.display = 'none'
    Habilidades.style.display = 'none'
    Contato.style.display = 'none'
    SobreMim.style.display = 'none'
    if (x.matches) { // If media query matches
        menu.style.left = '-300px'
      } else {
        menu.style.left = '0px'
        btnVoltar.style.display = 'none'
      }
}
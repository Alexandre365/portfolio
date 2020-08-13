var btnIcon = document.getElementById('btnIcon')
var menu = document.getElementById('menu')
var btnVoltar = document.getElementById('btnVoltar')

btnIcon.onclick = function(){
    menu.style.left = '0px'
}
btnVoltar.onclick = function(){
    menu.style.left = '-300px'
}
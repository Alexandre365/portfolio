var btnSobre = document.getElementById('btnSobre')
var btnContato = document.getElementById('btnContato')
var btnHabilidade = document.getElementById('btnHabilidade')
var btnRight = document.getElementById('btnRight')
var btnLeft = document.getElementById('btnLeft')

var contContato = document.getElementById('contContato')
var contSobre = document.getElementById('contSobre')
var contHabilidade = document.getElementById('contHabilidade')

var certificadoWord = document.getElementById('certificadoWord')
var certificadoExcel = document.getElementById('certificadoExcel')
var certificadoHtml = document.getElementById('certificadoHtml')
var certificadoData = document.getElementById('certificadoData')

var btnVoltarCertificado = document.getElementById('btnVoltarCertificado')
var txtCertificado = ['img/certificados/certificado do word b+ísico.png','img/certificados/certificado Excel b+ísico.png','img/certificados/certificado Html A+ançado.jpg','img/certificados/Certificado senac Data Cabling System.jpg']
var NumCert 

btnSobre.addEventListener('click', clicarSobre)
btnContato.addEventListener('click', clicarContato)
btnHabilidade.addEventListener('click', clicarHabelidade)


btnRight.addEventListener('mouseover',mouseBtnRight)
btnRight.addEventListener('mouseout',mouseBtnRightn)
btnLeft.addEventListener('mouseover',mouseBtnLeft)
btnLeft.addEventListener('mouseout',mouseBtnLeftn)


/* conteudo meu */
function clicarSobre(params) {
    contContato.style.display = 'none'
    contSobre.style.display = 'inline-block'
    contHabilidade.style.display = 'none'

    btnSobre.style.background = '#FFAF29'
    btnSobre.style.padding = '20px 125px 20px 125px'

    btnContato.style.background = '#2C304A'
    btnSobre.style.padding = '20px 110px 20px 110px'

    btnHabilidade.style.background = '#2C304A'
    btnHabilidade.style.padding = '20px 110px 20px 110px'
}

function clicarContato(params) {
    contContato.style.display = 'inline-block'
    contSobre.style.display = 'none'
    contHabilidade.style.display = 'none'

    btnSobre.style.background = '#2C304A'
    btnSobre.style.padding = '20px 110px 20px 110px'

    btnContato.style.background = '#FFAF29'
    btnContato.style.padding = '20px 125px 20px 125px'

    btnHabilidade.style.background = '#2C304A'
    btnHabilidade.style.padding = '20px 110px 20px 110px'
}

function clicarHabelidade() {
    contContato.style.display = 'none'
    contSobre.style.display = 'none'
    contHabilidade.style.display = 'inline-block'
    contHabilidade.style.padding = '0px 0px 350px 0px'

    btnSobre.style.background = '#2C304A'
    btnSobre.style.padding = '20px 110px 20px 110px'

    btnContato.style.background = '#2C304A'
    btnContato.style.padding = '20px 125px 20px 125px'

    btnHabilidade.style.background = '#FFAF29'
    btnHabilidade.style.padding = '20px 110px 20px 110px'

}
/* botões do carousel*/

/*direito*/

function mouseBtnRight() {
    btnRight.style.background = '#FFAF29'
}
function mouseBtnRightn() {
    btnRight.style.background = '#2F3553'
}

/*esquerdo */
function mouseBtnLeft() {
    btnLeft.style.background = '#FFAF29'
}
function mouseBtnLeftn() {
    btnLeft.style.background = '#2F3553'
}

// certificados 
btnVoltarCertificado.onclick = function(){
    var imgCertificados = document.getElementById('imgCertificados')
    imgCertificados.style.display = 'none'
}

certificadoWord.onclick = function(){
    var imgCertificados = document.getElementById('imgCertificados')
    imgCertificados.style.display = 'inline'
    NumCert = 0
    ImgCertificado()
}
certificadoExcel.onclick = function(){
    var imgCertificados = document.getElementById('imgCertificados')
    imgCertificados.style.display = 'inline'
    NumCert = 1
    ImgCertificado()
}
certificadoHtml.onclick = function(){
    var imgCertificados = document.getElementById('imgCertificados')
    imgCertificados.style.display = 'inline'
    NumCert = 2
    ImgCertificado()
}
certificadoData.onclick = function(){
    var imgCertificados = document.getElementById('imgCertificados')
    imgCertificados.style.display = 'inline'
    NumCert = 3
    ImgCertificado()
}

function ImgCertificado(){
    var ImgGCertificado = document.getElementById('ImgGCertificado')
    ImgGCertificado.setAttribute('src',`${txtCertificado[NumCert]}`)
}
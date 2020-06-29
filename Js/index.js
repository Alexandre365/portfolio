var btnSobre = document.getElementById('btnSobre')
var btnContato = document.getElementById('btnContato')
var btnHabilidade = document.getElementById('btnHabilidade')

var contContato = document.getElementById('contContato')
var contSobre = document.getElementById('contSobre')
var contHabilidade = document.getElementById('contHabilidade')

btnSobre.addEventListener('click', clicarSobre)
btnContato.addEventListener('click', clicarContato)
btnHabilidade.addEventListener('click', clicarHabelidade)


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


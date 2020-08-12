var btnSobre = document.getElementById('btnSobre')
var btnContato = document.getElementById('btnContato')
var btnHabilidade = document.getElementById('btnHabilidade')
var btnRight = document.getElementById('btnRight')
var btnLeft = document.getElementById('btnLeft')
var btnCarrega = document.getElementById('btnCarrega')

var contContato = document.getElementById('contContato')
var contSobre = document.getElementById('contSobre')
var contHabilidade = document.getElementById('contHabilidade')

var LinkProjetoWeb = document.getElementById('LinkProjetoWeb')
var LinkProjetoLolium = document.getElementById('LinkProjetoLolium')
var LinkProjetoNerdRespon = document.getElementById('LinkProjetoNerdRespon')
LinkProjetoWeb.onclick = function(){
    location.href = 'https://github.com/Alexandre365/Site-de-not-cias-nerd-'
}
LinkProjetoLolium.onclick = function(){
   
    location.href = 'https://github.com/thiagopinho/Lolium---App'
}
LinkProjetoNerdRespon.onclick = function(){
    location.href = 'https://github.com/Alexandre365/Site_musica_responsivo'
}

btnSobre.onclick = function(){
    var contMeu = document.getElementById('contMeu')
    contMeu.style.height ='450px'
    
    
    contContato.style.display = 'none'
    contHabilidade.style.display = 'none'

    btnSobre.style.background = '#FFAF29'
    btnSobre.style.padding = '20px 125px 20px 125px'

    btnContato.style.background = '#2C304A'
    btnSobre.style.padding = '20px 110px 20px 110px'

    btnHabilidade.style.background = '#2C304A'
    btnHabilidade.style.padding = '20px 110px 20px 110px'

    setTimeout(() => {
        contSobre.style.display = 'inline-block'
    }, 250);
}
btnContato.onclick = function(){
    var contMeu = document.getElementById('contMeu')
    contMeu.style.height ='300px'

    contSobre.style.display = 'none'
    contHabilidade.style.display = 'none'

    btnSobre.style.background = '#2C304A'
    btnSobre.style.padding = '20px 110px 20px 110px'

    btnContato.style.background = '#FFAF29'
    btnContato.style.padding = '20px 125px 20px 125px'

    btnHabilidade.style.background = '#2C304A'
    btnHabilidade.style.padding = '20px 110px 20px 110px'

    setTimeout(() => {
        contContato.style.display = 'inline-block'
    }, 250);
}
btnHabilidade.onclick = function(){
    var contMeu = document.getElementById('contMeu');
    contMeu.style.height ='550px';

    contContato.style.display = 'none';
    contSobre.style.display = 'none';

    contHabilidade.style.padding = '0px 0px 350px 0px'

    btnSobre.style.background = '#2C304A'
    btnSobre.style.padding = '20px 110px 20px 110px'

    btnContato.style.background = '#2C304A'
    btnContato.style.padding = '20px 125px 20px 125px'

    btnHabilidade.style.background = '#FFAF29'
    btnHabilidade.style.padding = '20px 110px 20px 110px'

    setTimeout(() => {
        contHabilidade.style.display = 'inline-block'
    },390);
}


btnRight.addEventListener('mouseover',mouseBtnRight)
btnRight.addEventListener('mouseout',mouseBtnRightn)
btnLeft.addEventListener('mouseover',mouseBtnLeft)
btnLeft.addEventListener('mouseout',mouseBtnLeftn)



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


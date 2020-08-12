const Certificados = [
    {
        id: 'certificadoEtecTds',
        img:'img/ETEC.jpg',
        curso:'Curso técnico:<p>Desenvolvimento de sistemas.</p>',
        Instituição:'<p>ETEC Professor Aprígio Gonzaga.</p>'
    },
    {
        id: 'certificadoAlemão',
        img:'img/cel-centro-de-linguas.jpg',
        curso:'Curso:<p>Alemão.</p>',
        Instituição:'<p>E. E. Nossa Senhora da Penha.</p>'
    },
    {
        id: 'certificadoData',
        img:'img/senac.jpg',
        curso:'Curso:<p>Data Cabling System.</p>',
        Instituição:'<p>SENAC Osasco.</p>'
    },
    {
        id: 'certificadoHtml',
        img:'img/bradesco.jpg',
        curso:'Curso:<p>HTML Avançado.</p>',
        Instituição:'<p>Fundação Bradesco.</p> '
    },
    {
        id: 'certificadoExcel',
        img:'img/bradesco.jpg',
        curso:'Curso:<p>EXCEL Básico.</p>',
        Instituição:'<p>Fundação Bradesco.</p> '
    },
    {
        id: 'certificadoWord',
        img:'img/bradesco.jpg',
        curso:'Curso:<p>WORD Básico.</p>',
        Instituição:'<p>Fundação Bradesco.</p>'
    },
    {
        id: 'certificadoSixSigma',
        img:'img/logo-bem-pequeno-150px.jpg',
        curso:'Curso:<p>Lean Six-Sigma.</p>',
        Instituição:'<p>EDTI.</p>'
    },
]

inicializarCertificados = () => {
    var gridcontainer = document.getElementById('gridcontainer')
    Certificados.map((val) =>{
        gridcontainer.innerHTML += `
        
        <div class="grid-item" id="${val.id}">
                    <img src="${val.img}"  width="250" height="150">
                    <h2>
                        ${val.curso}
                    </h2>
                    <h2>
                        Instituição:${val.Instituição}
                    </h2>
                    <h2>Click para verificar certificado</h2>
            </div>

        `
    })
}

inicializarCertificados();

var certificadoData = document.getElementById("certificadoData")
var certificadoHtml = document.getElementById('certificadoHtml')
var certificadoExcel = document.getElementById('certificadoExcel')
var certificadoWord = document.getElementById('certificadoWord')
var certificadoSixSigma = document.getElementById('certificadoSixSigma')
var btnCertVoltar = document.getElementById('btnCertVoltar')

btnCertVoltar.onclick = function () {
    var imgCertificado = document.getElementById('imgCertificado')
    var certImg = document.getElementById('certImg')
    imgCertificado.style.display = 'none'
    certImg.style.display = 'none'
    btnCertVoltar.style.display = 'none'
}

certificadoData.onclick = function(){
    var imgCertificado = document.getElementById('imgCertificado')
    var certImg = document.getElementById('certImg')
    imgCertificado.style.display = 'inline'
    btnCertVoltar.style.display = 'inline'
    certImg.style.display = 'inline'
    certImg.setAttribute('src','img/certificados/Certificado senac Data Cabling System.jpg')
    
}
certificadoHtml.onclick = function(){
    var imgCertificado = document.getElementById('imgCertificado')
    var certImg = document.getElementById('certImg')
    imgCertificado.style.display = 'inline'
    btnCertVoltar.style.display = 'inline'
    certImg.style.display = 'inline'
    certImg.setAttribute('src','img/certificados/certificado Html A+ançado.jpg')
}
certificadoExcel.onclick = function(){
    var imgCertificado = document.getElementById('imgCertificado')
    var certImg = document.getElementById('certImg')
    imgCertificado.style.display = 'inline'
    btnCertVoltar.style.display = 'inline'
    certImg.style.display = 'inline'
    certImg.setAttribute('src','img/certificados/certificado Excel b+ísico.png')
}
certificadoWord.onclick = function(){
    var imgCertificado = document.getElementById('imgCertificado')
    var certImg = document.getElementById('certImg')
    imgCertificado.style.display = 'inline'
    btnCertVoltar.style.display = 'inline'
    certImg.style.display = 'inline'
    certImg.setAttribute('src','img/certificados/certificado do word b+ísico.png')
}
certificadoSixSigma.onclick = function(){
    var imgCertificado = document.getElementById('imgCertificado')
    var certImg = document.getElementById('certImg')
    imgCertificado.style.display = 'inline'
    btnCertVoltar.style.display = 'inline'
    certImg.style.display = 'inline'
    certImg.setAttribute('src','img/certificados/thumbnail.png')
}

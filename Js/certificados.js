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
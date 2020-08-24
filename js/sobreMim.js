var ano = new Date();
var dados = document.getElementById('dados')
var FormaçãoAcadêmica = document.getElementById('FormaçãoAcadêmica')
var formaçãoComplementar = document.getElementById('formaçãoComplementar')
var x = window.matchMedia("(max-width: 1000px)")

/*document.body.onload = function(){
    if (x.matches) { // If media query matches
        menu.style.left = '-300px'
      } else {
        menu.style.left = '0px'
        btnVoltar.style.display = 'none'
      }
}*/
if(x.matches){
    dados.innerHTML = 
    `
        <h2> Datos:
            <b>Nome:<p>Alexandre Moreira Ribeiro.</p></b>
            <b>Idade:<p>${ano.getFullYear() - 1999 } Anos.</p></b>
            <b>Endereço:<p>R. Mandaguaí, Vila Ré.</p></b>
        </h2>
    `
} else{
    dados.innerHTML = 
    `   
        <div class="Nome"><p>ALEXANDRE <b>RIBEIRO</b></p></div>
        <div class="Idade"><p>21 Anos -</p></div>
        <div class="Rua"><p>R. Mandaguaí, Vila Ré.</p></div>
    `
}
FormaçãoAcadêmica.innerHTML = 
`
    <b>Ensino médio:<p>Completo.</p></b>
    <b>Técnico: <p>Desenvolvimento de sistemas.</p></b>

`
formaçãoComplementar.innerHTML = 
`
    <b>Curso:<p>Data Cabling System.</p></b>
    <b>Curso:<p>HTML Avançado. </p></b>
    <b>Curso:<p>HTML Básico.</p></b>
    <b>Curso:<p>EXCEL Básico. </p></b>
    <b>Curso:<p>WORD Básico.</p></b>
`
/*

*/
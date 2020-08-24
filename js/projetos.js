var Slide1 = document.getElementById('Slide1')
var slide2 = document.getElementById('slide2')
var slide1 = document.getElementById('slide3')
var x = window.matchMedia("(max-width: 1000px)")

 function Projetos(){
    if(x.matches){
        Slide1.setAttribute ('src','/img/imgSmart/site_nerd.jpg');
        slide2.setAttribute ('src','/img/imgSmart/Ionic_musica.jpg');
        slide3.setAttribute ('src','/img/imgSmart/site_nerd_respon.jpg');
    }else{
        Slide1.setAttribute ('src','/img/imgPc/site_nerd.jpg');
        slide2.setAttribute ('src','/img/imgPc/Ionic_musica.jpg');
        slide3.setAttribute ('src','/img/imgPc/site_nerd_respon.jpg');
    }
}
Projetos();
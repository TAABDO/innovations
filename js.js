var sliders = document.querySelector('.img-hero-about');
var herossliders = ['.left-hero','.meddle-hero','.right-hero'];
var i = 0;
function previous(){
    if(i <= 0) i = herossliders.length;
    i--;
    return  setheros();
}
function next(){
    if(i >= herossliders.length-1) i = -1;
    i++;
    return  setheros();
}
function setheros(){
 return sliders.setAttribute('src','herosliders'+herossliders[i]);
}
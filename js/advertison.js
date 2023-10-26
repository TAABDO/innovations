//popup
const openbtn=document.getElementById('openmodal');
const modal=document.getElementById('modal');
const closebtn=document.getElementById('closemodal');

openbtn.addEventListener('click',function(){
  modal.classList.add('open');
})
closebtn.addEventListener('click',function(){
  modal.classList.remove('open');
})

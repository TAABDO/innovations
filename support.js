
const forme = document.getElementById('form');
 const firstnam = document.getElementById('firstname');
const lastnam = document.getElementById('lastname');
const email = document.getElementById('email');
const textarea = document.getElementById('textarea-contcat');

const spanfirst = document.getElementById('form-span-first');
const spanlast = document.getElementById('form-span-last');
const spanemail = document.getElementById('form-span-email');
const spanerea = document.getElementById('form-span-textera');



 forme.addEventListener('submit',function(e){
        e.preventDefault();
        firstnameL();
        lastname();
        emaillform();
        textareaform()
 })

 

 function firstnameL() {
  let regex = /^[A-Za-z]{1,40}$/;
  if(firstnam.value.match(regex)){
    firstnam.style.border="2px solid green";
    spanfirst.style.display="none";
    
  }else{
    firstnam.style.border="2px solid red";
    spanfirst.style.display="block";
    spanfirst.style.color="red";

  }
 }

 function lastname() {
  let regex = /^[A-Za-z]{1,40}$/;
  if(lastnam.value.match(regex)){
    lastnam.style.border="2px solid green";
    spanlast.style.display="none";
    
  }else{
    lastnam.style.border="2px solid red";
    spanlast.style.display="block";
    spanlast.style.color="red";

  }
 }
 
   function emaillform(){
    const pattern = /^[a-zA-Z_]+@(gmail|outlook)\.com$/;
    if(email.value.match(pattern)){
      email.style.border="2px solid green";
      spanemail.style.display="none";

    }else{
      email.style.border="2px solid red";
      spanemail.style.display="block";
      spanemail.style.color="red";

   }
  }

  
 function textareaform() {
  let regex = /^[A-Za-z]{1,400}$/;
  if(textarea.value.match(regex)){
    textarea.style.border="2px solid green";
    spanerea.style.display="none";
    
  }else{
    textarea.style.border="2px solid red";
    spanerea.style.display="block";
    spanerea.style.color="red";

  }
 }
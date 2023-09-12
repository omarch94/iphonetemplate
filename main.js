let phone=document.getElementById('img1');
let container=document.querySelector('.container')
let message=document.getElementById('msg')
function phones(x){
phone.src=x
}
/*
function colors(color){

container.style.background=color
}
*/
/*
// recuperation

let formu=document.getElementById("fiphone");
formu.addEventListener('submit',verifier);
function verifier(event){
// on recupere les inputs

let iNom=document.getElementsByName("name");
let iMail=document.getElementById("mail");
let iPhone=document.getElementById("phone");
let messageEr='';

event.preventDefault();
if(iNom == ''){
    messageEr+='le nom ne doit pas etre vide'
}
if (iMail ==''){
    messageEr+="l'email doit etre saisi"
}
if (iPhone==""){
    messageEr+="le numero de telephone doit etre saisi"
}

// on valide les champs
var regex = /^[A-Z][a-z]+$/;
if (regex.exec(iNom.value)){
    iNom.classList.remove('.invalid')
}else{
    iNom.classList.add('.invalid')
}

if(!iMail.includes('@')){
    iMail.classList.add(".invalid")
}else{
    iMail.classList.remove(".invalid")
}
var regex=/^[0-9]{3}[ -][0-9]{3}[ -][0-9]{3}$/
if(regex.exec(iPhone.value).length>1 && iPhone.value<10){
    iPhone.classList.remove('.invalid')
}else{
    iPhone.classList.add('.invalid')
}
afficherMessage(messageEr)
}
function afficherMessage(messageEr){
    // Effacer le message d'erreur précedent
    var span= document.formu.querySelector('span');
    if (span !=null ) span.remove();
    // En cas d'erreur 
    if (messageEr!=''){
        span=document.createElement('span');
        span.innerHTML= 'Erreur :' + messageEr.replaceAll('\n','<br>');
        span.style.color ='red';
        document.formulaire.appendChild(span);
    }
}
*/
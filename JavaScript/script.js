const btn = document.getElementById("btn");
const estilo = document.getElementsByClassName("container");
const message = document.getElementsByClassName("message__final");


 btn.onclick = function(){

    estilo[0].style.display = "none";
    message[0].style.display = "flex";
    
 }
   
 


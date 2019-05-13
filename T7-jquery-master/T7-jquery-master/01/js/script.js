//javascript

/*
 var lis = document.querySelectorAll('li');
 for(var i = 0; i < lis.length; i++){
     lis[i].textContent = "Batatinha";
 }

 let  btn = document.querySelectorAll('button');
 for(let i = 0; i < btn.length; i++){
     btn[i].textContent = "eita"; 
 }
 */

$(document).ready(function(){
   alert('Eita');
    //não precisa do content
 //busca por tags
$('li').text('Batata'); 
$('button').text('Eita'); 
$('div').text('nois'); 

//find é usado para procurar classes dentro de um lugar 
$('.lista1').find('.botao').text('outroteste');
$('.lista2').find('.botao').text('testinho');
})

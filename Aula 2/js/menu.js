$(document).ready(function(){

    $('li').click(function(){
        $(this).find('.menu2').slideToggle();
        $(this).siblings().find('.menu2').slideUp();
    });
    /* 
    $('li').hover(function(){
        //show ou slidedown
        $(this).find('.menu2').slideDown();
    },function(){
        //hide ou slideup
        $(this).find('.menu2').slideUp();
    }); 
    */
});
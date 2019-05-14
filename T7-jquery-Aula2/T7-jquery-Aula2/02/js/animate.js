

$(document).ready(function(){
    $("a").click(function(event){
        console.log(this.hash)
        if(this.hash !==""){
            let hash=this.hash;

            $('html, body').animate({
                scrollTop:$(hash).offset().top
            },800, function(){
                window.location.hash = hash; 
            });
        }
    })
});
 

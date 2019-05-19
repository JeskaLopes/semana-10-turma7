$(document).ready(function(){
    $('#animate').click(function(){
        $('#content').animate({"width":"60%", "height":"100%"}, "fast",
        //função callback
        function(){
            $(this).html('ACABEI');
        });
    });
});

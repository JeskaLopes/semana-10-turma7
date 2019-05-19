$(document).ready(function(){

    $('#btn-busca').click(function(e){
        e.preventDefault();
        $('.area-gif').html("");
        let valor = $('#campo-busca').val();
        /* url entre crase e usar a variavel direto com ${} */
            $.ajax({
                url:`https://api.giphy.com/v1/gifs/search?api_key=1eN6oYO21SJiPa8NR4Bnj2ZOqvTS7JGW&q=${valor}&limit=25&`,
                type:"GET",
                success:function(gifs){
                   let arrayDeGifs = gifs.data;
                   $(arrayDeGifs).each(function(){   
                    //para criar elementos no jquery chamamos a tag diretamente na variável
                    //com dois atributos, no caso-class=gif
                    const container = $ ('<div>').attr('class', 'gif')
                    let giphys= $('<img>').attr("src",this.images.fixed_width.url);
                    container.append(giphys);
                    //com o find, ele vai procurar area gif no exibe busca e colocar o append container ali
                   //$('.area-gif).append(giphys)
                    $('#exibe-busca').find('.area-gif').append(container);
                   });
                },
                error: function(req){
                    const errorImage = $("<img>").attr("src", `https://http.cat/${req.status}`);
                    $(".area-gif").append(errorImage);
                }
            });
        });
});
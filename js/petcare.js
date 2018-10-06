$(function(){

    $('.subir').hide();
    $('.marca').hide();

    $('a.subir').click(function () {
         $('body,html').animate({
           scrollTop: 0
         }, 800);
        return false;
    });

    $(window).scroll(function () {
              if($(window).scrollTop() + $(window).height() < $(document).height() - $("#footer").height()){

            $('.subir').fadeIn();
         } else {
            $('.subir').fadeOut();
         }
    
         if ($(this).scrollTop() > 200) {
            $('.navbar').css({'position':'fixed',
                              'min-height': '70px',
                              'padding-top': '10px',
                              'justify-content':'flex-end',
                              'opacity':'0.8'
        });
            $('header').css('display','none');
            $('.marca').css({'display':'block',
                            'position':'fixed',
                            'z-index':'1000'});
        } else {
            $('.navbar').css({'position':'relative',
                              'min-height': '50px',
                              'padding-top': '0px',
                              'justify-content':'center'
        });
            $('header').css('display','block');
            $('.marca').css({'display':'none',
                            'position':'fixed'});
         }
     });

    $(window).load(function(){
        $('img').on('click', function(){
            var src=$(this).attr('src');
            $('#model-img').attr('src',src);
            $('#joes').modal('show');
        });
    });

    $("#formComentario").validate(); 

});




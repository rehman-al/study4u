$(document).ready(function () {
    
        $(window).scroll(function(){
        if ($(window).scrollTop()) {
          
            $('nav').addClass('sticky')
        }
        else {

            $('nav').removeClass('sticky')
        }
    });
    // now we start the toggle menue-btn 
    $('.menu-btn').click(function(){
        $(".navbar .menue").toggleClass("active")
    })
     
}); 
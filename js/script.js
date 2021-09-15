$(document).ready(function(){


    $(window).on('load', function () {
        $('.loading-page').fadeOut(2000)
    })

    //scroll to section

    $('header ul li a').click(function(e){
        e.preventDefault();

        $('html,body').animate({
            scrollTop:$("#" + $(this).data('scroll')).offset().top
        },1000);
    });


    // button up


    $(window).scroll(function(){

        var sc = $(window).scrollTop();

        if(sc > 650){
            $('.up').fadeIn(1000);
        }else{
            $('.up').fadeOut(1000);
        }

        $('.up').on('click',function(){

            $('html,body').animate({
                scrollTop:0
            },500);
    
        })

    })

// owl carousel
    
$('.owl-carousel').owlCarousel({
    loop: true,
    center: true,
    autoplay: true,
    dots: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

// nice scroll

$("body").niceScroll({
    cursorcolor: "#7b5244",
    cursorwidth: "6px",
    cursorborder: "none",
    zindex: "9999"
});

})
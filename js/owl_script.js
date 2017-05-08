$(document).ready (function() {
  $('#logo').owlCarousel({
    loop:true,
    smartSpeed:1000,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:5
        }
    }
})
});


$(document).ready (function() {
  $('#owl-work').owlCarousel({
    loop:true,
    smartSpeed:1000,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:5
        }
    }
})
});

//quotes section
$(document).ready(function () {
  $('#customers').owlCarousel({
    loop:true,
    smartSpeed:1000,
    margin:10,
    nav:true,
    responsive: {
        0:{
            items: 1
        },
        600:{
            items: 1
        },
        1000:{
            items: 1
        },
        1200:{
            items: 1
        }
    }
})
});

//navbar transition
$(document).ready(function(){
    $(window).scroll(function){
       var location = $(this).scrollTop();
        if(location < 70) {
           $("nav").removeClass("transparent"); 
        }
        else {
           $("nav").addClass("transparent"); 
        }
    });
});
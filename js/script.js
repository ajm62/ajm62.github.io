//navbar transition
$(document).ready(function () {
    $(window).scroll(function () {
       var location = $(window).scrollTop();
        if (location < 70) {
           $("nav").removeClass("transparent"); 
        }
        else {
           $("nav").addClass("transparent"); 
        }
    });
});
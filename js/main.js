
/*----Preloader----*/
$(window).on("load",function(){
    $("preloader").fadeOut("");
});


$(document).ready(function(){

/*----Navbar----*/
$(window).on("scroll",function(){
	if($(this).scrollTop() > 90){
		$(".navbar").addClass("navbar-shrink");
	}else{
		$(".navbar").removeClass("navbar-shrink");
	}
});
/*-----------*/

/*-----navbar collapse------*/
$(".nav-link").on("click",function(){
    $(".navbar-collapse").collapse("hide");
});
/*----------------*/

/*-----owl features carousel------*/
$('.comentario-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})

/*-----Comentarios carousel------*/
$('.features-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})

/*-----scrollit js------*/
  $.scrollIt({
     scrollTime: 90,
     topOffset: -50
  });

/*-----Toggle tema claro - oscuro ------*/
function toggleTheme(){
    if (localStorage.getItem("shala-theme") !== null) {
        if (localStorage.getItem("shala-theme") === "dark") {
            $("body").addClass("dark");
        }else{
            $("body").removeClass("dark");
        }
    }
    updateIcon();
}
toggleTheme();
$(".toggle-tema").on("click",function(){
    $("body").toggleClass("dark");
    if($("body").hasClass("dark")){
        localStorage.setItem("shala-theme","dark");
    }else{
        localStorage.setItem("shala-theme","light");
    }
    updateIcon();
})

function updateIcon(){
    if ($("body").hasClass("dark")) {
        $(".toggle-tema i").removeClass("fa-moon");
        $(".toggle-tema i").addClass("fa-sun");
    }else{
        $(".toggle-tema i").removeClass("fa-sun");
        $(".toggle-tema i").addClass("fa-moon");
    }
}


});
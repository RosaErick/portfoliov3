
$(document).ready(function(){


$(window).on('load',function(){
  $('.preloader').addClass('complete')
});

$(window).on('scroll',function(){
  var scroll = $(window).scrollTop();
  console.log(scroll);
  if(scroll >=50){
    $(".sticky").addClass("stickyadd");
  }else{
    $(".sticky").removeClass("stickyadd");
  }
});




  var typed = new Typed(".element", {
  strings: ["Erick Rosa", "a Developer", "and", " a Historian"],
  smartBackspace: true,
   typeSpeed: 100,
   backSpeed: 100,
   loop: true,
  loopCount: Infinity,
  startDelay: 1000
  });
  
  var typed2 = new Typed(".elementTwo", {
    
  strings: ["I'm  ", ""],
  smartBackspace: true,
   typeSpeed: 110,
    backSpeed: 200,
   loop: true,
  loopCount: Infinity,
    startDelay: 1000,
    showCursor: false,
  
  })


$('a').smoothScroll({

  speed:2000,
});

});

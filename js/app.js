$(document).ready(function () {
  $(window).on("load", function () {
    $(".preloader").addClass("complete");
  });

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    console.log(scroll);

    if (scroll >= 0) {
      $(".sticky").removeClass("takeout");
    }
    if (scroll >= 850) {
      $(".sticky").addClass("takeout animated");
    }
    if (scroll >= 2900) {
      $(".sticky").removeClass("takeout animated");
      $(".sticky").addClass("stickyadd");
    }
  });

  // adding fadeInUp animation to child of div with class .way

  var $child = $(".way-fade-up").children();
  $child.each(function () {
    var self = $(this);
    $(this).waypoint(
      function () {
        self.addClass("animated fadeInUp");
      },
      { offset: "90%" }
    );
  });

  var $child = $(".way-fade-left").children();
  $child.each(function () {
    var self = $(this);
    $(this).waypoint(
      function () {
        self.addClass("animated fadeInLeft");
      },
      { offset: "90%" }
    );
  });

  var $child = $(".way-fade-right").children();
  $child.each(function () {
    var self = $(this);
    $(this).waypoint(
      function () {
        self.addClass("animated fadeInRight");
      },
      { offset: "90%" }
    );
  });

  var typed = new Typed(".element", {
    strings: ["Erick Rosa", "a Web Developer", "I build things for the web"],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000,
  });

  $("a").smoothScroll({
    speed: 2000,
  });
});

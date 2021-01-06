  var promo_strings = [
    "healthier communities", //babies",
    //"higher living standards",
    "safer cities", // "lower crime",
    "gender equality",
    "sustainable cities",
    "a cleaner environment",
    "positive outcomes"
  ];
  if (window.location.hash == "#derek") {
      promo_strings = [
        "Children Who Can Read Good And Wanna Learn To Do Other Stuff Good Too"
      ];
  } else if (window.location.hash == "#rufus") {
    promo_strings = [
      "cleaner air",
      "cleaner water",
      "cleaner dirt",
      "higher bowling averages",
      "lower mini-golf scores",
      "more excellent water-slides", 
      "most excellent adventures",
      "a better San Dimas"
    ];
  }
  $(function(){
    $(".healthy-babies span").typed({
      strings: promo_strings,
      startDelay: 3000,
      typeSpeed: 50,
      loop: true,
      showCursor: true,
      backDelay: 3000,
      backSpeed: 50,
      cursorChar: "_",
    });
  });
  
      
$(document).ready(function() {
      /* ======= Header Background Slideshow - Flexslider ======= */    
      /* Ref: https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties * /
      
      $('.bg-slider').flexslider({
          animation: "fade",
          directionNav: false, //remove the default direction-nav - https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties
          controlNav: false, //remove the default control-nav
          slideshowSpeed: 8000,
          useCSS: false,
      }); */
});
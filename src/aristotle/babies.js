  var promo_strings = [
    "build healthier communities.",
    //"higher living standards.",
    "reduce the cost of business.",
    "build safer cities.",
    "achieve gender equality.",
    "build sustainable cities.",
    "create a cleaner environment.",
    "achieve positive outcomes.",
    "do more!"
  ];
var shuffle = true;
  if (window.location.hash == "#derek") {
      promo_strings = [
        "teach Kids Who Can't Read Good and Who Wanna Learn to Do Other Stuff Good Too."
      ];
  } else if (window.location.hash == "#rufus") {
    promo_strings = [
      "get cleaner air.",
      "get cleaner water.",
      "get cleaner dirt.",
      "get higher bowling averages.",
      "get lower mini-golf scores.",
      "get more excellent water-slides.", 
      "have most excellent adventures.",
      "have a better San Dimas.",
    ];
    shuffle = false;
  }
      
$(document).ready(function() {
  var typed = new Typed(".healthy-babies span", {
    strings: promo_strings,
    startDelay: 2000,
    typeSpeed: 40,
    loop: true,
    showCursor: true,
    backDelay: 2000,
    backSpeed: 40,
    shuffle: shuffle,
    cursorChar: "|",
  });
});
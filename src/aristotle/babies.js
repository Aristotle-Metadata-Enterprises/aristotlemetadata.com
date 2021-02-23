let promo_strings = [
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
let shuffle = true;

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

  let typed = new Typed('.healthy-babies > span', {
    strings: promo_strings,
    typeSpeed: 40,
    loop: true,
    showCursor: true,
    backDelay: 2000,
    smartBackspace: false,
    backSpeed: 20,
    shuffle: shuffle,
    cursorChar: "|",
  });
});

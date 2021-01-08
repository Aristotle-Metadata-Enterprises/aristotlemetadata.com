

const tnsCarousel = document.querySelectorAll('.tiny-slider');
tnsCarousel.forEach(slider => {
    var controls = $(slider).siblings(".slider-custom-controls").get(0);
    tns({
        container: slider,
        loop: true,
        items: 1,
        slideBy: 'page',
        nav: true,    
        autoplay: true,
        speed: 1000,
        autoplayButtonOutput: false,
        mouseDrag: true,
        lazyload: true,
        gutter: 0,
        navPosition: 'bottom',
        mouseDrag: true,
        controls: true,
        controlsContainer: controls,
    });
});
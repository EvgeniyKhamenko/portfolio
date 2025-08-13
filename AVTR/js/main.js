$(function () {
    $(".desing__slider").slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow:
            '<img class="arrow arrow-left" src="image/arrow-left.svg" alt="">',
        nextArrow:
            '<img class="arrow arrow-right" src="image/arrow-right.svg" alt="">',
            responsive: [
                {
                    breackpoint: 361,
                    settings: {
                        variableWidth: false,
                        slidesToShow: 1,
                    }
                }
            ]
    });
});

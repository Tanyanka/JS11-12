(function($) {

    $.fn.Carousel = function() {

        var leftCarousel = $('.carousel-arrow-left'),
            rightCarousel = $('.carousel-arrow-right'),
            elementsList = $('.carousel-list');
            pixelsOffset = 125,
            currentLeftValue = 0,
            elementsCount = elementsList.find('li').length,
            minimumOffset = -((elementsCount - 5) * pixelsOffset),
            maximumOffset = 0;

        leftCarousel.click(function() {

            if (currentLeftValue != maximumOffset) {
                currentLeftValue += 125;
                elementsList.animate({
                    left: currentLeftValue + "px"
                }, 500);
            };
        });

        rightCarousel.click(function() {

            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= 125;
                elementsList.animate({
                    left: currentLeftValue + "px"
                }, 500);
            };
        });

        return this;
    };

})(jQuery);

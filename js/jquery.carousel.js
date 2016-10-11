(function($) {

var leftUIEl = $('.carousel-arrow-left'),
    rightUIEl = $('.carousel-arrow-right'),
    elementsList = $('.carousel-list');
    pixelsOffset = 125,
    currentLeftValue = 0,
    elementsCount = elementsList.find('li').length,
    minimumOffset = - ((elementsCount - 5) * pixelsOffset),
    maximumOffset = 0;

leftUIEl.click(function() {

    if (currentLeftValue != maximumOffset) {
        currentLeftValue += 125;
        elementsList.animate({ left : currentLeftValue + "px"}, 500);
    };
    });

rightUIEl.click(function() {

    if (currentLeftValue != minimumOffset) {
        currentLeftValue -= 125;
        elementsList.animate({ left : currentLeftValue + "px"}, 500);
    };
    });










    // $.fn.Carousel = function() {
    //
    //
    //     return this;
    // };

}) (jQuery);

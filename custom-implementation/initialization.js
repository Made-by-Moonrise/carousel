jQuery(function ($) {
    $(document).ready(function () {
        var debounceRate = 500;

        var debouncedCall = _.debounce(function () {
            console.log('resize-timer');
            //initializeTouchCarousel();
            //initializeCaroufredsel();
        }, debounceRate);

        $(window).resize(debouncedCall);
    });

    //$("#yourCarouselId").touchCarousel({
    //    /* carousel options go here see Javascript Options section for more info */
    //});
});
jQuery(function ($) {
    $(document).ready(function () {
        var debounceRate = 500;

        var debouncedCall = _.debounce(function () {
            console.log('resize-timer');
            initializeTouchCarousel();
        }, debounceRate);

        $(window).resize(debouncedCall);
    });
});
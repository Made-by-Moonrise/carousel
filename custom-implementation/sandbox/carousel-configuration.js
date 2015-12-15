var $;
var commonConfiguration = {
    itemsPerMove: 1, // The number of items to move per arrow click.

    snapToItems: true, // Snap to items, based on itemsPerMove.
    pagingNav: false, // Enable paging nav. Overrides snapToItems.
    pagingNavControls: true, // Paging controls (bullets).

    scrollbar: true, // Scrollbar enabled.
    scrollbarAutoHide: true, // Scrollbar autohide.
    scrollbarTheme: "dark", // Scrollbar color. Can be "light" or "dark".

    transitionSpeed: 200, // Carousel transition speed (next/prev arrows, slideshow).

    directionNav: false, // Direction (arrow) navigation (true or false).
    directionNavAutoHide: true, // Direction (arrow) navigation auto hide on hover.

    loopItems: false, // Loop items (don't disable arrows on last slide and allow autoplay to loop).

    keyboardNav: true, // Keyboard arrows navigation.
    dragUsingMouse: true, // Enable drag using mouse.

    scrollToLast: true, // Last item ends at start of carousel wrapper.

    itemFallbackWidth: 500, // Default width of the item in pixels. (used if impossible to get item width).

    baseMouseFriction: 0.0012, // Container friction on desktop (higher friction - slower speed).
    baseTouchFriction: 0.0008, // Container friction on mobile.
    lockAxis: true, // Allow dragging only on one direction.
    useWebkit3d: false, // Enable WebKit 3d transform on desktop devices.
    // (on touch devices this option is turned on).
    // Use it if you have only images, 3d transform makes text blurry.

    autoplay: false, // Autoplay enabled.
    autoplayDelay: 3000, // Delay between transitions.
    autoplayStopAtAction: true, // Stop autoplay forever when user clicks arrow or does any other action.

    onAnimStart: null, // Callback, triggers before deceleration or transition animation.
    onAnimComplete: null, // Callback, triggers after deceleration or transition animation.

    onDragStart: null, // Callback, triggers on drag start.
    onDragRelease: null // Callback, triggers on drag complete.
};

var carouselOffset = 85;
var smallFactor = 2.210884353741;
var smallFactorProjectDescription = 1.6;
var mediumFactor = 3.401360544218;
var heightFactor = 18.027210884354;
var widthFactor = 21.428571428571;

var selector = "#yourCarouselId";

function _selectItem(configuration) {
    $(selector).touchCarousel(configuration);
}

function _noSnapConfiguration() {
    _selectItem(_.extend(commonConfiguration, {
        snapToItems: false
    }))
}

function _directionNavConfiguration() {
    _selectItem(_.extend(commonConfiguration, {
        directionNav: true
    }))
}

function computePixelSize(size, factor) {
    return computeSize(size, factor) + 'px'
}

function computeSize(size, factor) {
    return (Math.round((size / 100) * factor).toFixed(0));
}

function computePixelSize2(size, factor, divisor) {
    return (Math.round((size - factor) / divisor).toFixed(0)) + 'px'
}

function provideBoxSpacing(top, right, bottom, left) {
    return top + 'px ' + right + 'px ' + bottom + 'px ' + left + 'px';
}

function computeSquare(carouselHeight) {
    return computePixelSize2(carouselHeight, 8, 2);
}

function computeRectangle(carouselHeight) {
    return computePixelSize2(carouselHeight, 16, 3);
}

function _mobileAdjustments(carouselHeight) {
    // modify touch carousel css properties % of carouselHeight
    $('.tile-column-casestudy, .tile-column-casestudy img').css({
        'height': carouselHeight + 'px',
        'width': computePixelSize(carouselHeight, 70.0)
    });
    $('.tile-column-casestudyextra, .tile-column-casestudyextra img').css({
        'height': carouselHeight + 'px',
        'width': computePixelSize(carouselHeight, 70.0)
    });

    // base.css | Headline Small (% of carouselHeight)
    $('.headline-large h1').css({
        'font-size': computePixelSize(carouselHeight, 4.761904761905),
        'padding': provideBoxSpacing(
            0,
            computeSize(carouselHeight, 4.251700680272),
            computeSize(carouselHeight, 0.850340136054),
            computeSize(carouselHeight, 5.0)
        )
    });

    // about.css | Approach / Clients (% of carouselHeight)
    $('.approach, .clients').css({
        'padding': provideBoxSpacing(
            computeSize(carouselHeight, 31.0),
            0,
            computeSize(carouselHeight, 5.102040816327),
            computeSize(carouselHeight, 8.8)
        )
    });
    $('.approach p, .clients p').css({
        'font-size':  computePixelSize(carouselHeight, 3.0)
    });
    $('.competencies').css({
        'padding': provideBoxSpacing(
            computeSize(carouselHeight, 31.00),
            computeSize(carouselHeight, 1.5),
            computeSize(carouselHeight, 5.102040816327),
            computeSize(carouselHeight, 6.8)
        )
    });
    $('.competencies p').css({
        'font-size':  computePixelSize(carouselHeight, 2.2)
    });

    // casestudies.css | Project Description (% of carouselHeight)

    $('.project-description').css({
        'width':  computePixelSize(carouselHeight, 62.0),
        'padding': provideBoxSpacing(computeSize(carouselHeight, 25.0), 0, 0, 0)
    });
    $('.project-description p, .clients p').css({
        'font-size': computePixelSize(carouselHeight, 2.8),
        'text-align': 'left'
    });

    // casestudies.css | Project Extra (% of carouselHeight)
    $('.project-extra').css({
        'top': computePixelSize(carouselHeight, 25.0)
    });
    $('.project-extra p').css({
        'width': computePixelSize(carouselHeight, 62.0),
        'font-size': computePixelSize(carouselHeight, 2.8)
    });
}

function _mobileIphone4And5(carouselHeight) {
// casestudies.css | Project Description (% of carouselHeight)

    $('.project-description').css({
        'width': computePixelSize(carouselHeight, 61.0),
        'padding': provideBoxSpacing(
            computeSize(carouselHeight, 25.0),
            0,
            0,
            computeSize(carouselHeight, 2.551020408163)
        )
    });
}

function _touchCarouselModifications(carouselHeight) {
    $('.touchcarousel').css({
        'height': carouselHeight
    });
    $('.tile-1high-rectangle, .tile-1high-rectangle img, .caption-1high-rectangle').css({
        'height': carouselHeight + 'px',
        'width': computePixelSize(carouselHeight, 141.496598639456)
    });
    $('.tile-2high-rectangle, .tile-2high-rectangle img, .caption-2high-rectangle').css({
        'height': computeSquare(carouselHeight),
        'width': computePixelSize(carouselHeight, 69.727891156463)
    });
    $('.tile-3high-rectangle, .tile-3high-rectangle img, .caption-3high-rectangle').css({
        'height': computeRectangle,
        'width': computePixelSize(carouselHeight, 45.918367346939)
    });
    $('.tile-2high-rectangle-long, .tile-2high-rectangle-long img, .caption-2high-rectangle-long').css({
        'height': computeSquare(carouselHeight),
        'width': computePixelSize(carouselHeight, 100)
    });
    $('.tile-3high-rectangle-long, .tile-3high-rectangle-long img, .caption-3high-rectangle-long').css({
        'height': computeRectangle,
        'width': computePixelSize(carouselHeight, 66.326530612245)
    });
    $('.tile-1high-square, .tile-1high-square img, .caption-1high-square').css({
        'height': carouselHeight + 'px',
        'width': computePixelSize(carouselHeight, 100)
    });
    $('.tile-2high-square, .tile-2high-square img, .caption-2high-square').css({
        'height': computeSquare(carouselHeight),
        'width': computePixelSize(carouselHeight, 49.319727891156)
    });
    $('.tile-3high-square, .tile-3high-square img, .caption-3high-square').css({
        'height': computeRectangle,
        'width': computePixelSize(carouselHeight, 32.482993197279)
    });

    $('.tile-2high-2square-wrapper, .tile-2high-2square-wrapper img').css({
        'height': computeSquare(carouselHeight),
        'width': computePixelSize(carouselHeight, 100 + 0.5)
    });
    $('.tile-2high-2square, .tile-2high-2square img').css({
        'height': computeSquare(carouselHeight),
        'width': computeSquare(carouselHeight)
    });

    $('.tile-3high-2square-wrapper, .tile-3high-2square-wrapper img').css({
        'height': computeRectangle,
        'width': computePixelSize(carouselHeight, 66.326530612245)
    });
    $('.tile-3high-2square, .tile-3high-2square img').css({
        'height': computeSquare(carouselHeight),
        'width': computeSquare(carouselHeight)
    });

    $('.tile-column-wider, .tile-column-wider img').css({
        'height': carouselHeight + 'px',
        'width': computePixelSize(carouselHeight, 85.034013605442)
    });
    $('.tile-column-wide, .tile-column-wide img').css({
        'height': carouselHeight + 'px',
        'width': computePixelSize(carouselHeight, 69.557823129252)
    });
    $('.tile-column-medium, .tile-column-medium img').css({
        'height': carouselHeight + 'px',
        'width': computePixelSize(carouselHeight, 59.69387755102)
    });
    $('.tile-column-narrow, .tile-column-narrow img').css({
        'height': carouselHeight + 'px',
        'width': computePixelSize(carouselHeight, 49.489795918367)
    });
    $('.tile-column-narrower, .tile-column-narrower img').css({
        'height': carouselHeight + 'px',
        'width': computePixelSize(carouselHeight, 37.414965986395)
    });

    $('.tile-column-casestudy, .tile-column-casestudy img').css({
        'height': carouselHeight + 'px',
        'width': computePixelSize(carouselHeight, 129.251700680272)
    });
    $('.tile-column-casestudyextra, .tile-column-casestudyextra img').css({
        'height': carouselHeight + 'px',
        'width': computePixelSize(carouselHeight, 85.034013605442)
    });
}

function updateCaptionText(carouselHeight) {
    // base.css | Caption Fade (% of carouselHeight)
    $('.caption-text').css({
        'bottom': computePixelSize(carouselHeight, 5.952380952381),
        'left': computePixelSize(carouselHeight, 5.102040816327)
    });
    $('.caption-text h2').css({
        'font-size': computePixelSize(carouselHeight, smallFactor),
        'padding': provideBoxSpacing(
            0,
            computeSize(carouselHeight, 7.65306122449),
            0,
            computeSize(carouselHeight, 0.850340136054),
            0
        )
    });
    $('.caption-text h3').css({
        'font-size': computePixelSize(carouselHeight, 1.700680272109),
        'padding': provideBoxSpacing(
            computeSize(carouselHeight, mediumFactor),
            computeSize(carouselHeight, 7.65306122449),
            computeSize(carouselHeight, 0.340136054422),
            0
        )
    });
    $('.caption-text p').css({
        'font-size': computePixelSize(carouselHeight, smallFactor),
        'padding': provideBoxSpacing(
            0,
            computeSize(carouselHeight, 7.65306122449),
            computeSize(carouselHeight, 0.850340136054),
            0
        )
    });
}

function updateHeadlines(carouselHeight) {
    // base.css | Headline Large (% of carouselHeight)
    $('.headline-large').css({
        'padding': provideBoxSpacing(
            computeSize(carouselHeight, 47.108843537415),
            0,
            0,
            0
        )
    });
    $('.headline-large h1').css({
        'font-size': computePixelSize(carouselHeight, 4.761904761905),
        'padding': provideBoxSpacing(
            0,
            computeSize(carouselHeight, 4.251700680272),
            computeSize(carouselHeight, 0.850340136054),
            computeSize(carouselHeight, 6.802721088435)
        )
    });

    // base.css | Headline Small (% of carouselHeight)
    $('.headline-small').css({
        'top': computePixelSize(carouselHeight, mediumFactor)
    });
    $('.headline-small h1').css({
        'font-size': computePixelSize(carouselHeight, smallFactor),
        'padding': provideBoxSpacing(
            0,
            computeSize(carouselHeight, mediumFactor),
            computeSize(carouselHeight, 0.850340136054),
            computeSize(carouselHeight, 5.102040816327)
        )
    });
}

function updateTextBlock(carouselHeight) {
    // base.css | Text Block (% of carouselHeight)
    $('.textblock').css({
        'top': computePixelSize(carouselHeight, 13.605442176871)
    });
    $('.textblock p').css({
        'font-size': computePixelSize(carouselHeight, 1.87074829932),
        'padding': provideBoxSpacing(
            0,
            0,
            computeSize(carouselHeight, 0.850340136054),
            computeSize(carouselHeight, 5.102040816327)
        )
    });
}

function _baseModifications(carouselHeight) {
    updateHeadlines(carouselHeight);
    updateTextBlock(carouselHeight);
    updateCaptionText(carouselHeight);
}

function updateLinkIcons(carouselHeight) {
// casestudies.css | Link Icons (% of carouselHeight)
    $('.linkicon').css({
        'padding': provideBoxSpacing(
            computeSize(carouselHeight, 40.816326530612),
            0,
            0,
            computeSize(carouselHeight, 8.503401360544)
        )
    });
    $('.linkicon-square').css({
        'width': computePixelSize(carouselHeight, 14.625850340136),
        'height': computePixelSize(carouselHeight, heightFactor),
        'margin': provideBoxSpacing(
            0,
            computeSize(carouselHeight, 5.102040816327),
            0,
            computeSize(carouselHeight, 5.102040816327)
        )
    });
    $('.linkicon-rectangle').css({
        'width': computePixelSize(carouselHeight, widthFactor),
        'height': computePixelSize(carouselHeight, heightFactor),
        'margin': provideBoxSpacing(
            0,
            computeSize(carouselHeight, 1.700680272109),
            0,
            computeSize(carouselHeight, 1.700680272109)
        )
    });
    $('.linkicon-square-img').css({
        'width': computePixelSize(carouselHeight, 14.625850340136),
        'height': computePixelSize(carouselHeight, heightFactor)
    });
    $('.linkicon-rectangle-img').css({
        'width': computePixelSize(carouselHeight, widthFactor),
        'height': computePixelSize(carouselHeight, heightFactor)
    });
    $('.linkicon-square p').css({
        'padding-top': computePixelSize(carouselHeight, 8.503401360544),
        'font-size': computePixelSize(carouselHeight, smallFactor)
    });
    $('.linkicon-rectangle p').css({
        'padding-top': computePixelSize(carouselHeight, 8.503401360544),
        'font-size': computePixelSize(carouselHeight, smallFactor)
    });
}

function updateProjectDetails(carouselHeight) {
    // casestudies.css | Project Details (% of carouselHeight)
    $('.project-details').css({
        'width': computePixelSize(carouselHeight, 27.210884353741),
        'padding': provideBoxSpacing(
            computePixelSize(carouselHeight, 48.809523809524),
            0,
            0,
            0
        )
    });
    $('.project-details dl dt').css({
        'padding-top': computePixelSize(carouselHeight, 1.020408163265),
        'font-size': computePixelSize(carouselHeight, 1.700680272109)
    });
    $('.project-details dl dd').css({
        'font-size': computePixelSize(carouselHeight, 1.700680272109)
    });
}

function updateProjectDescription(carouselHeight) {
    // casestudies.css | Project Description (% of carouselHeight)
    $('.project-description').css({
        'width': computePixelSize(carouselHeight, 95.238095238095),
        'padding': provideBoxSpacing(
            computeSize(carouselHeight, 49.319727891156),
            0,
            0,
            0
        )
    });
    $('.project-description p, .clients p').css({
        'font-size': computePixelSize(carouselHeight, smallFactorProjectDescription),
        'padding': provideBoxSpacing(
            0,
            0,
            computeSize(carouselHeight, 0.850340136054),
            computeSize(carouselHeight, 5.102040816327)
        )
    });
    $('.project-description-space').css({
        'margin': provideBoxSpacing(
            0,
            0,
            0,
            computeSize(carouselHeight, 68.027210884354)
        )
    });
}

function updateProjectExtra(carouselHeight) {
    // casestudies.css | Project Extra (% of carouselHeight)
    $('.project-extra').css({
        'top': computePixelSize(carouselHeight, 49.319727891156)
    });
    $('.project-extra p').css({
        'font-size': computePixelSize(carouselHeight, 1.87074829932),
        'width': computePixelSize(carouselHeight, 62.925170068027),
        'padding': provideBoxSpacing(
            0,
            0,
            computeSize(carouselHeight, 0.850340136054),
            computeSize(carouselHeight, 5.102040816327)
        )
    });
}

function _caseStudyModifications(carouselHeight) {
    console.log('case study modifications');
    updateProjectDescription(carouselHeight);
    updateProjectDetails(carouselHeight);
    updateProjectExtra(carouselHeight);

    // casestudies.css | Colour Swap (% of carouselHeight)
    $('.colourswap').css({
        'bottom': computePixelSize(carouselHeight, mediumFactor)
    });

    updateLinkIcons(carouselHeight);
}

function _cssConfiguration() {
    // record viewportHeight
    var viewportHeight = window.innerHeight;
    // record viewportWidth
    var viewportWidth = window.innerWidth;
    // set carousel height varable, maximum size is 748
    var carouselHeight = viewportHeight > 1000 ? 1000 : viewportHeight;

    carouselHeight = carouselHeight - carouselOffset;

    console.log('carouselHeight', carouselHeight);

    // modify touch carousel css properties % of carouselHeight
    _touchCarouselModifications(carouselHeight);
    _baseModifications(carouselHeight);
    _caseStudyModifications(carouselHeight);

    // FOR MOBILE
    if (viewportWidth < 480) {
        _mobileAdjustments($, carouselHeight);
    }
    // FOR MOBILE iPHONE 4 & 5 only
    if (viewportWidth < 321) {
        _mobileIphone4And5($, carouselHeight)
    }
}

function _touchConfiguration() {
    // detect touch browsers returns true or false
    var isTouch = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));

    // detect narrow viewport and set snapToItems variable
    var snap = (window.innerWidth - carouselOffset) < 480 ? 'false' : 'true';

    // TOUCH BROWSERS
    if (isTouch == true) {
        // initialize carousel for touch browsers without snap to items
        if (snap == 'false') {
            _noSnapConfiguration();
            // initialize carousel for touch browsers with snap to items
        } else {
            _selectItem(commonConfiguration);
        }
    } else {
        // NON-TOUCH BROWSERS
        // initialize carousel for non-touch browsers with snap to items
        _directionNavConfiguration();
    }
    //==============================================================================
    // TOUCH CAROUSEL CONFIGURATION END
    //==============================================================================
}

function initializeTouchCarousel() {
    console.log('initialize touch carousel');
    jQuery(function () {
        _cssConfiguration();
        _touchConfiguration();
    });
}

// Call the initialize function
initializeTouchCarousel();

jQuery(function (jquery) {
    $ = jquery;

    $(document).ready(function () {
        var debounceRate = 500;

        var debouncedCall = _.debounce(function () {
            console.log('resize-timer');
            initializeTouchCarousel();
        }, debounceRate);

        $(window).resize(debouncedCall);
    });
});
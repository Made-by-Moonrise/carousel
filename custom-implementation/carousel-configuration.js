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

function selectItem($, configuration) {
    var selector = "#about-carousel, #casestudy-carousel, #news-carousel, #newsmobile-carousel, #newsdetail-carousel, #press-carousel, #contact-carousel, #sitemap-carousel";
    $(selector).touchCarousel(configuration);
}

function noSnapConfiguration($) {
    selectItem($, _.extend(commonConfiguration, {
        snapToItems: false
    }))
}

function directionNavConfiguration($) {
    selectItem($, _.extend(commonConfiguration, {
        directionNav: true
    }))
}

function cssConfiguration($) {
    // record viewportHeight
    var viewportHeight = window.innerHeight;
    // record viewportWidth
    var viewportWidth = window.innerWidth;

    // set carousel height varable, maximum size is 748
    if (viewportHeight > 1000) {
        var carouselHeight = 1000
    } else {
        var carouselHeight = viewportHeight
    }

    // modify touch carousel css properties % of carouselHeight
    $('.touchcarousel').css({
        'height': carouselHeight
    });
    $('.tile-1high-rectangle, .tile-1high-rectangle img, .caption-1high-rectangle').css({
        'height': carouselHeight + 'px',
        'width': (Math.round(carouselHeight / 100 * 141.496598639456).toFixed(0)) + 'px'
    });
    $('.tile-2high-rectangle, .tile-2high-rectangle img, .caption-2high-rectangle').css({
        'height': (Math.round((carouselHeight - 8) / 2).toFixed(0)) + 'px',
        'width': (Math.round((carouselHeight / 100) * 69.727891156463).toFixed(0)) + 'px'
    });
    $('.tile-3high-rectangle, .tile-3high-rectangle img, .caption-3high-rectangle').css({
        'height': (Math.round((carouselHeight - 16) / 3).toFixed(0)) + 'px',
        'width': (Math.round((carouselHeight / 100) * 45.918367346939).toFixed(0)) + 'px'
    });
    $('.tile-2high-rectangle-long, .tile-2high-rectangle-long img, .caption-2high-rectangle-long').css({
        'height': (Math.round((carouselHeight - 8) / 2).toFixed(0)) + 'px',
        'width': (Math.round((carouselHeight / 100) * 100).toFixed(0)) + 'px'
    });
    $('.tile-3high-rectangle-long, .tile-3high-rectangle-long img, .caption-3high-rectangle-long').css({
        'height': (Math.round((carouselHeight - 16) / 3).toFixed(0)) + 'px',
        'width': (Math.round((carouselHeight / 100) * 66.326530612245).toFixed(0)) + 'px'
    });
    $('.tile-1high-square, .tile-1high-square img, .caption-1high-square').css({
        'height': carouselHeight + 'px',
        'width': (Math.round((carouselHeight / 100) * 100).toFixed(0)) + 'px'
    });
    $('.tile-2high-square, .tile-2high-square img, .caption-2high-square').css({
        'height': (Math.round((carouselHeight - 8) / 2).toFixed(0)) + 'px',
        'width': (Math.round((carouselHeight / 100) * 49.319727891156).toFixed(0)) + 'px'
    });
    $('.tile-3high-square, .tile-3high-square img, .caption-3high-square').css({
        'height': (Math.round((carouselHeight - 16) / 3).toFixed(0)) + 'px',
        'width': (Math.round((carouselHeight / 100) * 32.482993197279).toFixed(0)) + 'px'
    });

    $('.tile-2high-2square-wrapper, .tile-2high-2square-wrapper img').css({
        'height': (Math.round((carouselHeight - 8) / 2).toFixed(0)) + 'px',
        'width': (Math.round((carouselHeight / 100) * 100 + 0.5).toFixed(0)) + 'px'
    });
    $('.tile-2high-2square, .tile-2high-2square img').css({
        'height': (Math.round((carouselHeight - 8) / 2).toFixed(0)) + 'px',
        'width': (Math.round((carouselHeight - 8) / 2).toFixed(0)) + 'px'
    });

    $('.tile-3high-2square-wrapper, .tile-3high-2square-wrapper img').css({
        'height': (Math.round((carouselHeight - 16) / 3).toFixed(0)) + 'px',
        'width': (Math.round((carouselHeight / 100) * 66.326530612245).toFixed(0)) + 'px'
    });
    $('.tile-3high-2square, .tile-3high-2square img').css({
        'height': (Math.round((carouselHeight - 8) / 2).toFixed(0)) + 'px',
        'width': (Math.round((carouselHeight - 8) / 2).toFixed(0)) + 'px'
    });

    $('.tile-column-wider, .tile-column-wider img').css({
        'height': carouselHeight + 'px',
        'width': (Math.round((carouselHeight / 100) * 85.034013605442).toFixed(0)) + 'px'
    });
    $('.tile-column-wide, .tile-column-wide img').css({
        'height': carouselHeight + 'px',
        'width': (Math.round((carouselHeight / 100) * 69.557823129252).toFixed(0)) + 'px'
    });
    $('.tile-column-medium, .tile-column-medium img').css({
        'height': carouselHeight + 'px',
        'width': (Math.round((carouselHeight / 100) * 59.69387755102).toFixed(0)) + 'px'
    });
    $('.tile-column-narrow, .tile-column-narrow img').css({
        'height': carouselHeight + 'px',
        'width': (Math.round((carouselHeight / 100) * 49.489795918367).toFixed(0)) + 'px'
    });
    $('.tile-column-narrower, .tile-column-narrower img').css({
        'height': carouselHeight + 'px',
        'width': (Math.round((carouselHeight / 100) * 37.414965986395).toFixed(0)) + 'px'
    });

    $('.tile-column-casestudy, .tile-column-casestudy img').css({
        'height': carouselHeight + 'px',
        'width': (Math.round(carouselHeight / 100 * 129.251700680272).toFixed(0)) + 'px'
    });
    $('.tile-column-casestudyextra, .tile-column-casestudyextra img').css({
        'height': carouselHeight + 'px',
        'width': (Math.round((carouselHeight / 100) * 85.034013605442).toFixed(0)) + 'px'
    });

    // base.css | Headline Large (% of carouselHeight)
    $('.headline-large').css({
        'padding': (Math.round((carouselHeight / 100) * 47.108843537415).toFixed(0)) + 'px ' + '0px ' + '0px ' + '0px'
    });
    $('.headline-large h1').css({
        'font-size': (Math.round((carouselHeight / 100) * 4.761904761905).toFixed(0)) + 'px',
        'padding': '0px ' + (Math.round((carouselHeight / 100) * 4.251700680272).toFixed(0)) + 'px ' + (Math.round((carouselHeight / 100) * 0.850340136054).toFixed(0)) + 'px ' + (Math.round((carouselHeight / 100) * 6.802721088435).toFixed(0)) + 'px'
    });

    // base.css | Headline Small (% of carouselHeight)
    $('.headline-small').css({
        'top': (Math.round((carouselHeight / 100) * 3.401360544218).toFixed(0)) + 'px'
    });
    $('.headline-small h1').css({
        'font-size': (Math.round((carouselHeight / 100) * 2.210884353741).toFixed(0)) + 'px',
        'padding': '0px ' + (Math.round((carouselHeight / 100) * 3.401360544218).toFixed(0)) + 'px ' + (Math.round((carouselHeight / 100) * 0.850340136054).toFixed(0)) + 'px ' + (Math.round((carouselHeight / 100) * 5.102040816327).toFixed(0)) + 'px'
    });

    // base.css | Text Block (% of carouselHeight)
    $('.textblock').css({
        'top': (Math.round((carouselHeight / 100) * 13.605442176871).toFixed(0)) + 'px'
    });
    $('.textblock p').css({
        'font-size': (Math.round((carouselHeight / 100) * 1.87074829932).toFixed(0)) + 'px',
        'padding': '0px ' + '0px ' + (Math.round((carouselHeight / 100) * 0.850340136054).toFixed(0)) + 'px ' + (Math.round((carouselHeight / 100) * 5.102040816327).toFixed(0)) + 'px'
    });

    // base.css | Caption Fade (% of carouselHeight)
    $('.caption-text').css({
        'bottom': (Math.round((carouselHeight / 100) * 5.952380952381).toFixed(0)) + 'px',
        'left': (Math.round((carouselHeight / 100) * 5.102040816327).toFixed(0)) + 'px'
    });
    $('.caption-text h2').css({
        'font-size': (Math.round((carouselHeight / 100) * 2.210884353741).toFixed(0)) + 'px',
        'padding': '0px ' + (Math.round((carouselHeight / 100) * 7.65306122449).toFixed(0)) + 'px ' + (Math.round((carouselHeight / 100) * 0.850340136054).toFixed(0)) + 'px ' + '0px'
    });
    $('.caption-text h3').css({
        'font-size': (Math.round((carouselHeight / 100) * 1.700680272109).toFixed(0)) + 'px',
        'padding': (Math.round((carouselHeight / 100) * 3.401360544218).toFixed(0)) + 'px ' + (Math.round((carouselHeight / 100) * 7.65306122449).toFixed(0)) + 'px ' + (Math.round((carouselHeight / 100) * 0.340136054422).toFixed(0)) + 'px ' + '0px'
    });
    $('.caption-text p').css({
        'font-size': (Math.round((carouselHeight / 100) * 2.210884353741).toFixed(0)) + 'px',
        'padding': '0px ' + (Math.round((carouselHeight / 100) * 7.65306122449).toFixed(0)) + 'px ' + (Math.round((carouselHeight / 100) * 0.850340136054).toFixed(0)) + 'px ' + '0px'
    });

    // about.css | Approach / Clients (% of carouselHeight)
    $('.approach, .clients').css({
        'padding': (Math.round((carouselHeight / 100) * 47.108843537415).toFixed(0)) + 'px ' + '0px ' + (Math.round((carouselHeight / 100) * 5.102040816327).toFixed(0)) + 'px ' + (Math.round((carouselHeight / 100) * 5.102040816327).toFixed(0)) + 'px'
    });
    $('.approach p, .clients p').css({
        'font-size': (Math.round((carouselHeight / 100) * 2.210884353741).toFixed(0)) + 'px',
        'padding': '0px ' + '0px ' + (Math.round((carouselHeight / 100) * 1.700680272109).toFixed(0)) + 'px ' + '0px'
    });
    $('.competencies').css({
        'padding': (Math.round((carouselHeight / 100) * 47.108843537415).toFixed(0)) + 'px ' + (Math.round((carouselHeight / 100) * 10.204081632653).toFixed(0)) + 'px ' + (Math.round((carouselHeight / 100) * 5.102040816327).toFixed(0)) + 'px ' + (Math.round((carouselHeight / 100) * 5.102040816327).toFixed(0)) + 'px'
    });
    $('.competencies p').css({
        'font-size': (Math.round((carouselHeight / 100) * 1.700680272109).toFixed(0)) + 'px',
        'padding': '0px ' + '0px ' + (Math.round((carouselHeight / 100) * 0.680272108844).toFixed(0)) + 'px ' + '0px'
    });

    // about.css | Team (% of carouselHeight)
    $('.team').css({
        'width': (Math.round((carouselHeight / 100) * 40.816326530612).toFixed(0)) + 'px',
        'padding': (Math.round((carouselHeight / 100) * 47.108843537415).toFixed(0)) + 'px ' + (Math.round((carouselHeight / 100) * 3.401360544218).toFixed(0)) + 'px ' + '0px ' + (Math.round((carouselHeight / 100) * 5.102040816327).toFixed(0)) + 'px'
    });
    $('.team p').css({
        'font-size': (Math.round((carouselHeight / 100) * 1.700680272109).toFixed(0)) + 'px',
        'padding': '0px ' + '0px ' + (Math.round((carouselHeight / 100) * 0.680272108844).toFixed(0)) + 'px ' + (Math.round((carouselHeight / 100) * 5.102040816327).toFixed(0)) + 'px'
    });

    // about.css | Award (% of carouselHeight)
    $('.award dl').css({
        'top': (Math.round((carouselHeight / 100) * 47.108843537415).toFixed(0)) + 'px',
        'left': (Math.round((carouselHeight / 100) * 5.102040816327).toFixed(0)) + 'px'
    });

    // casestudies.css | Project Description (% of carouselHeight)
    $('.project-description').css({
        'width': (Math.round((carouselHeight / 100) * 95.238095238095).toFixed(0)) + 'px',
        'padding': (Math.round((carouselHeight / 100) * 49.319727891156).toFixed(0)) + 'px ' + '0px ' + '0px ' + '0px'
    });
    $('.project-description p, .clients p').css({
        'font-size': (Math.round((carouselHeight / 100) * 2.210884353741).toFixed(0)) + 'px',
        'padding': '0px ' + '0px ' + (Math.round((carouselHeight / 100) * 0.850340136054).toFixed(0)) + 'px ' + (Math.round((carouselHeight / 100) * 5.102040816327).toFixed(0)) + 'px'
    });
    $('.project-description-space').css({
        'margin': '0px ' + '0px ' + '0px ' + (Math.round((carouselHeight / 100) * 68.027210884354).toFixed(0)) + 'px'
    });

    // casestudies.css | Project Details (% of carouselHeight)
    $('.project-details').css({
        'width': (Math.round((carouselHeight / 100) * 27.210884353741).toFixed(0)) + 'px',
        'padding': (Math.round((carouselHeight / 100) * 48.809523809524).toFixed(0)) + 'px ' + '0px ' + '0px ' + '0px',
    });
    $('.project-details dl dt').css({
        'padding-top': (Math.round((carouselHeight / 100) * 1.020408163265).toFixed(0)) + 'px',
        'font-size': (Math.round((carouselHeight / 100) * 1.700680272109).toFixed(0)) + 'px'
    });
    $('.project-details dl dd').css({
        'font-size': (Math.round((carouselHeight / 100) * 1.700680272109).toFixed(0)) + 'px'
    });

    // casestudies.css | Project Extra (% of carouselHeight)
    $('.project-extra').css({
        'top': (Math.round((carouselHeight / 100) * 49.319727891156).toFixed(0)) + 'px'
    });
    $('.project-extra p').css({
        'font-size': (Math.round((carouselHeight / 100) * 1.87074829932).toFixed(0)) + 'px',
        'width': (Math.round((carouselHeight / 100) * 62.925170068027).toFixed(0)) + 'px',
        'padding': '0px ' + '0px ' + (Math.round((carouselHeight / 100) * 0.850340136054).toFixed(0)) + 'px ' + (Math.round((carouselHeight / 100) * 5.102040816327).toFixed(0)) + 'px'
    });

    // casestudies.css | Colour Swap (% of carouselHeight)
    $('.colourswap').css({
        'bottom': (Math.round((carouselHeight / 100) * 3.401360544218).toFixed(0)) + 'px'
    });

    // casestudies.css | Link Icons (% of carouselHeight)
    $('.linkicon').css({
        'padding': (Math.round((carouselHeight / 100) * 40.816326530612).toFixed(0)) + 'px ' + '0px ' + '0px ' + (Math.round((carouselHeight / 100) * 8.503401360544).toFixed(0)) + 'px'
    });
    $('.linkicon-square').css({
        'width': (Math.round((carouselHeight / 100) * 14.625850340136).toFixed(0)) + 'px',
        'height': (Math.round((carouselHeight / 100) * 18.027210884354).toFixed(0)) + 'px',
        'margin': '0px ' + (Math.round((carouselHeight / 100) * 5.102040816327).toFixed(0)) + 'px ' + '0px ' + (Math.round((carouselHeight / 100) * 5.102040816327).toFixed(0)) + 'px'
    });
    $('.linkicon-rectangle').css({
        'width': (Math.round((carouselHeight / 100) * 21.428571428571).toFixed(0)) + 'px',
        'height': (Math.round((carouselHeight / 100) * 18.027210884354).toFixed(0)) + 'px',
        'margin': '0px ' + (Math.round((carouselHeight / 100) * 1.700680272109).toFixed(0)) + 'px ' + '0px ' + (Math.round((carouselHeight / 100) * 1.700680272109).toFixed(0)) + 'px'
    });
    $('.linkicon-square-img').css({
        'width': (Math.round((carouselHeight / 100) * 14.625850340136).toFixed(0)) + 'px',
        'height': (Math.round((carouselHeight / 100) * 18.027210884354).toFixed(0)) + 'px',
    });
    $('.linkicon-rectangle-img').css({
        'width': (Math.round((carouselHeight / 100) * 21.428571428571).toFixed(0)) + 'px',
        'height': (Math.round((carouselHeight / 100) * 18.027210884354).toFixed(0)) + 'px',
    });
    $('.linkicon-square p').css({
        'padding-top': (Math.round((carouselHeight / 100) * 8.503401360544).toFixed(0)) + 'px',
        'font-size': (Math.round((carouselHeight / 100) * 2.210884353741).toFixed(0)) + 'px'
    });
    $('.linkicon-rectangle p').css({
        'padding-top': (Math.round((carouselHeight / 100) * 8.503401360544).toFixed(0)) + 'px',
        'font-size': (Math.round((carouselHeight / 100) * 2.210884353741).toFixed(0)) + 'px'
    });

    // newsandpress.css | Twitter (% of carouselHeight)
    $('#twitter-tile').css({
        'height': (carouselHeight - 140) + 'px',
    });
    $('#twitter').css({
        'height': (carouselHeight - 140) + 'px',
    });

    // newsandpress.css | press (% of carouselHeight)
    $('.press dl').css({
        'top': (Math.round((carouselHeight / 100) * 68.027210884354).toFixed(0)) + 'px',
        'left': (Math.round((carouselHeight / 100) * 5.102040816327).toFixed(0)) + 'px'
    });

    // contact.css | Contact (% of carouselHeight)
    $('.contact-details').css({
        'height': carouselHeight + 'px',
    });
    $('.contact-details h1').css({
        'font-size': (Math.round((carouselHeight / 100) * 4.761904761905).toFixed(0)) + 'px',
        'padding': (Math.round((carouselHeight / 100) * 45.068027210884).toFixed(0)) + 'px ' + (Math.round((carouselHeight / 100) * 4.251700680272).toFixed(0)) + 'px ' + (Math.round((carouselHeight / 100) * 5.102040816327).toFixed(0)) + 'px ' + (Math.round((carouselHeight / 100) * 5.102040816327).toFixed(0)) + 'px '
    });
    $('.contact-details ul li').css({
        'padding': '0px ' + '0px ' + '0px ' + (Math.round((carouselHeight / 100) * 5.102040816327).toFixed(0)) + 'px '
    });

    // sitemap.css | Sitemap (% of carouselHeight)
    $('.sitemap').css({
        'padding': (Math.round((carouselHeight / 100) * 46.598639455782).toFixed(0)) + 'px ' + '0px ' + (Math.round((carouselHeight / 100) * 5.102040816327).toFixed(0)) + 'px ' + (Math.round((carouselHeight / 100) * 5.102040816327).toFixed(0)) + 'px'
    });


    // FOR MOBILE
    if (viewportWidth < 480) {
        // modify touch carousel css properties % of carouselHeight
        $('.tile-column-casestudy, .tile-column-casestudy img').css({
            'height': carouselHeight + 'px',
            'width': (Math.round(carouselHeight / 100 * 70.0).toFixed(0)) + 'px'
        });
        $('.tile-column-casestudyextra, .tile-column-casestudyextra img').css({
            'height': carouselHeight + 'px',
            'width': (Math.round(carouselHeight / 100 * 70.0).toFixed(0)) + 'px'
        });

        // base.css | Headline Small (% of carouselHeight)
        $('.headline-large h1').css({
            'font-size': (Math.round((carouselHeight / 100) * 4.761904761905).toFixed(0)) + 'px',
            'padding': '0px ' + (Math.round((carouselHeight / 100) * 4.251700680272).toFixed(0)) + 'px ' + (Math.round((carouselHeight / 100) * 0.850340136054).toFixed(0)) + 'px ' + (Math.round((carouselHeight / 100) * 5.0).toFixed(0)) + 'px'
        });

        // about.css | Approach / Clients (% of carouselHeight)
        $('.approach, .clients').css({
            'padding': (Math.round((carouselHeight / 100) * 31.0).toFixed(0)) + 'px ' + '0px ' + (Math.round((carouselHeight / 100) * 5.102040816327).toFixed(0)) + 'px ' + (Math.round((carouselHeight / 100) * 8.8).toFixed(0)) + 'px'
        });
        $('.approach p, .clients p').css({
            'font-size': (Math.round((carouselHeight / 100) * 3.0).toFixed(0)) + 'px'
        });
        $('.competencies').css({
            'padding': (Math.round((carouselHeight / 100) * 31.00).toFixed(0)) + 'px ' + (Math.round((carouselHeight / 100) * 1.5).toFixed(0)) + 'px ' + (Math.round((carouselHeight / 100) * 5.102040816327).toFixed(0)) + 'px ' + (Math.round((carouselHeight / 100) * 6.8).toFixed(0)) + 'px'
        });
        $('.competencies p').css({
            'font-size': (Math.round((carouselHeight / 100) * 2.2).toFixed(0)) + 'px'
        });

        // about.css | Team (% of carouselHeight)
        $('.team').css({
            'width': (Math.round((carouselHeight / 100) * 41.0).toFixed(0)) + 'px',
            'padding': (Math.round((carouselHeight / 100) * 26).toFixed(0)) + 'px ' + (Math.round((carouselHeight / 100) * 3.401360544218).toFixed(0)) + 'px ' + '0px ' + (Math.round((carouselHeight / 100) * 5.102040816327).toFixed(0)) + 'px'
        });
        $('.team p').css({
            'font-size': (Math.round((carouselHeight / 100) * 2.2).toFixed(0)) + 'px',
            'padding': '0px ' + '0px ' + (Math.round((carouselHeight / 100) * 0.680272108844).toFixed(0)) + 'px ' + (Math.round((carouselHeight / 100) * 5.102040816327).toFixed(0)) + 'px'
        });

        // casestudies.css | Project Description (% of carouselHeight)
        $('.project-description').css({
            'width': (Math.round((carouselHeight / 100) * 62.0).toFixed(0)) + 'px',
            'padding': (Math.round((carouselHeight / 100) * 25.0).toFixed(0)) + 'px ' + '0px ' + '0px ' + '0px'
        });
        $('.project-description p, .clients p').css({
            'font-size': (Math.round((carouselHeight / 100) * 2.8).toFixed(0)) + 'px',
            'text-align': 'left'
        });

        // casestudies.css | Project Extra (% of carouselHeight)
        $('.project-extra').css({
            'top': (Math.round((carouselHeight / 100) * 25.0).toFixed(0)) + 'px'
        });
        $('.project-extra p').css({
            'width': (Math.round((carouselHeight / 100) * 62.0).toFixed(0)) + 'px',
            'font-size': (Math.round((carouselHeight / 100) * 2.8).toFixed(0)) + 'px'
        });

    }

    // FOR MOBILE iPHONE 4 & 5 only
    if (viewportWidth < 321) {
        // casestudies.css | Project Description (% of carouselHeight)
        $('.project-description').css({
            'width': (Math.round((carouselHeight / 100) * 61.0).toFixed(0)) + 'px',
            'padding': (Math.round((carouselHeight / 100) * 25.0).toFixed(0)) + 'px ' + '0px ' + '0px ' + (Math.round((carouselHeight / 100) * 2.551020408163).toFixed(0)) + 'px'
        });
    }
}

function touchConfiguration($) {
    // detect touch browsers returns true or false
    var isTouch = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));

    // detect narrow viewport and set snapToItems variable
    var snap = window.innerWidth < 480 ? 'false' : 'true';

    // TOUCH BROWSERS
    if (isTouch == true) {
        // initialize carousel for touch browsers without snap to items
        if (snap == 'false') {
            noSnapConfiguration($);
            // initialize carousel for touch browsers with snap to items
        } else {
            selectItem($, commonConfiguration);
        }
    } else {
        // NON-TOUCH BROWSERS
        // initialize carousel for non-touch browsers with snap to items
        directionNavConfiguration($);
    }
    //==============================================================================
    // TOUCH CAROUSEL CONFIGURATION END
    //==============================================================================
}

function initializeTouchCarousel() {
    jQuery(function ($) {
        cssConfiguration($);
        touchConfiguration($);
    });
}

// Call the initialize function
initializeTouchCarousel();
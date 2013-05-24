
$(function() {
    // Carousel Rotator functionality
    var carouselRotator = {
        init: function() {
            var list = document.getElementById('carousel-rotator')
            if(list) {
                var items = list.getElementsByTagName('div');
                var all = items.length;
                if(all > 0) {
                    var opts = $('#carousel-rotator').cycle({
                        speed:  800,
                        timeout: 8000,
                        pager:  '.hero-nav',
                        onPagerEvent: function() {
                            opts.timeout = 0
                        },
                        pagerAnchorBuilder  : function(idx, slide) {
                            // return selector string for existing anchor
                            return '.hero-nav li:eq(' + idx + ')';
                        }
                    }).data('cycle.opts');
                } else {
                    $("#carousel-rotator").text("There are no images to load.");
                    console.log('There are no images to load.');
                };
            };
        }
    };
    carouselRotator.init();
});
(function($) {
    $(window).load(function() {
        // masonry
        $('.rk-news-items').masonry({
          //columnWidth: 200,
          itemSelector: '.rk-col-4'
        });

        $('.close').on('click', function() {
            $('.rk-sidebar').removeClass('opened');
            $('.rk-content').removeClass('with-sidebar');
        });
    });
}(jQuery));

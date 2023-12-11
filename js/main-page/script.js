$(document).ready(function () {

    $('.mp-block__desk').slick({
        slidesToShow: 1,
        infinite: true,
        arrows: true,
        draggable: false,
        nextArrow: "<span class='mp-block__adv__next-Arrow'><i class=\"fas fa-chevron-right\"></i></span>"
    });

    $(".mp-block__adv-item").on('click', function (e) {
        e.preventDefault();
        var parentWrap = $(this).parents(".mp-block__adv");
        var parent = $(this).parents(".mp-block__adv")[0];
        var count = $(parent).find('.mp-block__adv-item').length;
        var width = $(".row").width();
        var num = $(this).data('page')-1;

        if(count>0 && num>=0) {
            var block = $(parent).find('.mp-block__desk-wrap');
            $(block).css('left',-35+((width/count)*num)+"px")
                .fadeIn(100);
            $(parent).find('.mp-block__desk').slick('setPosition').slick('slickGoTo',num);
            var sliderWrap = $(parent).find('.mp-block__desk-wrap');
            $(document).mouseup(function (e) {
                var container = $(sliderWrap);
                var parent = $(parentWrap);
                if (container.has(e.target).length === 0
                    && parent.has(e.target).length === 0){
                    container.fadeOut(100);
                }
            });
        }
    });

    $('.mp-block__desk-hide').on('click', function () {
        var parent = $(this).parents(".mp-block__desk-wrap")[0];
        $(parent).fadeOut(100);
    });
});
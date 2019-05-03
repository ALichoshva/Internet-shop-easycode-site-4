$(function() {
    (function () {
        // .header-nav навигация
        let nav = $('.header__menu-list');

        // .menu-btn - кнопка меню
        $('.header__mobile-btn').click(function() {
            if(nav.hasClass('active')) {
                nav.removeClass('active');
            }
            else {
                nav.addClass('active');
            }
        });
    }());

    (function () {
        // .sibedar
        let sidebar = $('.product-page__side-bar');
        let close = $('.product-page__sidebar-close .fa-times');

        // .menu-btn - кнопка
        $('.product-page__mobile-btn').click(function() {
            if(sidebar.hasClass('product-page__side-bar--active')) {
                sidebar.removeClass('product-page__side-bar--active');
            }
            else {
                sidebar.addClass('product-page__side-bar--active');
            }
        });
        $(close).click(function(){
            sidebar.removeClass('product-page__side-bar--active');
        });
    }());

    $( ".release-products__tabs" ).tabs();

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            960:{
                items:3
            },
            1600:{
                items:4
            }
        }
    });

    if($("div").is(".upload-page-wrap")) {
        $('.upload-form select').styler();
        $('.upload-form .upload-form__type-file').styler();
    }

    if($("div").is(".product-price")) {
        $('.product-price select').styler();
    }

    if($('div').is('.product-page__input')){
        $(".js-range-slider").ionRangeSlider({
            type: "double",
            skin: "round",
            min: 0,
            max: 4000,
            from: 0,
            to: 2000,
            grid: false,
            hide_min_max: true,
            prefix: '$'
        });
    }

    $("#modal").iziModal({
        width: 730,
        radius: 0,
    });

    $(document).on('click', '.btn-login-form', function (event) {
        event.preventDefault();
        // $('#modal').iziModal('setZindex', 99999);
        // $('#modal').iziModal('open', { zindex: 99999 });
        $('#modal').iziModal('open');
    });

    $(document).on('click', '.login__close', function (event) {
        $('#modal').iziModal('close');
    });


});
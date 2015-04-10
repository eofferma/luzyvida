jQuery(document).ready(function ($) {
    "use strict";
    
//    INTENTO POR CERRAR MENU AL CLICKEAR EN OTRO LUGAR    
//    $('html').on('click', function (e) {
//        if (!$(e.target) == $('nav li a') || ($('.to_menu').hasClass('active')) || $('body').width() <= 768) {
//            $('.to_menu').removeClass('active');
//            $('.to_menu').next('nav').hide();
//        }
//    });
    
    //MENU PRINCIPAL - CLASE ACTIVE Y FUNCIÓN PARA MOBILE
    $('.to_menu').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next('nav').hide();
        } else {
            $(this).addClass('active');
            $(this).next('nav').show();
        }
        
        $(this).next('nav').children('a').on('click', function () {
            e.stopPropagation();
        });
    });
    
    //TRIANGULO MENU
    triangle();
    
    //SELECTOR TERAPIAS  
    $('.select_area .arrow_select, .select_area span').click(function () {
        if ($('body').width() < 751) {
            if ($(this).parent('.select_area').find('.therapy_sel').is(':visible')) {
                $(this).parent('.select_area').find('.therapy_sel').slideUp(200);
            } else {
                $('.select_area .therapy_sel').hide();
                $(this).parent('.select_area').find('.therapy_sel').slideDown(200);
            }
        }
    });
    $('.select_area li').click(function () {
        if ($('body').width() < 751) {
            var valSelect = $(this).children('a').html();
            $(this).parents('.select_area').children('input').val(valSelect);
            $(this).parents('.select_area').children('span').hide().html(valSelect).fadeIn(300);
            $(this).parent('.therapy_sel').slideUp(200);
        }
    });

    //SLIDER BANNER
    $('#banner .slider').bxSlider({
        mode: 'fade',
        pager: false,
        autostart: true,
        prevText: '',
        nextText: ''
    });
    
    //SLIDER TERAPIAS
    $('#terapias .content_area').bxSlider({
        pagerCustom: '#the_sel',
        controls: false,
        mode: 'fade'
    });
    $('#terapias .content_pic').bxSlider({
        pagerCustom: '#the_sel',
        controls: false,
        mode: 'fade'
    });
    
    //SLIDER TERAPEUTAS
    $('#terapeutas .team').jcarousel({
        easing: 'linear',
        wrap: 'circular',
        animation: 1000
    });
    $('#terapeutas .jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('#terapeutas .jcarousel-next').jcarouselControl({
        target: '+=1'
    });
    $('#spec_the a').on('click', function (e) {
        e.preventDefault();
    });
    
    //FUNCIÓN SCROLL
    $(document).on('scroll', onScroll);
    
    //ON CLICK SCROLL
    $('nav li a, .scrolling, h1 a').click(function (e) {
        var target = $(this).attr("href");
        goToSection(target, e);
        $(this).parent().parent().parent().removeClass('active');
    });
    
    
    //WIDGET COMENTARIOS
    $('#opiniones .comments').bxSlider({
        mode: 'fade',
        pagerCustom: '.ctrl_comments',
        controls: false
    });
    
    //DATEPICKER
    $('.datepicker').pickadate({
        format: 'dd/mm/yyyy',
        clear: false,
        today: false,
        close: false,
        firstDay: 'Monday',
        min: 'Today',
        disable: [7]
    });
});


//FUNCIONES PARA SCROLL MENU
var goToSection = function (idSection, event) {
    "use strict";
    event.preventDefault();
    $('body, html').stop().animate({scrollTop: $(idSection).offset().top - 80}, 800);
};

var onScroll = function (event) {
    "use strict";
    var scrollPos = $(document).scrollTop();
    
    $('header nav li a').each(function () {
        var currLink = $(this),
            refElement = $(currLink.attr('href'));
        if (refElement.position().top - 80 <= scrollPos && refElement.position().top - 80 + refElement.height() > scrollPos) {
            $('header nav li').parent('li').removeClass('active');
            $(this).parent('li').addClass('active');
        } else {
            currLink.parent('li').removeClass('active');
        }
    });
};

//FUNCIÓN TRIANGULO
function triangle(event) {
    "use strict";
    
    $('nav li').each(function () {
        var widtha = $(this).width(),
            halfwa = (widtha / 2) + 'px';
        
        $(this).children('a').children('i').css('border-width', '20px ' + halfwa + ' 0 ' + halfwa);
    });
}
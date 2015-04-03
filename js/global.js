jQuery(document).ready(function ($) {
    "use strict";
    
    //MENU
    $('.to_menu').on('click', function (e) {
        e.preventDefault();
        
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next('nav').hide();
        } else {
            $(this).addClass('active');
            $(this).next('nav').show();
        }
    });
        
    //SELECT TERAPIAS  
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

    //BANNER
    $('#banner .slider').bxSlider({
        mode: 'fade',
        pager: false,
        autostart: true,
        prevText: '',
        nextText: ''
    });
    //TERAPIAS
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
    
    //TERAPEUTAS
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
    
    $(document).on('scroll', onScroll);
    
    //SCROLL MENU
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
    
    
    //WIDTH
    if ($(window).width < 769) {
        $('body').addClass('mobile');
    } else {
        $('body').removeClass('mobile');
    }
    
});
//FUNCIONAMIENTO SCROLL MENU
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
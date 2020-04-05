$(document).ready(function () {
    const
        user = detect.parse(navigator.userAgent),
        browser = user.browser.family,
        headerInfo = $('.header-info'),
        laptop = $('.laptop'),
        headerContainer = $('.header-container');

    headerContainer.click(function (e) {
        e.preventDefault();
        laptop.toggleClass('back');
        headerInfo.toggleClass('back');
    });

    setInterval(() => {
        laptop.toggleClass('back');
        headerInfo.toggleClass('back');
    }, 10000);

    const writeMe = $('.write-me');

    writeMe.click(function (e) {
        e.preventDefault();
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        if (browser === 'Safari') {
            $('body').animate({ scrollTop: destination }, 1000);
        } else {
            $('html').animate({ scrollTop: destination }, 1000);
        }
        return false; 
    });

    const
        menuBtn = $('.menu-btn'),
        menuItem = $('.menu-item'),
        menu = $('.menu');

    menuBtn.click(function (e) {
        e.preventDefault();
        menuBtn.toggleClass('menu-btn_active');
        menu.toggleClass('menu_active');
    });

    menu.click(function (e) {
        e.preventDefault();
        menuBtn.toggleClass('menu-btn_active');
        menu.toggleClass('menu_active');
    });

    menuItem.click(function (e) {
        e.preventDefault();
        $('.menu-item-active').toggleClass('menu-item-active');
        $(this).toggleClass('menu-item-active');
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        if (browser === 'Safari') {
            $('body').animate({ scrollTop: destination }, 1000);
        } else {
            $('html').animate({ scrollTop: destination }, 1000);
        }
        menuBtn.toggleClass('menu-btn_active');
        menu.toggleClass('menu_active');
        return false; 
    });
});
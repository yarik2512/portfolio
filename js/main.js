$(document).ready(function () {
    const
        user = detect.parse(navigator.userAgent),
        browser = user.browser.family,
        headerInfo = $('.header-info'),
        laptop = $('.laptop'),
        headerContainer = $('.header-container');

    headerContainer.click(function (e) { 
        laptop.toggleClass('back');
        headerInfo.toggleClass('back');
    });

    const writeMe = $('.write-me');

    writeMe.click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        if (browser === 'Safari') {
            $('body').animate({ scrollTop: destination }, 1000);
        } else {
            $('html').animate({ scrollTop: destination }, 1000);
        }
        return false; 
    });
});
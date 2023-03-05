$(document).ready(function() {
    $('.menu-btn-open').click(function() {
        $('.menu').toggleClass('active');
        $('.menu').removeClass('deactive');
        $('.main-content').toggleClass('deactive');
    });
    $('.menu-btn-close').click(function() {
        $('.main-content').removeClass('deactive');
        $('.menu').toggleClass('deactive');
    });
});

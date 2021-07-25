
$('.menu__btn').on('click', function () {
    $(this).toggleClass('menu__btn--active');
});

$('.menu__btn, .menu__link').on('click', function () {
    $('.menu').toggleClass('menu--active');
});
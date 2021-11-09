$(document).ready(() => {
    $('.js-button-opener').on('click', function () {
        if($('.heading').hasClass('active')) {
            $('.heading').removeClass('active');
        } else {
            $('.heading').addClass('active');
        }
    })
});
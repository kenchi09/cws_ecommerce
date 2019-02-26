$(function () {
    $('.shipping-address-list .card-body').click(function () {
        $('.shipping-address-list .card-body').removeClass('selected');
        $(this).addClass('selected');
    });

    $('#billToSameAddress').change(function () {
        $('.billing-address-list').toggleClass('d-none');
    });

    $('.fa-question-circle').tooltip();
});
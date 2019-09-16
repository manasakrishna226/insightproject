// JavaScript Document
$('.btncaroudel').on('click', function() {
     $(".imageanimate").addClass("animated , slideInDown");
     setTimeout(function () {
    $(".imageanimate").removeClass('animated , slideInDown');
}, 1500);
});

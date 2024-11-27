$(function(){

var blockA = $('.home_serv').offset().top;

$('.btnserv').click(function() {
    // $(window).scrollTop(blockA); //直接跳格

    $('html,body').animate({scrollTop: blockA}, 500)
    return false;
  });




})
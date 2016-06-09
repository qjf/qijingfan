// jquery nav toggle
$(document).ready(function(){
  $(document).on("click", "#nav-icon1", function(){
    $(".navbar").slideToggle(100);
  });
  //scroll-page
  $(function() {
    $(window).scroll( function(){
      $('.drop').each( function(i){

        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
        bottom_of_window = bottom_of_window + 1000;
        if( bottom_of_window > bottom_of_object ){
          $(this).animate({'opacity':'1'},1000);
        }
      });
    });
    $(document).on("click","#nav-icon1",function(){
      $(this).toggleClass("open");
    });
  });
  // scroll Nav ID to each section
  $(document).on('click', ".page-scroll", function(event){
    event.preventDefault(); // prevent default function
    var target = $(this).attr("href");
    $("body").animate({
      scrollTop: $(target).offset().top // smooth scroll down on nav
    }, 2000);
  });
  // slider
  $(window).load(function() {
    $('#myslides').flexslider({
      animation: "slide",
      directionNav: false,
      controlNav: false,
      touch: true,
      smoothHeight: false,
      pauseOnHover: true,
      slideshowSpeed: 3000,
      before: function(slider){
        $(slider).find(".flex-caption").addClass("flex-test");
      }
    });
  });
  $(".clickit").on('click',function(){
    $('.loading-page').fadeOut(2000);
  });
});

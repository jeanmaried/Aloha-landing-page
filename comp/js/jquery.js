$(document).ready(function(){

var width =$(window).width();

  if (width < 600) {
    $('.slider').bxSlider({
    maxSlides:1,
    minSlides:1,
    slideWidth: 450
    });
  }
  else if (width < 1000){
    $('.slider').bxSlider({
    maxSlides:2,
    minSlides:2,
    slideWidth: 450
    });
  }
  else {
    $('.slider').bxSlider({
    maxSlides:4,
    minSlides:4,
    slideWidth: 450
    });
  };

  $(window).on('resize',function(){
   if (width > 0) {  
     location.reload();
   }
 });
})

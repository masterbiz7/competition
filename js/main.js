$(function() {

  /*$('.bxslider').bxSlider({
    mode: 'horizontal',
    speed: 500,
    slideSelector: '.slider-content',
    adaptiveHeight: false,
    responsive: true,
    moveSlides: 1,
    useCSS: false,    
    touchEnabled: true,
    controls: true,
    prevSelector: '<img src="../img/slide-left.png" alt="next"/>',
    nextSelector: '<img src="../img/slide-right.png" alt="next"/>'
  });*/

  
$('.slider').slick({
  infinite: true,  
  slidesToScroll: 1,  
  dots: true,
  dotsClass: 'slick-dots',
  speed: 1000,
  prevArrow: '<img class="prev" src="img/slide-left.png" alt="prev" />',
  nextArrow: '<img class="next" src="img/slide-right.png" alt="next" />' 
 
});
});
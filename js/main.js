$(function() {

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
$(function() {

$('.slider').slick({
  infinite: true,  
  slidesToScroll: 1,  
  dots: true,
  dotsClass: 'slick-dots',
  speed: 1000,
  prevArrow: '<img class="prev" src="img/slide-left.png" alt="prev" />',
  nextArrow: '<img class="next" src="img/slide-right.png" alt="next" />' 
  /*responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        prevArrow: '<img class="prev" src="img/slide-left.png" alt="prev" />',
        nextArrow: '<img class="next" src="img/slide-right.png" alt="next" />'
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ] */
  
});

});
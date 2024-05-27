let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

$(document).ready(function(){
    $('.home-gallery').slick({
        arrows: false,
        speed: 2000,
        autoplay: true,
        pauseOnHover: false
    });
  });


$(function () {

  $(window).scroll(function () {

      $('.heading,h2,h3,p,tr').each(function (i) {

          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          if (bottom_of_window > bottom_of_object) {

              $(this).animate({ 'opacity': '1' }, 2000);

          }

      });

  });

  
  $('.slideshow').each(function () {

      var $slides = $(this).find('img'), 
          slideCount = $slides.length,   
          currentIndex = 0;              
   
      $slides.eq(currentIndex).fadeIn();

      setInterval(showNextSlide, 4500);

      function showNextSlide() {

          var nextIndex = (currentIndex + 1) % slideCount;

          $slides.eq(currentIndex).fadeOut();

          $slides.eq(nextIndex).fadeIn();

          currentIndex = nextIndex;
      }

  });

  
  $('.ml6 .letters').each(function () {
      $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });

  anime.timeline({ loop: true })
      .add({
          targets: '.ml6 .letter',
          translateY: ["1.1em", 0],
          translateZ: 0,
          duration: 750,
          delay: function (el, i) {
              return 50 * i;
          }
      }).add({
          targets: '.ml6',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
      });
});


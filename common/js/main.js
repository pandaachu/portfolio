$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.heading,h2,h3,p,tr').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},2000);
                    
            }
            
        }); 
    
    });
    
});


$(function () {

    /*
     * Slideshow
     */
    // 對每個有slideshow類別的元素進行處理
    $('.slideshow').each(function () {

        var $slides = $(this).find('img'), // 所有Slide
            slideCount = $slides.length,   // Slide個數
            currentIndex = 0;              // 目前Slide的index
        // 淡入顯示首張Slide
        $slides.eq(currentIndex).fadeIn();

        // 每7500毫秒就執行showNextSlide函數
        setInterval(showNextSlide, 4500);

          // 顯示下一張Slide的函數
        function showNextSlide () {

						//下張Slide的index
						//(如果是最後一張Slide，則會到第一張)
            var nextIndex = (currentIndex + 1) % slideCount;

            // 目前的Slide淡出顯示
            $slides.eq(currentIndex).fadeOut();

            // 下一張Slide淡入顯示
            $slides.eq(nextIndex).fadeIn();

               // 更新目前的index
            currentIndex = nextIndex;
        }

    });

});


// Wrap every letter in a span
$('.ml6 .letters').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml6 .letter',
      translateY: ["1.1em", 0],
      translateZ: 0,
      duration: 750,
      delay: function(el, i) {
        return 50 * i;
      }
    }).add({
      targets: '.ml6',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });


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


//
//$.scrollingParallax('../img/11-banner/banner-1.jpg');
//
//$.scrollingParallax('../img/3-calendar/calendar_bg.png');
//
//$.scrollingParallax('../img/11-banner/banner-1.jpg');


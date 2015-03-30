/**
 * Created by zhangyj on 15-3-18.
 */
$(function(){
    var photos = [
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg'
    ];



    $(window).load(function(){
        setTimeout(function(){
            var slideshow = $('#slideShow').bubbleSlideshow(photos);
            slideshow.autoAdvance(1000);
        },1000);

    });

    // Other valid method calls:

    // slideshow.showNext();
    // slideshow.showPrev();
    // slideshow.stopAutoAdvance();
});
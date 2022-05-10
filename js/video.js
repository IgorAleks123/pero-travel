$('.vid').parent().click(function () {

  if($(this).children(".vid").get(0).paused){       
 $(this).children(".vid").get(0).play();   
$(this).children(".playpause").fadeOut();

    }else{      
 $(this).children(".vid").get(0).pause();

  $(this).children(".playpause").fadeIn();
    }

});
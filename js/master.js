$(document).ready(function(){
  console.log('JavaScript Running');

  $(window).scroll(function(){
   i = $(window).scrollTop();
   if(i>0)
    $('header').addClass('shadow');
  else
    $('header').removeClass('shadow');
    // $('.activities-panel').css('background-position','center ' + (a-i-h)/5 +'px');
    // $('.join-panel').css('background-position','center ' + (j-i-h)/5 +'px');
  });

  function navClose(){
      $('nav').css('right','-200px');
      $('body').css('right','0px');
      $('.intro').css('right','0px');
      $('header').css('right','0px');
      nav = false;
  }

  function navOpen(){
    $('nav').css('right','0');
    $('.intro').css('right','199px');
      $('body').css('right','199px');
      $('header').css('right','199px');
      nav = true;
  }

  $('.home-link').click(function(){
    var  i = 0;
    $('body, html').animate({scrollTop: i - 69}, 1000);
    navClose();
  });
  $('.about-link').click(function(){
    var  i = $('.about').offset().top;
    $('body, html').animate({scrollTop: i - 69}, 1000);
    navClose();
  });
  $('.activities-link').click(function(){
    var  i = $('.activities-panel').offset().top;
    $('body, html').animate({scrollTop: i - 69}, 1000);
    navClose();
  });
  $('.join-link').click(function(){
    var  i = $('.join-panel').offset().top;
    $('body, html').animate({scrollTop: i - 69}, 1000);
    navClose();
  });
  $('.connect-link').click(function(){
    var  i = $('.contact').offset().top;
    $('body, html').animate({scrollTop: i - 69}, 1000);
    navClose();
  });

  nav = false;
  $('.mobile-menu').click(function(){
    if(nav){
      navClose();
    }
    else{
      navOpen();
    }
  });

  $('.logo').css('transform','scale(1)');
  setTimeout(function(){
    $('h1').css('top','0px');
    $('h1').css('opacity','1');
  },500);
  setTimeout(function(){
    $('h2').css('top','0px');
    $('h2').css('opacity','1');
  },750);

  a = $('.activities-panel').offset().top;
  j = $('.join-panel').offset().top;
  h = $(window).height();
  console.log(a,j,h);


});

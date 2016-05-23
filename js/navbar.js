/*** Created by Vicente on 07-05-2016. */

(function ($) {
  $(document).ready(function(){
      $(window).scroll(function(){
          if ($(window).scrollTop() >= 150 ){
              $('nav').removeClass('navbar-home');
              $('nav').addClass('navbar-fixed-top');
              $('nav').find('.navbar-brand').show();
              $('body').css('padding-top','70px');

      } else{
            $('nav').removeClass('navbar-fixed-top');
              $('nav').addClass('navbar-home');
              $('body').css('padding','0px');
              $('nav').find('.navbar-brand').hide();
          }
      });

});
  }(jQuery));
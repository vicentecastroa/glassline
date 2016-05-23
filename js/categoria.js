/**
 * Created by Vicente on 13-05-2016.
 */

(function ($) {
  $(document).ready(function() {
      $('.muestra').on('mouseenter', function(){
          $(this).find('.img-responsive').fadeTo(100,0.8);
          $(this).find('.nombre-producto').addClass('nombre-hover');
      });

      $('.muestra').on('mouseleave', function(){
          $(this).find('.img-responsive').fadeTo(100,1);
          $(this).find('.nombre-producto').removeClass('nombre-hover');
      });


});
  }(jQuery));
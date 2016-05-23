/**
 * Created by Vicente on 07-05-2016.
 */


(function ($) {
  $(document).ready(function() {

      $('.muestra').on('mouseenter', function(){
          $(this).find('.img-responsive').fadeTo(100,0.8);
          $(this).find('.nombre-producto').addClass('link-hover');
          $(this).find('.descripcion-producto').addClass('link-hover');
      });

      $('.muestra').on('mouseleave', function(){
          $(this).find('.img-responsive').fadeTo(100,1);
          $(this).find('.nombre-producto').removeClass('link-hover');
          $(this).find('.descripcion-producto').removeClass('link-hover');
      });


      $('#titulo-productos').on('click',function(event) {
          var pos_seccion = ($(this).closest('body').find('.banner').find('#separador-productos').offset());
          event.preventDefault();
          $('html, body').animate({scrollTop: pos_seccion.top}, 500);
      });
});
  }(jQuery));
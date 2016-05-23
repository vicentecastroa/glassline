/**
 * Created by Vicente on 13-05-2016.
 */

(function ($) {
  $(document).ready(function() {
      $('.thumb').on('mouseenter', function(){

          var col = $(this).closest('#fila-fotos').find('.seleccionada');
          col.find('img').toggleClass('thumb-activa');
          col.removeClass('seleccionada');

          $(this).toggleClass('thumb-activa');
          $(this).closest('div').toggleClass('seleccionada');

          var chica = $(this).attr('alt');
          var grande = $(this).closest('.principal').find('#'+chica);
          var activa = grande.closest('.principal').find('.activa');

          activa.toggleClass('activa');
          grande.toggleClass('activa');



      });

});
  }(jQuery));
(function ($) {

  $.fn.filterTable = function ( id ) {

    if (!id) {
      console.error('You must provide filter input ID in options!');
      return null;
    }

    // var settings = $.extend({
    //   // These are the defaults.
    //   id: ''
    // }, options );

    var filterID = id;
    var table = $(this);
    
    $(filterID).on("keyup", function() {
      var value = $(this).val().toUpperCase();

      table.find('tr').each(function(index) {

        $row = $(this);
        // skip the headers from search
        if ($row.find("th").length > 0) return;
        let bool = false;

        $row.find("td").each(function() {
          $cell = $(this).text().toUpperCase();
          if ($cell.indexOf(value) > -1) {  
              bool = true;
          }
        });

        if (bool) {  
          $row.show();
        }
        else {
          $row.hide();
        }
      }); // table each

    }); // search keyup

    return this;
  }

})(jQuery)
$(document).ready(function() {
  $('#contact').on('submit', function (e) {
    e.preventDefault();
    $.ajax({
        type: 'post',
        url: 'contact',
        data: $('#contact').serialize(),
        success: function (data, status) {
          if (data.success === true) {
            $('#modal-open')[0].className = 'hold-transition skin-blue sidebar-mini modal-open';
            $('#myModal')[0].className = 'modal fade in';
            //$('#myModal')[0].css = 'display: block; padding-left: 17px';
            $("#myModal").css({ 'display': "block"});
            $( "#modal-open" ).append( '<div class="modal-backdrop fade in"></div>');
						//$('#myModal')[0].innerHTML = data.message;
            //location.href = '/';
          }
          }
        });
  });
});

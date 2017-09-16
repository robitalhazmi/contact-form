$(document).ready(function() {
  $('#contact-form').on('submit', function (e) {
    console.log('submit');
    e.preventDefault();
    $.ajax({
        type: 'post',
        url: 'contact',
        data: $('#contact-form').serialize(),
        success: function (data, status) {
          if (data.success === true) {
            $('#modal-open')[0].className = 'hold-transition skin-blue sidebar-mini modal-open';
            $('#myModal')[0].className = 'modal fade in';
            $("#myModal").css({ 'display': "block"});
            $( "#modal-open" ).append( '<div class="modal-backdrop fade in"></div>');
          }
        }
    });
  });

  $('#login-form').on('submit', function (e) {
    e.preventDefault();
    $.ajax({
        type: 'post',
        url: 'login',
        data: $('#login-form').serialize(),
        success: function (data, status) {
          if (data.success === true) {
						location.href = 'admin';
					}
					else {
            $('#modal-open')[0].className = 'hold-transition login-page modal-open';
            $('#myModal')[0].className = 'modal fade in';
            $("#myModal").css({ 'display': "block"});
            $( "#modal-open" ).append( '<div id="modal-backdrop" class="modal-backdrop fade in"></div>');
					}
        }
    });
  });

  $('#myModal').on('click', function (e) {
    $('#myModal')[0].className = 'modal fade';
    $("#myModal").css({ 'display': "none"});
    $( "#modal-backdrop" ).remove();
  });

});

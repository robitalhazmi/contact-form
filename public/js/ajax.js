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
            $('#modalLogin')[0].className = 'modal fade in';
            $("#modalLogin").css({ 'display': "block"});
            $( "#modal-open" ).append( '<div id="modal-backdrop" class="modal-backdrop fade in"></div>');
					}
        }
    });
  });

  $('#modalLogin').on('click', function () {
    $('#modalLogin')[0].className = 'modal fade';
    $("#modalLogin").css({ 'display': "none"});
    $( "#modal-backdrop" ).remove();
  });

  $(".clickable-row").click(function() {
    var messageId = $(this).attr('value');

    $.get('message?id='+messageId, function(data, status) {
      $('#inbox').hide();
      $('#read-message')[0].className = 'box box-primary';
      $('#subject')[0].innerHTML = data.title;
      $('#sender')[0].innerHTML = "From: "+data.email;
      var date = $('#message-date')[0].innerHTML;
      $('#sender').append('<span class="mailbox-read-time pull-right">'+date+'</span>');
      $('#message-content')[0].innerHTML = data.content;
    });

  });

});

// Generated by CoffeeScript 1.3.3
(function() {

  $(function() {
    var submitPassword;
    submitPassword = function() {
      return client.post("/password/reset/" + key, {
        password: $('#password-input').val()
      }, {
        success: function() {
          $('.alert-error').fadeOut();
          $('.alert-success').fadeIn();
          $('.alert-success').html("Password reset succeeded");
          return setTimeout(function() {
            return window.location = "/login";
          }, 1500);
        },
        error: function(err) {
          var msg;
          $('.alert-success').fadeOut();
          msg = JSON.parse(err.responseText).msg;
          $('.alert-error').html(msg);
          return $('.alert-error').fadeIn();
        }
      });
    };
    $('#password-input').keyup(function(event) {
      if (event.which === 13) {
        return submitPassword();
      }
    });
    return $('#password-input').focus();
  });

}).call(this);

window.onload = function() {

  var map = {
    "<3": "\u2764\uFE0F",
    ":)": "\uD83D\uDE03",
  };

  function escapeSpecialChars(regex) {
    return regex.replace(/([()[{*+.$^\\|?])/g, '\\$1');
  };

  document.getElementById('textarea').onkeyup = function() {
    for (var i in map) {
      var regex = new RegExp(escapeSpecialChars(i), 'gim');
      this.value = this.value.replace(regex, map[i]);
    }
  };

  document.getElementById('textarea').onkeypress = function(e) {
    if (e.which == 13) {
      var chatMessage = this.value;
      var div = document.getElementById('chat');
      div.innerHTML = div.innerHTML + chatMessage + "<br/>";
      this.value = "";
    }
  };

};

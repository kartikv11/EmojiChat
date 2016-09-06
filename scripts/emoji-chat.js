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
      // store current positions in variables
      var start = this.selectionStart,
          end = this.selectionEnd;

      var regex = new RegExp(escapeSpecialChars(i), 'gim');
      this.value = this.value.replace(regex, map[i]);

      // restore from variables...
      this.setSelectionRange(start, end);
    }
  };

  document.getElementById('textarea').onkeypress = function(e) {
    if (e.which == 13) {
      e.preventDefault();
      var chatMessage = this.value;
      var div = document.getElementById('chat');
      div.innerHTML = div.innerHTML + chatMessage + "<br/>";
      this.value = "";
    }
  };

};

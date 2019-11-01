//Back-End logic//
function beepBoop(userInput) {
  var outputArray = []
  var userName = $('input#inputName').val();

  for (i = 0; i <= userInput; i++) {
    if (i.toString().includes(3)) {
      outputArray.push(" I'm sorry, " + userName + ". I'm afraid I can't do that. ")
    } else if (i.toString().includes(2)) {
      outputArray.push(' Boop! ');
    } else if (i.toString().includes(1)) {
      outputArray.push(' Beep! ');
    }  else {
      outputArray.push(' ' + i + ' ');

    }
  }
  return outputArray;

}

//Front-End logic//
$(document).ready(function() {
  $('form#inputGroup').submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($('input#inputNumbers').val());
    $('#results').text(beepBoop(userInput));
    $('#output').show();
  });
});

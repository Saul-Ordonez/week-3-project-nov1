//Back-End logic//
// function checkUserInput(userInput) {
//   if (isNaN(userInput)) {
//     alert('Please enter a valid number.');
//     console.log(userInput);
//   }
//   else if (userInput < 0) {
//     alert('Please enter a positive number.');
//   }
// }

function beepBoop(userInput) {
  var outputArray = []

  for (i = 0; i <= userInput; i++) {
    if (i.toString().includes(3)) {
      outputArray.push(" I'm sorry, Dave. I'm afraid I can't do that. ")
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
  $('form#numbers').submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($('input#inputNumbers').val());
    $('#results').text(beepBoop(userInput));
    $('#output').show();
  });
});

//back-end logic
// function inputCheck(userInput) {
//   if (isNaN(userInput)) {
//     alert('Please enter a real number');
//   }
//   else if (userInput < 0) {
//     alert('Please enter a positive number');
//   }
// }
function beepBoop(userInput) {
  // var beep = 'Beep!';
  // var boop = 'Boop!';
  // var sorry = "I'm sorry Dave, I'm afraid I cannot do that.";
  var outputArray = [];

  for (i = 0; i < userInput.length; i++); {
    if ((i.toString()).includes("3")) {
      outputArray.push(" I'm sorry Dave, I'm afraid I cannot do that. ");
    }
    else if ((i.toString()).includes("2")) {
      outputArray.push(' boop! ');
    }
    else if ((i.toString()).includes("1")) {
      outputArray.push(' beep! ');
    }
    else {
      outputArray.push(i);
    }
  }
  return outputArray.join();

}

//front-end logic
$(document).ready(function() {
  $('form#numbers').submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($('input#inputNumbers').val());
    $('#results').text(beepBoop(userInput));
  });
});

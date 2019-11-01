//back-end logic
function inputCheck(userInput) {
  if (isNaN(userInput)) {
    alert('Please enter a real number');
  }
  else if (userInput < 0) {
    alert('Please enter a positive number');
  }
}
function beepboop(userInput) {

  var beep = 'Beep!';
  var boop = 'Boop!';
  var sorry = "I'm sorry Dave, I'm afraid I cannot do that.";
  var outputArray = [];

  for (i = 0; i <= userInput; i++);
    if ((i === 3) && (i !== 0)) {
      outputArray.push(sorry);
    }
    else if (i.toString().includes('0')) {
      outputArray.push(boop);
    }
    else if (i.toString().includes('1')) {
      outputArray.push(beep);
    }
    else {
      outputArray.push(i);
    }
  {
    return outputArray;
  }
}


//front-end logic
$(document).ready(function() {
  $('form#numbers').submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($('input#inputNumbers').val());
    $('.output#result').text(beepboop(userInput));


  });
});

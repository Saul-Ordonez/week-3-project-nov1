//back-end logic
function inputCheck(userInput) {
  if (isNaN(userInput)) {
    alert('Please enter a real number');
  }
  else if (userInput < 0) {
    alert('Please enter a positive number');
  }
}



//front-end logic
$(document).ready(function() {
  $('form#numbers').submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($('input#inputNumbers').val());
    $('.output').append()


  });
});

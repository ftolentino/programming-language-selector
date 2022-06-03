//UI Logic
$(document).ready(function() {
  $("#survey-form").submit(function(event) {
    event.preventDefault();

    const colorInput = $("input:radio[name=color]:checked").val();
    const handInput = $("input:radio[name=hand]:checked").val();
    const petInput = $("input:radio[name=pet]:checked").val();
    const clubInput = $("input:radio[name=club]:checked").val();
    const timeOfDayInput = $("input:radio[name=answer]:checked").val();

    if (colorInput === 'red' && handInput === 'lefty' && petInput === 'cat' && clubInput === 'liverpool' && timeOfDayInput === 'yes') {
      $('.output').text('Java');
      $("#result-container").show();
    } else if ( colorInput === 'blue' && handInput ==='righty' && petInput === 'dog' && clubInput === 'man-city' && timeOfDayInput === 'no') {
      $(".output").text('C#');
      $("#result-container").show();
    } else if (colorInput === 'red' && handInput ==='righty' && petInput === 'dog' && clubInput === 'liverpool' && timeOfDayInput === 'no') {
      $(".output").text('Python');
      $("#result-container").show();
    } else {
      $(".output").text('Javascript');
      $("#result-container").show();
    }
  });
});
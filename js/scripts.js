// Business Logic
function javaOutcome() {
  const colorInput = $("input:radio[name=color]:checked").val();
  const handInput = $("input:radio[name=hand]:checked").val();
  const petInput = $("input:radio[name=pet]:checked").val();
  const clubInput = $("input:radio[name=club]:checked").val();
  const timeOfDayInput = $("input:radio[name=answer]:checked").val();

  return colorInput === 'red' && handInput === 'lefty' && petInput === 'cat' && clubInput === 'liverpool' && timeOfDayInput === 'yes';
}

function cSharpOutcome() {
  const colorInput = $("input:radio[name=color]:checked").val();
  const handInput = $("input:radio[name=hand]:checked").val();
  const petInput = $("input:radio[name=pet]:checked").val();
  const clubInput = $("input:radio[name=club]:checked").val();
  const timeOfDayInput = $("input:radio[name=answer]:checked").val();

  return colorInput === 'blue' && handInput === 'righty' && petInput === 'dog' && clubInput === 'man-city' && timeOfDayInput === 'no';
}

function pythonpOutcome() {
  const colorInput = $("input:radio[name=color]:checked").val();
  const handInput = $("input:radio[name=hand]:checked").val();
  const petInput = $("input:radio[name=pet]:checked").val();
  const clubInput = $("input:radio[name=club]:checked").val();
  const timeOfDayInput = $("input:radio[name=answer]:checked").val();

  return colorInput === 'red' && handInput === 'righty' && petInput === 'dog' && clubInput === 'liverpool' && timeOfDayInput === 'no';
}

//UI Logic
$(document).ready(function() {
  $("#survey-form").submit(function(event) {
    event.preventDefault();

    const colorInput = $("input:radio[name=color]:checked").val();
    const handInput = $("input:radio[name=hand]:checked").val();
    const petInput = $("input:radio[name=pet]:checked").val();
    const clubInput = $("input:radio[name=club]:checked").val();
    const timeOfDayInput = $("input:radio[name=answer]:checked").val();

    if (javaOutcome()) {
      $('.output').text('Java');
      $("#result-container").show();
    } else if (cSharpOutcome()) {
      $(".output").text('C#');
      $("#result-container").show();
    } else if (pythonpOutcome()) {
      $(".output").text('Python');
      $("#result-container").show();
    } else {
      $(".output").text('Javascript');
      $("#result-container").show();
    }
  });
});
//UI Logic
$(document).ready(function() {
  $("#survey-form").submit(function(event) {
    event.preventDefault();
    const colorInput = $("input:radio[name=color]:checked").val();
    const handInput = $("input:radio[name=hand]:checked").val();
    const petInput = $("input:radio[name=pet]:checked").val();
    const clubInput = $("input:radio[name=club]:checked").val();
    const timeOfDayInput = $("input:radio[name=answer]:checked").val();

    if (colorInput === 'red') {
      $('.output').text('Java');
      $("#result-container").show();
    } else if (handInput === 'righty') {
      $(".output").text('C#');
      $("#result-container").show();
    } else if (petInput === 'cat') {
      $(".output").text('Python');
      $("#result-container").show();
    } else if (clubInput === 'liverpool') {
      $(".output").text('C#');
      $("#result-container").show();
    } else if (timeOfDayInput === 'no') {
      $(".output").text('Python');
      $("#result-container").show();
    } else {
      $(".output").text('Javascript');
      $("#result-container").show();
    }
  });
});
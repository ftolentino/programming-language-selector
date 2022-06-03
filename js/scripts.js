// Business Logic

//UI Logic
$(document).ready(function() {
  $("#survey-form").submit(function(event) {
    event.preventDefault();

    const colorInput = $("input:radio[name=color]:checked").val();
    const handInput = $("input:radio[name=hand]:checked").val();

    if (colorInput === 'red' && handInput === 'righty') {
      $('.output').text('Javascript');
      $("#result-container").show();
    } else if ( colorInput === 'blue' && handInput ==='lefty') {
      $(".output").text('C#');
      $("#result-container").show();
    }
  });
});
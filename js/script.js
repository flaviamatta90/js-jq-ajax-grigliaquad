// start
$(document).ready(
  function (){

    // Generare una griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).

    var container = '';

    for (var x = 0; x < 6; x++){
        container += '<div class="first">';
        for (var y = 0; y < 6; y++){
          container += '<div class="box"></div>';
        }
        container += '</div>';
    }

    $('.container').append(container);

    $(".box").click(function(){

      var clickBox = $(this);

      $.ajax(
      {
        url: "https://flynn.boolean.careers/exercises/api/random/int",
        "method": "GET",
        "success": function (data, stato) {
          var rispostaServer = data.response;
          console.log(data.response);

        // Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
          if (rispostaServer <= 5){
            clickBox.addClass("yellow");
          }else{
            clickBox.addClass("green");
          }

        // Il numero ottenuto appare al centro del quadrato.
          clickBox.text(rispostaServer);
        },

        "error": function (richiesta, stato, errori) {
          alert("E' avvenuto un errore. " + errore);
        }

      });

    });

  });

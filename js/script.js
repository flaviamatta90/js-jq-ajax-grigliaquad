// start
$(document).ready(
  function (){

    // Generare una griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
    // Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
    // Il numero ottenuto appare al centro del quadrato.

    $.ajax(
    {
      url: "https://flynn.boolean.careers/exercises/api/random/int",
      "method": "GET",
      "success": function (data, stato) {
        var rispostaServer = data.response;
        stampaRisultato(rispostaServer);
        console.log(data.response);
      },
      error: function (richiesta, stato, errori) {
      alert("E' avvenuto un errore. " + errore);
      }
    }
    );

    function stampaRisultato (numServer){
      console.log(numServer)
      if (numServer <= 5){
        alert("ha vinto il pc");
      } else{
        alert("hai vinto tu");
      };
    };



  });

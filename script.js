var
  todasimagens = [],
  selecionados = [],
  ids = [],
  imagemfundo = "img/cross.png"
var
  contadorcartoes = 0,
  comparador = []

$(document).ready(function() {
  $("#start").click(function() {

    var cards = ["img/android.png", "img/chrome.png", "img/facebook.png", "img/firefox.png", "img/googleplus.png", "img/html5.png", "img/twitter.png", "img/windows.png"]

    for (var a = todasimagens.length; a > 0; a--) {
      todasimagens.pop();
    }
    $(".jogo").empty()
    for (i = 0; i <= cards.length * 2; i++) {

      for (var j = cards.length; j;) {

        var n = Math.random() * j-- | 0;

        var temporaria = cards[n];

        cards[n] = cards[j];

        cards[j] = temporaria;

        var img = $('<img id="img' + i + '" class="cards" src=' + temporaria + ' onclick="combinacoes(this,' + todasimagens.length + ')">');

        todasimagens.push(temporaria);

        img.fadeIn(1000).slideDown(1000);

        $("#jogo").append(img);

        img.slideUp(1000).fadeOut(1000, function() {

          $(".cards").attr("src", imagemfundo);

          $(".cards").fadeIn(1000).slideDown(3000);

        });
        i++
      }
    }
  })
});


function combinacoes(img, indiceArray) {

  if (selecionados.length < 2) {

    $("#" + img.id).attr("src", todasimagens[indiceArray]);

    if (selecionados.length == 0) {

      selecionados.push(indiceArray);

      ids.push(img.id);

      comparador.push(todasimagens[indiceArray]);

    }
    else if (selecionados.length == 1) {

      selecionados.push(indiceArray);

      ids.push(img.id);

      comparador.push(todasimagens[indiceArray]);

      if (comparador[0] == comparador[1]) {

        selecionados = [];

        ids = [];

        comparador = [];

        contadorcartoes += 2;

        console.log(contadorcartoes)

        if (contadorcartoes == todasimagens.length) {
          alert("Boaa, você é muito bom!")
          $("#jogo").empty()
          contadorcartoes = 0
        }
      } else {
        setTimeout(function() {

          $("#" + ids[0]).attr("src", imagemfundo);

          $("#" + ids[1]).attr("src", imagemfundo);

          selecionados = [];

          ids = [];

          comparador = [];

        }, 1000)
      }
    }
  }

}
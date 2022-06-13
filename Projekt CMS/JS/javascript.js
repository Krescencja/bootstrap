
var timerID = null
function wyswietlDate()
{
  var data = new Date();
  var miesiac = data.getMonth() + 1;
  if (miesiac < 10){
      miesiac = "0" + miesiac;
  }
  var dzien = data.getDate();
  if (dzien < 10){
      dzien = "0" + dzien;
  }
  var rok = data.getYear();
  if (rok < 1000){
      rok = 2000 + rok - 100;
  }
  var dzisiaj = dzien + "/" + miesiac + "/" + rok;
  document.write(dzisiaj);
}

function jakiDzien()
{
    var data = new Date();
     dzien = data.getDay();
    switch(dzien){
     case 0: document.write("Niedziela"); break;
     case 1: document.write("Poniedziałek"); break;
     case 2: document.write("Wtorek"); break;
     case 3: document.write("Środa"); break;
     case 4: document.write("Czwartek"); break;
     case 5: document.write("Piątek"); break;
     case 6: document.write("Sobota"); break;
     default: document.write("Dziś mamy nieznany dzień tygodnia :)");
    }
}
function godzina()
{
    var data = new Date();
    var godziny = data.getHours();
    if (godziny < 10){
    godziny = "0" + godziny;
    }
    var minuty = data.getMinutes();
    if (minuty < 10){
    minuty = "0" + minuty;
    }
    var handm = godziny + ":" + minuty;
    document.write(handm);
}





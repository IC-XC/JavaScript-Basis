function fact() {
  var i;
  var getal;
  var f;

  f = 1;
  getal = document.getElementById("getal").value;

  if (getal < 0) {
    const output =
      "Ongeldige invoer.  De faculteit van een negatief getal bestaat niet.";
    document.getElementById("output").innerHTML = output;
  } else if (getal != parseInt(getal, 10)) {
    const output = "Ongeldige invoer. De waarde van een decimaal is niet geldig in faculteit, omdat het geen geheel getal is.";
    document.getElementById("output").innerHTML = output;
  } else {
    for (i = 1; i <= getal; i++) {
      f = f * i;
    }
    i = i - 1;
    const output = "De faculteit van het getal " + i + " is: " + f;
    document.getElementById("output").innerHTML = output;
  }
}

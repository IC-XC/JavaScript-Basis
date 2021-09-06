function bereken() {
  let a = document.getElementById("getal1").value;
  let b = document.getElementById("getal2").value;
  
  
    if (a == '' || b == '' || a == 0 || b == 0) {
      alert("Niet delen door 0.");
      return;
    } 

    let A = Math.max(+a,+b)
    let B = Math.min(+b,+a)
    let C = A / B;
    document.getElementById("output").textContent = "" + A + "/" + B + "=" + C;
}
  
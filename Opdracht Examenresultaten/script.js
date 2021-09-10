function bereken() {
  const a = document.getElementById("getal1").value;
  const b = document.getElementById("getal2").value;

  const A = Number( a );
  const B = Number( b );

    if (  0 === B ) {
      alert("Niet delen door 0.");
    }

    const max = Math.max( A, B );
    const min = Math.min( A, B );
    const C = max / min;

    const output = String( max + "/" + min + "=" + C );
  
    document.getElementById("output").innerHTML = output;
}
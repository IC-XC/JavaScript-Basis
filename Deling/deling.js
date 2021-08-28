
function bereken() {
    var a = document.getElementById("getal1").value;
    var b = document.getElementById("getal2").value;
   
    try {
        if (a == '' || b == '' || a == 0 || b == 0) {
            alert("Voer Een Waarde In Die Groter Is Dan 0");
        } 
        
        else {
            var A = Number(a);
            var B = Number(b);
            var C = 0;
            var output = "";
            
            if  
                (C = A / B){
                output = "" + A + "/" + B + "=" + C;
            }
            
            var element = document.getElementById("output").innerHTML = output;
        }
    }
        catch(err) {
        }
}
   

    

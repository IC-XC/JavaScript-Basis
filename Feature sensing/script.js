var aFeatures = [
  'document.images',
  'document.layers',
  'document.all',
  'document.getElementById',
  'document.querySelector',
  'document.styleSheets',
  'document.createElement',
  'document.createNodeIterator',
  'document.implementation.createDocument',
  'window.walkTheDog',
  'window.focus',
  'window.ActiveXObject',
  'window.XMLHttpRequest',
  'window.localStorage',
  '[].push',
  '[].filter',
  'Object.prototype',
  'navigator.geolocation',
  'document.documentElement.classList'
]

//===================================
window.onload = function () {
	var eBrowserTest = document.getElementById('browserTest');
  eBrowserTest.innerHTML = "Uw browser is " + navigator.userAgent;
	
}

//===================================
function hasFeatures(){
  var eFeatureLijst = document.getElementById('featureLijst');
  var nFeatures = aFeatures.length;
  if(nFeatures>0) {
    var sLijst = "<ul>";

    for (var i=0; i<nFeatures; i++) {
      var bSupport = (eval(aFeatures[i]))?true:false;
      var sKleur = (bSupport===true)?'groen':'rood';
      sLijst += "<li>";
      sLijst += "class=' " + sKleur + "'>";
      sLijst += aFeatures[i];
      sLijst += " <span class='support'> + bSupport + </spam>";
      sLijst += "</ul>";
    }

  
    sLijst += "</ul>";
    eFeatureLijst = sLijst;
  }

}
//===================================
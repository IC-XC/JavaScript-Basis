/* We localiseren de container en maken een div aan met een id "footer" */
var eContainer = document.getElementById('container');
var eItem = document.createElement('div');
eItem.setAttribute("id", "footer");

/* We maken een hyperlink aan naar de VDAB website */
var eLink = document.createElement('a');
eLink.setAttribute("href", "https://belgie.fm/");
eLink.setAttribute("target", "_blank");
sLink = document.createTextNode('FM');
eLink.appendChild(sLink);

/* We maken het tekstfragment in een p element*/
var eFooter = document.createElement('p');
sTekst1 = document.createTextNode('Je vindt een zender op de ');
sTekst2 = document.createTextNode(' website');
eFooter.appendChild(sTekst1);
eFooter.appendChild(eLink);
eFooter.appendChild(sTekst2);

/* We voegen de footer (het p element) toe aan de div */
eItem.appendChild(eFooter);

/* We voegen de div toe aan de containter */
eContainer.appendChild(eItem);
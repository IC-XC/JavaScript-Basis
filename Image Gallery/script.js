//gallery_images.txt
//save as gallery_images.js



// Image_gallery_versie1.js
// een Javascript_PF project
 
window.onload = function () {
  var eImg = document.getElementById('plaatshouder');
  //nieuwe eventhandler voor alle hyperlinks in de menubalk
  //var eSidebar = document.querySelector('sidebar');
  //var eLinks = eSidebar.getElementsByTagName('a');
  var eLinks = document.querySelectorAll('sidebar a');
  console.log('sidebarLinks %s', eLinks.length);
  for(var i=0;i<eLinks.length;i++){
       eLinks[i].addEventListener('click',function (e){
            e.preventDefault();
            toonFoto(this, eImg);
       })
  }
}

function toonFoto(eLink,eImg){
  /* wisselt de bron van het src attribuut van de img#beeld
  @ eLink, een hyperlink element
  @ eImg, plaatshouder img
  */
  //console.log(eLink.href);
  eImg.src = eLink.href;
  var sInfo = eLink.getAttribute('title');
  var eInfo = document.getElementById('info');
  if(eInfo){
       //eInfo bestaat reeds
       eInfo.innerHTML = sInfo;
  }
  else {
    var eInfo = document.createElement('p');
    eInfo.id = "info";
    eInfo.innerHTML = sInfo;
    //eImg.parentNode.appendChild(eInfo);
    eImg.parentNode.insertBefore(eInfo,eImg.parentNode.firstChild);
  }
  }

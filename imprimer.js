const aperçu = document.getElementById("boutonMenuFermer");
let fenetreAperçu = document.getElementsByTagName("canvas");

window.printDiv = function(imprimer) {
    let innerContents = document.getElementById(imprimer).innerHTML; 
    window.print();
};

aperçu.addEventListener('mousedown', telecharger);
function telecharger(){
html2canvas(document.querySelector("#imprimer")).then(function(canvas) {
  window.open(canvas.toDataURL("image/png",'_blank,noopener'));
  });
  }

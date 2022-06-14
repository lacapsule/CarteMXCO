const aperçu = document.getElementById("boutonMenuAperçu");

aperçu.addEventListener('mousedown', telecharger);
function telecharger(){
html2canvas(document.querySelector("#imprimer")
).then(function(canvas) {
  window.open(canvas.toDataURL("image/png", 1.0, '_blank,noopener'));
});
}

window.printDiv = function(imprimer) {
  let innerContents = document.getElementById(imprimer).innerHTML; 
  window.print();
};

function download() {
  boutonMenuEnregistrer.addEventListener("click", () => {
  var downloading = browser.downloads.download("#imprimer")
  var dl = document.getElementById('#imprimer');
  dl.src = "carteMorlaixCommunaute.png";
})}
let aperçu = document.getElementById("boutonMenuFermer");
let fenetreAperçu = document.getElementsByTagName("canvas");

window.printDiv = function(imprimer) {
    let innerContents = document.getElementById(imprimer).innerHTML; 
    window.print();
};

aperçu.addEventListener("click", () => {
html2canvas(document.querySelector("#imprimer"), {
  onrendered: function (canvas) {
    var nWindow = window.open('');
    nWindow.document.body.appendChild(canvas);
    nWindow.focus();
    nWindow.print();
    location.reload();
}
})}); 
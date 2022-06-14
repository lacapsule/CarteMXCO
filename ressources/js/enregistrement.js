function download() {
    boutonMenuEnregistrer.addEventListener("click", () => {
    var downloading = browser.downloads.download("#imprimer")
    var dl = document.getElementById('#imprimer');
    dl.src = "carteMorlaixCommunaute.png";
})}
const villes = document.querySelectorAll('.ville');
const vide = document.querySelector('.vide');
const body = document.querySelector('body');


villes.forEach(ville => {
    ville.addEventListener('contextmenu', function (e) {
        e.preventDefault();
       var x = e.clientX + window.pageXOffset + 100;
       var y = e.clientY + window.pageYOffset + 75;
       ville.style.fill ='#1d3499';
       console.log('La souris est positionné en : x=' + x + ' y=' + y);

       var info = document.querySelector('.infos');
       var name = document.querySelector('h5');
       info.classList.toggle('show')
       info.style.left = x + 'px';
       info.style.top = y + 'px';
        name.innerHTML = ville.dataset.name;

    //    info.style.transform = 'translate(-' + y + 'px, -' + x + 'px)';
        
    });
});

body.addEventListener('click', function (e) {
    
    if(!e.target.classList.contains('infos')){
    var info = document.querySelector('.infos')
    
    if(info.classList.contains('show')) {
        info.classList.remove('show');
        console.log(e.target);
    }
    var name = document.querySelector('h5').innerText;
}
});







// document.addEventListener('click', function (e) {
//     var info =document.querySelector('.infos');
//     if(info.classList.contains('show')) {
//         info.classList.remove('show');
//     }
// });
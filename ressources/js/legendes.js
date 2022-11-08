let premier = document.getElementById("premierRond");
let second = document.getElementById("secondRond");
let troisieme = document.getElementById("troisiemeRond");
let quatrieme = document.getElementById("quartriemeRond");


var legends = document.querySelectorAll(".legend");


legends.forEach(function(legend) {
    legend.addEventListener("keydown", function(e) {
        
        var text = legend.textContent;
        if(text.length > 38) {  
            
            e.preventDefault();
            console.log(e);
            
            alert('Attention la légende ne peut contenir que 38 caractères. Actuellement elle contient' + text.length + 'caractères');
            text = text.substring(0, 38);
            console.log(text);
            legend.textContent = text;
            
        }
    });
});


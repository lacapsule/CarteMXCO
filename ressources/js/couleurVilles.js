const btns = document.querySelectorAll('.color');
const bgs = document.querySelectorAll('.fond');

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        var name = btn.dataset.value;   
            bgs.forEach(fond => {
                if(fond.dataset.name == btn.dataset.value) {
                    btn.addEventListener("input", () => {
                        fond.style.fill = btn.value;
                        fond.classList.add("set");
                    });
                }
            });

    });
});
function save() {
          
          html2canvas(document.querySelector('#imprimer')).then(canvas => {
            var a = document.createElement('a');
            a.download = 'carteMorlaixCommunaute.png';
            a.href = canvas.toDataURL();
            a.click();
            a.delete;
            screenshot.innerHTML = "";  
          });
          }
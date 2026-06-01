    let imagenes = document.getElementsByClassName('foto');
    let img = 0;

    function fInicio() {
        aplicarModoAlCargar();

        for(i = 1; i < imagenes.length; i++) {
            imagenes[i].style.display='none';
        }
        setTimeout("fCambiarImagen()",3);
    }

    function fCambiarImagen() {
        imagenes[img].style.display='none';

        if (img == imagenes.length -1) {
            img = 0;
        } else {
            img++
        }
                            
        imagenes[img].style.display='';

        setTimeout("fCambiarImagen()",3000);
    }
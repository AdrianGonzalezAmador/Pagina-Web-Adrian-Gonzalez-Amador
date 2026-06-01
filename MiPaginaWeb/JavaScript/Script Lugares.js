let imagenes = document.getElementsByClassName('destino');
let img = 0;

function fInicio() {
    aplicarModoAlCargar();
    for(i = 1; i < imagenes.length; i++) {
        imagenes[i].style.display='none';
    }
}

function fCambiar() {
    imagenes[img].style.display='none';

    if (img == imagenes.length -1) {
        img = 0;
    } else {
        img++
    }
           

    imagenes[img].style.display='';
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
}
function fdarkmode() {
    let checkbox = document.getElementById('darkmode');
    document.body.classList.toggle('dark', checkbox.checked);

    localStorage.setItem('modoOscuro', checkbox.checked);
}
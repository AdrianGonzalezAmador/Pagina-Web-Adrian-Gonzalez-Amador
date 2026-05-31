function aplicarModoAlCargar() {
    let modo = localStorage.getItem('modoOscuro') === 'true';
    document.body.classList.toggle('dark', modo);

    let checkbox = document.getElementById('darkmode');
    if (checkbox) checkbox.checked = modo;
}

function fdarkmode() {
    let checkbox = document.getElementById('darkmode');

    document.body.classList.toggle('dark', checkbox.checked);

    localStorage.setItem('modoOscuro', checkbox.checked);
}
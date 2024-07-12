modificarTexto = function() {
    let cmpTitulo1 = document.getElementById("titulo1");
    cmpTitulo1.innerHTML = "Modificando texto original";

    cmpTitulo1.innerText = "Otro texto";
}

modificarImagen = function() {
    let cmpImagen1;
    cmpImagen1 = document.getElementById("imagen1");
    cmpImagen1.src = "img/eiffel-tower.jpg";
}
cambiarFeliz = function () {
    let cmpImagenFeliz;
    cmpImagenFeliz = document.getElementById("imgEmoji");
    cmpImagenFeliz.src = "feliz.jpg";

    let cmpTitulo1 = document.getElementById("txtEmoji");
    cmpTitulo1.innerHTML = "FELIZ";

}

cambiarTriste=function(){
    let cmpImagenTriste;
    cmpImagenTriste = document.getElementById("imgEmoji");
    cmpImagenTriste.src="triste.jpg";

    let cmpTitulo2 = document.getElementById("txtEmoji");
    cmpTitulo2.innerHTML="TRISTE";
}

cambiarCansado = function(){
    let cmpImagenCansado;
    cmpImagenCansado = document.getElementById("imgEmoji");
    cmpImagenCansado.src="cansado.png";

    let cmpTitulo3 = document.getElementById("txtEmoji");
    cmpTitulo3.innerHTML="CANSADO";
}



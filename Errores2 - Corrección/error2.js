cambiarFeliz=function(){
    let cmpImagen;
    cmpImagen=document.getElementById("imgEmoji");
    cmpImagen.src="feliz.jpg";

    let cmpTitulo1 = document.getElementById("txtEmoji");
    cmpTitulo1.innerHTML = "FELIZ";
}

cambiarCansado=function(){
    let cmpImagen;
    cmpImagen=document.getElementById("imgEmoji");
    cmpImagen.src="cansado.png";

    let cmpTitulo2 = document.getElementById("txtEmoji");
    cmpTitulo2.innerHTML = "CANSADO";
}
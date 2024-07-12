convertirMillas = function(){
    let cmpMillas = document.getElementById("numValor");
    let numero = cmpMillas.value;

    let cmpKm = parseFloat(numero) * 1.609;

    let cmpResultado = document.getElementById("cmbDistancia")
    cmpResultado.innerHTML = ` ${cmpKm} Km`;
    
}

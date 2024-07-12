sumar = function(){
    let cmpCaja1 = document.getElementById("txtValor1");
    let valor1 = cmpCaja1.value;

    let cmpCaja2 = document.getElementById("txtValor2");
    let valor2 = cmpCaja2.value;

    let resultado = parseInt(valor1) + parseInt(valor2);
    
    let cmpResultado = document.getElementById("lblResultado");
    cmpResultado.innerHTML = `Resultado: ${resultado}`;
}

restar = function(){
    let cmpCaja1 = document.getElementById("txtValor1");
    let valor1 = cmpCaja1.value;

    let cmpCaja2 = document.getElementById("txtValor2");
    let valor2 = cmpCaja2.value;

    let resultado = parseInt(valor1) - parseInt(valor2);

    let cmpResultado = document.getElementById("lblResultado");
    cmpResultado.innerHTML = `Resultado: ${resultado}`;
}


multiplicar = function(){
    let cmpCaja1 = document.getElementById("txtValor1");
    let valor1 = cmpCaja1.value;

    let cmpCaja2 = document.getElementById("txtValor2");
    let valor2 = cmpCaja2.value;

    let resultado = parseInt(valor1) * parseInt(valor2);

    let cmpResultado = document.getElementById("lblResultado");
    cmpResultado.innerHTML = `Resultado: ${resultado}`;
}

dividir = function(){
    let cmpCaja1 = document.getElementById("txtValor1");
    let valor1 = cmpCaja1.value;

    let cmpCaja2 = document.getElementById("txtValor2");
    let valor2 = cmpCaja2.value;

    let resultado = parseInt(valor1) / parseInt(valor2);

    let cmpResultado = document.getElementById("lblResultado");
    cmpResultado.innerHTML = `Resultado: ${resultado}`;
}

limpiar = function(){
    document.getElementById("txtValor1").value = "0";
    document.getElementById("txtValor2").value = "0";
    document.getElementById("lblResultado").innerText = "Resultado: ";
}

function calcularcarga(){
    cargarMontoValor = document.getElementById("monto-carga").value
    porcentajeInteresValor = document.getElementById("porcentaje-interes").value
    pagoMesesValor = document.getElementById("pago-por-meses").value
    
    intereses = (cargarMontoValor * (porcentajeInteresValor * 0.03)) / pagoMesesValor

    pagoMes = (cargarMontoValor / pagoMesesValor + intereses)

    document.getElementById("pago").innerHTML = `Mensualidad: ${pagoMes}`
}


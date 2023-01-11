function iniciarJuego()
{
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
}

function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById("Hipoge")
    let inputCapipepo = document.getElementById("Capipepo")
    let inputRatigueta = document.getElementById("Ratigueta")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if ( inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = " hipoge"
    } else if ( inputCapipepo.checked) {
        alert("usted ha seleccionado capipepo")
    } else if (inputRatigueta.checked) {
        alert("usted ha seleccionado ratigueta")
    }   else {
    alert("selecciona una mascota")
    }
}
window.addEventListener("load", iniciarJuego)

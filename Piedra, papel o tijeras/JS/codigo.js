function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
  let resultado = ""
    if(jugada == 1) {
       resultado = "Haz elegido piedra 🥌"
    } else if (jugada == 2) {
        resultado = "Haz elegido papel 📃"
    } else if (jugada == 3) {
        resultado = "Haz elegido tijera ✂️"
    } else {
        resultado = "¡¿Que estas haciendo?!"
    } 
    return resultado
}
  // 1 es piedra, 2 es papel, 3 es tijera
  let jugador = 0
  let pc = 0
  let VICTORIAS = 0
  let DERROTAS = 0

  while (VICTORIAS < 3 && DERROTAS < 3){
    pc = aleatorio(1,3)
    jugador = prompt("Elige tu arma soldado: 1 = 🥌, 2 = 📃, 3 = ✂️")
    // alert("Elegiste " + jugador)
    
    alert("Tu enemigo ha elegido: " + eleccion(pc))
    alert("Haz elegido: " + eleccion(jugador))

    // COMBATE
    if (pc == jugador) {
      alert("EMPATE 🏳")
    } else if (jugador == 1 && pc == 3) {
      alert("¡VICTORIA! 🎊")
      VICTORIAS = VICTORIAS + 1
    } else if (jugador == 2 && pc == 1) {
      alert("¡VICTORIA! 🎊")
      VICTORIAS = VICTORIAS + 1
    } else if (jugador == 3 && pc == 2) {
      alert("¡VICTORIA! 🎊")
      VICTORIAS = VICTORIAS + 1
    } else {
      alert("DERROTA 😢")
      DERROTAS = DERROTAS + 1
    }
  }

  alert(" VICTORIAS " + VICTORIAS + " OCACIONES. DERROTA " + DERROTAS + " OCACIONES.")
  
  if (arremetidaEnemigo == arremetidaJugador) {
    producirAviso("Haz empatado 🏳")
  } else if (arremetidaJugador == "Ballesta" && arremetidaEnemigo == "Espada") {
    producirAviso("¡Haz vencido! 🎊")|  
    existenciasEnemigo--
    spanExistenciasEnemigo.innerHTML = existenciasEnemigo
  } else if (arremetidaJugador == "Espada" && arremetidaEnemigo == "Hacha") {
    producirAviso("¡Haz vencido! 🎊") |
    existenciasEnemigo--
    spanExistenciasEnemigo.innerHTML = existenciasEnemigo
  } else if (arremetidaJugador == "Hacha" && arremetidaEnemigo == "Ballesta") {
    producirAviso("¡Haz vencido! 🎊")
    existenciasEnemigo--
    spanExistenciasEnemigo.innerHTML = existenciasEnemigo
  } else {
    producirAviso("Te han derrotado 🥀")
    existenciasJugador--
    spanExistenciasJugador.innerHTML = existenciasJugador
  }
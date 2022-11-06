const sectionSeleccionarArremetida = document.getElementById("Seleccionar-arremetida")
const sectionReiterar = document.getElementById("reiterar")
const botonGuerreroJugador = document.getElementById("boton-guerrero")
const botonReiterrar = document.getElementById("boton-reiterar")


const sectionSeleccionarGuerrero = document.getElementById("Seleccionar-guerrero")
const spanGuerreroJugador = document.getElementById("guerrero-jugador")

const spanGuerreroEnemigo = document.getElementById("guerrero-enemigo")

const spanExistenciasJugador = document.getElementById("existencias-jugador")
const spanExistenciasEnemigo = document.getElementById("existencias-enemigo")

const unidadAviso = document.getElementById("productoBatalla")
const ProductoArremetidaJugador = document.getElementById("Producto-Arremetida-Jugador")
const ProductoArremetidaEnemigor = document.getElementById("Producto-Arremetida-Enemigor")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorArremetidas = document.getElementById("contenedorArremetidas")

const sectionContemplarMapa = document.getElementById("contemplar-mapa")
const mapa = document.getElementById("mapa")


let guerreros = []
let arremetidaJugador = []
let arremetidaEnemigo = []
let alternativaDeGuerrero
let inputlordArthur 
let inputSrScanor 
let inputLaidyKeen 
let guerreroJugador
let guerreroJugadorObjeto
let arremetidasGuerrero
let arremetidasGuerreroEnemigo
let botonBallesta 
let botonEspada 
let botonHacha 
let botones = []
let indexArremetidaJugador
let indexArremetidaEnemigo
let triunfosJugador = 0
let triunfosEnemigo = 0
let existenciasJugador = 3
let existenciasEnemigo = 3
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "./Guerreros/LeyendsMap.png"


let altitudPorHallar 
let anchoMapa = window.innerHTML = - 20
const anchoMaxMapa = 350
if (anchoMapa > anchoMaxMapa) {
    anchoMapa = anchoMaxMapa = - 20
}
altitudPorHallar = anchoMapa * 600 / 800
mapa.width = anchoMapa
mapa.height = altitudPorHallar

class Guerrero {
    constructor(nombre, foto, vida, fotoMapa, x = 10, y = 10){
        this.nombre = nombre 
        this.foto = foto
        this.vida = vida
        this.arremetidas = []
        this.x = x
        this.y = y
        this.ancho = 40
        this.alto = 40
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.rapidezX = 0
        this.rapidezY = 0
    }
    pintarGuerrero() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho, 
            this.alto
        )
    }
}

let lordArthur = new Guerrero("lordArthur", "./Guerreros/lordArthur.png", 5, "./Guerreros/lordArthurHead.png")

let SrScanor = new Guerrero("SrScanor", "./Guerreros/SrScanor.png", 5, "./Guerreros/SrScanorHead.png")

let LaidyKeen = new Guerrero("LaidyKeen", "./Guerreros/LaidyKeen.png", 5, "./Guerreros/LaidyKeenHead.png")


let lordArthurEnemigo = new Guerrero("lordArthur", "./Guerreros/lordArthur.png", 5, "./Guerreros/lordArthurHead.png", 80, 120)

let SrScanorEnemigo = new Guerrero("SrScanor", "./Guerreros/SrScanor.png", 5, "./Guerreros/SrScanorHead.png", 150, 95)

let LaidyKeenEnemigo = new Guerrero("LaidyKeen", "./Guerreros/LaidyKeen.png", 5, "./Guerreros/LaidyKeenHead.png", 200, 190)


lordArthur.arremetidas.push(
    { nombre: "🏹", id: "boton-ballesta" },
    { nombre: "🏹", id: "boton-ballesta" },
    { nombre: "🏹", id: "boton-ballesta" },
    { nombre: "🗡", id: "boton-espada" },
    { nombre: "🪓", id: "boton-hacha" },
)

lordArthurEnemigo.arremetidas.push(
    { nombre: "🏹", id: "boton-ballesta" },
    { nombre: "🏹", id: "boton-ballesta" },
    { nombre: "🏹", id: "boton-ballesta" },
    { nombre: "🗡", id: "boton-espada" },
    { nombre: "🪓", id: "boton-hacha" },
)

SrScanor.arremetidas.push(
    { nombre: "🗡", id: "boton-espada" },
    { nombre: "🗡", id: "boton-espada" },
    { nombre: "🗡", id: "boton-espada" },
    { nombre: "🏹", id: "boton-ballesta" },
    { nombre: "🪓", id: "boton-hacha" },
)

SrScanorEnemigo.arremetidas.push(
    { nombre: "🗡", id: "boton-espada" },
    { nombre: "🗡", id: "boton-espada" },
    { nombre: "🗡", id: "boton-espada" },
    { nombre: "🏹", id: "boton-ballesta" },
    { nombre: "🪓", id: "boton-hacha" },
)

LaidyKeen.arremetidas.push(
    { nombre: "🪓", id: "boton-hacha" },
    { nombre: "🪓", id: "boton-hacha" },
    { nombre: "🪓", id: "boton-hacha" },
    { nombre: "🏹", id: "boton-ballesta" },
    { nombre: "🗡", id: "boton-espada" },
)

LaidyKeenEnemigo.arremetidas.push(
    { nombre: "🪓", id: "boton-hacha" },
    { nombre: "🪓", id: "boton-hacha" },
    { nombre: "🪓", id: "boton-hacha" },
    { nombre: "🏹", id: "boton-ballesta" },
    { nombre: "🗡", id: "boton-espada" },
)

guerreros.push(lordArthur,SrScanor,LaidyKeen) 

function iniciarJuego() {
    
    sectionSeleccionarArremetida.style.display = "none"
    sectionContemplarMapa.style.display = "none"

    guerreros.forEach((guerrero) => {
        alternativaDeGuerrero = `
        <input type="radio" name="guerrero" id=${guerrero.nombre} />
        <label class="tarjeta-guerrero" for=${guerrero.nombre}>
            <p>${guerrero.nombre}</p>
            <img src=${guerrero.foto} alt=${guerrero.nombre}>
        </label>`

    contenedorTarjetas.innerHTML += alternativaDeGuerrero

    inputlordArthur = document.getElementById("lordArthur")
    inputSrScanor = document.getElementById("SrScanor")
    inputLaidyKeen = document.getElementById("LaidyKeen")

    })

    sectionReiterar.style.display = "none"
    botonGuerreroJugador.addEventListener("click", poseerGuerreroJugador)

    botonReiterrar.addEventListener("click", reiterarJuego)
}

function poseerGuerreroJugador() { 
    sectionSeleccionarGuerrero.style.display = "none"

    if (inputlordArthur.checked) {
        spanGuerreroJugador.innerHTML = inputlordArthur.id
        guerreroJugador = inputlordArthur.id
    } else if (inputSrScanor.checked) {
        spanGuerreroJugador.innerHTML = inputSrScanor.id
        guerreroJugador = inputSrScanor.id
    } else if (inputLaidyKeen.checked) {
        spanGuerreroJugador.innerHTML = inputLaidyKeen.id
        guerreroJugador = inputLaidyKeen.id
    } else {
        alert("¡No pudes acudir a la batalla sin un guerrero!")
    }

    extraerArremetidas(guerreroJugador)
    sectionContemplarMapa.style.display = "flex"
    iniciarMapa()
}

function extraerArremetidas(guerreroJugador) {
    let arremetidas 
    for (let i = 0; i < guerreros.length; i++) {
        if (guerreroJugador === guerreros[i].nombre) {
            arremetidas = guerreros[i].arremetidas
        }

    }
    verArremetidas(arremetidas)
}

function verArremetidas(arremetidas) {
    arremetidas.forEach((arremetida) => {
        arremetidasGuerrero = `
        <button id=${arremetida.id} class="boton-arremetida BArremetida">${arremetida.nombre}</button>
        `
        contenedorArremetidas.innerHTML += arremetidasGuerrero
    })
     botonBallesta = document.getElementById("boton-ballesta")
     botonEspada = document.getElementById("boton-espada")
     botonHacha = document.getElementById("boton-hacha")
     botones = document.querySelectorAll(".BArremetida")
}

function secuenciaArremetida() {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if (e.target.textContent === "🏹") {
                arremetidaJugador.push("Ballesta")
                console.log(arremetidaJugador)
                boton.style.background = "#D72323"
                boton.disabled = true 
            } else if (e.target.textContent === "🗡") {
                arremetidaJugador.push("Espada")
                console.log(arremetidaJugador)
                boton.style.background = "#D72323"
                boton.disabled = true 
            } else {
                arremetidaJugador.push("Hacha")
                console.log(arremetidaJugador)
                boton.style.background = "#D72323" 
                boton.disabled = true 
            } 
            arremetidaAleatoriaEnemigo()
        }) 
    })
}

function poseerGuerreroEnemigo(enemigo) {
    spanGuerreroEnemigo.innerHTML = enemigo.nombre
    arremetidasGuerreroEnemigo = enemigo.arremetidas
    secuenciaArremetida()
}

function arremetidaAleatoriaEnemigo() {
    let arremetidaAleatoria = aleatorio(0,arremetidasGuerreroEnemigo.length -1)

    if (arremetidaAleatoria == 0 || arremetidaAleatoria == 1) {
        arremetidaEnemigo.push("Ballesta")
    } else if (arremetidaAleatoria == 3 || arremetidaAleatoria == 4) {
        arremetidaEnemigo.push("Espada")
    } else {
        arremetidaEnemigo.push("Hacha")
    }
    console.log(arremetidaEnemigo)
    iniciarBatalla()
}

function iniciarBatalla() {
    if (arremetidaJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexArremetidaJugador = arremetidaJugador[jugador]
    indexArremetidaEnemigo = arremetidaEnemigo[enemigo]
}

function combate() {

    for (let index = 0; index < arremetidaJugador.length; index++) {
        if(arremetidaJugador[index] == arremetidaEnemigo[index]) {
            indexAmbosOponentes(index, index)
            producirAviso("Haz empatado 🏳")
        } else if (arremetidaJugador[index] === "Ballesta" &&         arremetidaEnemigo[index] === "Espada") {
            indexAmbosOponentes(index, index)
            producirAviso("¡Haz vencido! 🎊")
            triunfosJugador++
            spanExistenciasJugador.innerHTML = triunfosJugador
        } else if (arremetidaJugador[index] === "Espada" &&  arremetidaEnemigo[index] === "Hacha") {
            indexAmbosOponentes(index, index)
            producirAviso("¡Haz vencido! 🎊")
            triunfosJugador++
            spanExistenciasJugador.innerHTML = triunfosJugador
        } else if (arremetidaJugador[index] === "Hacha" &&  arremetidaEnemigo[index] === "Ballesta") {
            indexAmbosOponentes(index, index)
            producirAviso("¡Haz vencido! 🎊")
            triunfosJugador++
            spanExistenciasJugador.innerHTML = triunfosJugador
        } else {
            indexAmbosOponentes(index, index)
            producirAviso("Te han derrotado 🥀")
            triunfosEnemigo++
            spanExistenciasEnemigo.innerHTML = triunfosEnemigo
        }
    }
        visualizarTriunfos()
}

function visualizarTriunfos(){
    if (triunfosJugador === triunfosEnemigo) {
        producirAvisoFinal("Ha sido un empate! 🏳") 
    } else if (triunfosJugador > triunfosEnemigo) {
        producirAvisoFinal("¡Haz vencido!, pronto te convertirás en el guerrero leguendario 💪🏻")
    } else {
        producirAvisoFinal("¡Haz caido!, debes levantarte pronto, aún tenemos muchas más batallas por luchar 🏳") 
    }
}

function producirAviso(productoBatalla) {
    let nuevaArremetidaJugador = document.createElement("p")
    let nuevaArremetidaEnemigo = document.createElement("p")

    unidadAviso.innerHTML = productoBatalla
    nuevaArremetidaJugador.innerHTML = indexArremetidaJugador
    nuevaArremetidaEnemigo.innerHTML = indexArremetidaEnemigo

    ProductoArremetidaJugador.appendChild(nuevaArremetidaJugador)
    ProductoArremetidaEnemigor.appendChild(nuevaArremetidaEnemigo)
}

function producirAvisoFinal(concluciónBatalla) {
    unidadAviso.innerHTML = concluciónBatalla
    sectionReiterar.style.display = "block"
}

function reiterarJuego() {
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ilustrarCanvas() {
    guerreroJugadorObjeto.x = guerreroJugadorObjeto.x + guerreroJugadorObjeto.rapidezX
    guerreroJugadorObjeto.y = guerreroJugadorObjeto.y + guerreroJugadorObjeto.rapidezY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    guerreroJugadorObjeto.pintarGuerrero()
    lordArthurEnemigo.pintarGuerrero()
    SrScanorEnemigo.pintarGuerrero()
    LaidyKeenEnemigo.pintarGuerrero()
    if (guerreroJugadorObjeto.rapidezX !== 0 || guerreroJugadorObjeto.rapidezY !== 0) {
        vercolision(lordArthurEnemigo)
        vercolision(SrScanorEnemigo)
        vercolision(LaidyKeenEnemigo)
    }
}

function desplazarDerecha() {
    guerreroJugadorObjeto.rapidezX = 5
}

function desplazarIzquierda() {
    guerreroJugadorObjeto.rapidezX = - 5
}

function desplazarAbajo() {
    guerreroJugadorObjeto.rapidezY = 5
}

function desplazarArriba() {
    guerreroJugadorObjeto.rapidezY = - 5
}

function pararMovimiento() {
    guerreroJugadorObjeto.rapidezX = 0 
    guerreroJugadorObjeto.rapidezY = 0 
}

function teclaOprimida(event) {
   switch (event.key) {
    case "ArrowUp":
        desplazarArriba()    
        break
    case "ArrowDown":
        desplazarAbajo()     
        break
    case "ArrowRight":
        desplazarDerecha()     
        break
    case "ArrowLeft":
        desplazarIzquierda()      
        break
    default:
        break
   }  
}

function iniciarMapa() {
    guerreroJugadorObjeto = obtenerObjetoGuerrero(guerreroJugador)
    intervalo = setInterval(ilustrarCanvas, 50)
    window.addEventListener("keydown", teclaOprimida)
    window.addEventListener("keyup", pararMovimiento)
}

function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}

function obtenerObjetoGuerrero() {
    for (let i = 0; i < guerreros.length; i++) {
        if (guerreroJugador === guerreros[i].nombre) {
            return guerreros[i]
        }

    }
}

function vercolision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaGuerrero = 
        guerreroJugadorObjeto.y
    const abajoGuerrero = 
        guerreroJugadorObjeto.y + guerreroJugadorObjeto.alto
    const derechaGuerrero = 
        guerreroJugadorObjeto.x + guerreroJugadorObjeto.ancho
    const izquierdaGuerrero = 
        guerreroJugadorObjeto.x

    if (
        abajoGuerrero < arribaEnemigo ||
        arribaGuerrero > abajoEnemigo ||
        derechaGuerrero < izquierdaEnemigo ||
        izquierdaGuerrero > derechaEnemigo
    ) {
        return
    }

    pararMovimiento()
    clearInterval(intervalo)
    console.log("Se detectó una colisión")
    sectionSeleccionarArremetida.style.display = "flex"
    sectionContemplarMapa.style.display = "none"
    poseerGuerreroEnemigo(enemigo)
}

window.addEventListener("load",iniciarJuego)



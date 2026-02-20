import "bootstrap";
import "./style.css";
import "./app.js";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
    generarCartaAleatoria();
};

function generarCartaAleatoria() {
    const palos = [
        { nombre: "diamantes", simbolo:"♦"},
        { nombre:"corazones" ,simbolo:"♥"},
        { nombre:"picas" , simbolo:"♠"},
        { nombre:"treboles"  ,simbolo:"♣"}
    ];
    const valores = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    
    const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
    const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];

    const carta =document.getElementById("carta");
    const simboloAriba = document.getElementById("simbolo-arriba");
    const simboloAbajo = document.getElementById("simbolo-abajo");
    const valorCarta = document.getElementById("valor-carta");

   
    carta.className = "card " + paloAleatorio.nombre;



    simboloAriba.innerHTML = paloAleatorio.simbolo;
    simboloAbajo.innerHTML = paloAleatorio.simbolo;
    valorCarta.innerHTML = valorAleatorio;



}

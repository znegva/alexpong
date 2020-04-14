const SPIELFELDBREITE = 600;
const SPIELFELDHOEHE = 400;

const PADDELBREITE = 7;
const PADDELHOEHE = 40;

const BALLDURCHMESSER = 10;


function lassDenBallRollen(){
    var ball = document.getElementById("ball");
        
    setInterval(function(){
        bewegeNachUnten(ball, 8);
    }, 2222);
    setInterval(function(){
        bewegeNachRechts(ball, 4);
    }, 800);
    setInterval(function(){
        bewegeNachOben(ball, 7);
    }, 3500);
    setInterval(function(){
        bewegeNachLinks(ball, 6);
    }, 3000);
}

/**
 * Eine Funktion die dazu dient das Spielfeld immer korrekt vorzubereiten,
 * dazu gehört z.B. den Ball in der Mitte zu positionieren, und die paddel wieder mittig aufzustellen.
 * Wir stellen hier auch die größe des spielfeldes, der Paddel und des Balles ein,
 * die Werte dazu nehmen wir uns aus vorher definierten Konstanten.
 */
function spielfeldVorbereiten(){
    var spielfeld = document.getElementById("spielfeld");
    spielfeld.style.width = SPIELFELDBREITE;
    spielfeld.style.height = SPIELFELDHOEHE;

    //den ball in die Mitte positionieren
    var ball = document.getElementById("ball");
    ball.style.width = BALLDURCHMESSER;
    ball.style.height = BALLDURCHMESSER;
    ball.style.top = (SPIELFELDHOEHE - BALLDURCHMESSER) / 2;
    ball.style.left = (SPIELFELDBREITE - BALLDURCHMESSER) / 2;

    //die paddel positionieren
    var paddelLinks = document.getElementById("paddelLinks");
    paddelLinks.style.width = PADDELBREITE;
    paddelLinks.style.height = PADDELHOEHE;
    paddelLinks.style.left = (10 - PADDELBREITE);
    paddelLinks.style.top = (SPIELFELDHOEHE - PADDELHOEHE) /2;

    var paddelRechts = document.getElementById("paddelRechts");
    paddelRechts.style.width = PADDELBREITE;
    paddelRechts.style.height = PADDELHOEHE;
    paddelRechts.style.right = (10 - PADDELBREITE);
    paddelRechts.style.top = (SPIELFELDHOEHE - PADDELHOEHE) /2;
}

/*
    ein paar ganz allgemeine Funktionen
*/
function bewegeNachRechts(element, wert){
    element.style.left = (parseInt(element.style.left) + wert) + "px";
}
function bewegeNachLinks(element, wert){
    element.style.left = (parseInt(element.style.left) - wert) + "px";
}
function bewegeNachOben(element, wert){
    element.style.top = (parseInt(element.style.top) - wert) + "px";
}
function bewegeNachUnten(element, wert){
    element.style.top = (parseInt(element.style.top) + wert) + "px";
}

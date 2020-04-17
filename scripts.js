const SPIELFELDBREITE = 600;
const SPIELFELDHOEHE = 600;

const PADDELBREITE = 7;
const PADDELHOEHE = 40;

const BALLDURCHMESSER = 10;


function lassDenBallRollen(){
    var ball = document.getElementById("ball");
        
    setInterval(function(){
        var richtung = zufallszahlZwischen(0,4);
        var entfernung = ganzzahlZufallszahlZwischen(10,20);
        
        if(richtung<1){
            bewegeNachUnten(ball, entfernung);
        }else if(richtung <2){
            bewegeNachOben(ball, entfernung);
        }else if(richtung <3){
            bewegeNachLinks(ball, entfernung);
        }else{
            bewegeNachRechts(ball, entfernung);
        }
    }, 1000);
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

/**
 * ein paar mathematische Funktionen die wir evtl. öfter mal brauchen
 */
function zufallszahlZwischen(start, ende) {
    return start + Math.random() * (ende - start);
}

function ganzzahlZufallszahlZwischen(start, ende){
    return Math.round(zufallszahlZwischen(start,ende));
}
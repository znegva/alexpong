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
 * eine Funktion die dazu dient das Spielfeld immer korrekt vorzubereiten
 * dazu gehört z.B. den Ball in der Mitte zu positionieren, und die paddel wieder mittig aufzustellen
 */
function spielfeldVorbereiten(){
    //den ball in die Mitte positionieren
    var ball = document.getElementById("ball");
    ball.style.top = "195px";
    ball.style.left = "295px";

    //die paddel positionieren
    var paddelLinks = document.getElementById("paddelLinks");
    paddelLinks.style.left = "3px";
    paddelLinks.style.top = "185px";

    var paddelRechts = document.getElementById("paddelRechts");
    paddelRechts.style.right = "3px";
    paddelRechts.style.top = "185px";
}

/*
    ein paar ganz allgemeine Funktionen
*/
function bewegeNachRechts(element, wert){
    console.log(element.style.left);
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

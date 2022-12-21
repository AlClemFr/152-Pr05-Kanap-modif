"use strict";

//v- Récupération lien courant.
var urlCourant = window.location.href; // console.log(urlCourant);
// fctVisu(true, 2, urlCourant);
//v- Récupération Id procduit dans le lien.

var urlCourantBis = new URL(urlCourant);
var orderId = urlCourantBis.searchParams.get("orderId"); // fctVisu(true, 3, orderId);
//v- Affichage de orerId.

var oorderId = document.getElementById('orderId');
oorderId.textContent = orderId;
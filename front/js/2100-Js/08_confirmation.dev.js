"use strict";

// j- amettre en place.
// v- Récupération lien courant.
var urlCourant = window.location.href; // console.log(urlCourant);

fctVisu(false, 2, urlCourant); // v- Récupération Id procduit dans le lien.

var urlCourantBis = new URL(urlCourant);
var id = urlCourantBis.searchParams.get("id");
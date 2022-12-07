"use strict";

// v- Récupération lien courant.
var urlCourant = window.location.href; // console.log(urlCourant);

fctVisu(false, 2, urlCourant); // v- Récupération Id procduit dans le lien.

var urlCourantBis = new URL(urlCourant);
var id = urlCourantBis.searchParams.get("id");
fctVisu(false, 3, id);

if (false) {
  console.log(id);
}

; // vi- ----------------------------------------------------
// vi- ----------------------------------------------------
// v- Récupération des datas associée à l'Id

var url = "http://localhost:3000/api/products/" + id;
console.log(url);
var Myfetch = fetch(url).then(function (responsive) {
  return responsive.json().then(function (data) {
    // j- pour voir , concerver
    // console.log(data);
    // j- pour voir , concerver
    // console.log(i._id + " " +
    //   i.name + " " +
    //   i.imageUrl + " " +
    //   i.description + " " +
    //   i.altTxt);
    if (true) {
      var total = ""; //b---------

      document.querySelector('#title').innerHTML = data.name; //b---------

      var altTxt = data.altTxt + ', ' + data.name;
      total = "\n            <img src=\"" + data.imageUrl + "\" alt= \"" + altTxt + "\"></img>";
      document.querySelector('.item__img').innerHTML = total; //b---------      

      document.querySelector('#title2').innerHTML = data.name; //b---------  
      // v- mettre en place la vigule, Fait OK     

      var poub = parseFloat(data.price);
      poub /= 10;
      console.log(poub);
      var price = poub.toString();
      document.querySelector('#price').innerHTML = price; //b---------  

      document.querySelector('#description').innerHTML = data.description; //b---------  
      // let i = data.colors.length;
      // console.log(i);

      var i = 0;
      total = "";
      var color = "";

      for (i; i < data.colors.length; i++) {
        var _color = data.colors[i];
        total += "<option value=\"" + _color + "\">" + _color + "</option>"; // total += `<option value="` + data.colors[i] + `">` + data.colors[i] + `</option>`;
      } // console.log(total);


      document.querySelector('#colors').innerHTML = total;
    }
  })["catch"](function (err) {
    return console.log("erreur: " + err);
  });
});
var colors = document.getElementById('colors');
var quantity = document.getElementById('quantity');
var addToCard = document.getElementById('addToCart'); // j- raff page on remet a zero la quantity

quantity.value = 0; // j- teste récupération Quantité
// const quantity = document.getElementById('quantity');
// j- on écoute l'évenement hors champs

quantity.addEventListener('focusout', function () {
  // On écoute l'événement click
  // console.log(quantity);
  // console.log(quantity.value);
  if (quantity.value > 100 || quantity.value < 0 || quantity.value == "") {
    quantity.value = 0;
  }
}); // v- Evenement clic sur le bouton addtoCard // Exemple OC ok
// const addToCard = document.getElementById('addToCart');
// On récupère l'élément sur lequel on veut détecter le clic

addToCard.addEventListener('click', function () {
  // On écoute l'événement click
  if (quantity.value <= 100 & quantity.value > 0) {
    // console.log(id);
    // console.log(colors.value);
    // console.log(quantity.value);
    var toto = id + "-" + colors.value;
    console.log(toto); // addPanier({ id: id, "color": colors.value, "quantity": parseInt(quantity.value) });

    addPanier({
      id: toto,
      "quantity": parseInt(quantity.value)
    });
  } // addToCard.innerHTML = total + "C'est cliqué !";


  addToCard.innerHTML = "C'est cliqué !"; // On change le contenu de notre élément pour afficher "C'est cliqué !"
}); // addToCard.innerHTML = total + "C'est cliqué !";
// quantity.innerHTML = "C'est cliqué !";
// On change le contenu de notre élément pour afficher "C'est cliqué !"